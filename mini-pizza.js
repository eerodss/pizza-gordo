// Mini pizza congelada: edite os dados abaixo para atualizar a seção do site.
const MINI_PIZZA = {
  // Imagens ilustrativas: coloque o caminho (ex.: 'images/mini-1.jpg').
  // Com src vazio, aparece um espaço reservado no lugar da foto.
  fotos: [
    {src: 'images/mini-1.jpg', alt: 'Mini pizza congelada (foto ilustrativa)'},
    {src: 'images/mini-2.jpg', alt: 'Mini pizzas prontas para servir (foto ilustrativa)'},
    {src: 'images/pizza-2.jpg', alt: 'Pizza na caixa (foto ilustrativa)'}
  ],

  // Sabores disponíveis (ex.: ['Calabresa', 'Muçarela']). Vazio esconde o bloco.
  sabores: [],

  // Locais de venda. Sem lat/lng, o endereço é localizado no mapa automaticamente.
  locais: [
    {nome: 'Pizza do Gordo', tipo: 'Pizzaria', endereco: 'Av. Santa Catarina, 791, Cianorte - PR'}
    // Modelo para supermercados (descomente, copie e preencha):
    // {nome: 'Nome do supermercado', tipo: 'Supermercado', endereco: 'Rua, número, cidade - UF'},
    // {nome: 'Outro supermercado', tipo: 'Supermercado', endereco: 'Rua, número, cidade - UF', lat: -23.66, lng: -52.60}
  ]
};

const MINI_CENTER = [-23.6598, -52.6052]; // Cianorte - PR (aproximado)
const LEAFLET_URL = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet';
const GEO_KEY = 'gordo-geo';

function renderMiniGallery(){
  document.getElementById('miniGallery').innerHTML = MINI_PIZZA.fotos.map(f => f.src
    ? `<figure class="photo-placeholder filled"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy"></figure>`
    : `<div class="photo-placeholder" role="img" aria-label="${esc(f.alt)}"><div class="ph-content"><i class="ti ti-pizza"></i><span>Foto ilustrativa</span></div></div>`
  ).join('');
}

function renderMiniFlavors(){
  const box = document.getElementById('miniFlavors');
  if (!MINI_PIZZA.sabores.length) return;
  box.innerHTML = MINI_PIZZA.sabores.map(s => `<span class="badge-pill">${esc(s)}</span>`).join('');
  box.hidden = false;
}

function mapsLink(local){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.endereco)}`;
}

function renderMiniPlaces(){
  document.getElementById('miniPlaces').innerHTML = MINI_PIZZA.locais.map((l, i) => `
    <li class="mini-place" data-place="${i}">
      <span class="mini-tipo">${esc(l.tipo || 'Ponto de venda')}</span>
      <strong>${esc(l.nome)}</strong>
      <span class="mini-end">${esc(l.endereco)}</span>
      <a href="${mapsLink(l)}" target="_blank" rel="noopener"><svg class="ico"><use href="#i-pin"/></svg> Como chegar</a>
    </li>`).join('') +
    (MINI_PIZZA.locais.length < 2 ? '<li class="mini-soon">Os supermercados parceiros serão adicionados em breve.</li>' : '');
}

function loadLeaflet(){
  return new Promise((resolve, reject) => {
    if (window.L) return resolve(window.L);
    const css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = LEAFLET_URL + '.min.css';
    document.head.append(css);
    const js = document.createElement('script');
    js.src = LEAFLET_URL + '.min.js';
    js.onload = () => resolve(window.L);
    js.onerror = reject;
    document.head.append(js);
  });
}

// Localiza um endereço pelo OpenStreetMap (Nominatim) e guarda o resultado neste navegador
async function geocode(address){
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(GEO_KEY)) || {}; } catch (e) {}
  if (address in cache) return cache[address];
  const tries = [address, address.replace(/,\s*\d+\s*,/, ',')];
  for (const q of tries) {
    try {
      const r = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q));
      const j = await r.json();
      if (j[0]) {
        const pos = {lat: Number(j[0].lat), lng: Number(j[0].lon)};
        cache[address] = pos;
        try { localStorage.setItem(GEO_KEY, JSON.stringify(cache)); } catch (e) {}
        return pos;
      }
    } catch (e) {}
    await new Promise(res => setTimeout(res, 1100));
  }
  return null;
}

async function initMiniMap(){
  const box = document.getElementById('miniMap');
  let L;
  try { L = await loadLeaflet(); }
  catch (e) {
    box.innerHTML = '<p class="res-empty">Não foi possível carregar o mapa agora. Veja os endereços ao lado.</p>';
    return;
  }
  const map = L.map(box, {scrollWheelZoom: false}).setView(MINI_CENTER, 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
  }).addTo(map);

  const icon = L.divIcon({
    className: 'mini-pin',
    html: '<svg class="ico"><use href="#i-pin-c"/></svg>',
    iconSize: [34, 34], iconAnchor: [17, 34], popupAnchor: [0, -30]
  });
  const markers = [];
  const fit = () => {
    const pts = markers.filter(Boolean).map(m => m.getLatLng());
    if (pts.length > 1) map.fitBounds(L.latLngBounds(pts), {padding: [40, 40], maxZoom: 15});
    else if (pts.length === 1) map.setView(pts[0], 15);
  };

  for (let i = 0; i < MINI_PIZZA.locais.length; i++) {
    const l = MINI_PIZZA.locais[i];
    const pos = (l.lat != null && l.lng != null) ? {lat: l.lat, lng: l.lng} : await geocode(l.endereco);
    if (!pos) { markers[i] = null; continue; }
    markers[i] = L.marker([pos.lat, pos.lng], {icon, title: l.nome}).addTo(map)
      .bindPopup(`<strong>${esc(l.nome)}</strong><br>${esc(l.endereco)}<br><a href="${mapsLink(l)}" target="_blank" rel="noopener">Como chegar</a>`);
    fit();
  }

  document.getElementById('miniPlaces').addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const li = e.target.closest('[data-place]');
    const m = li && markers[Number(li.dataset.place)];
    if (!m) return;
    map.flyTo(m.getLatLng(), 16);
    m.openPopup();
  });
}

function setupMiniPizza(){
  renderMiniGallery();
  renderMiniFlavors();
  renderMiniPlaces();
  const box = document.getElementById('miniMap');
  if (!('IntersectionObserver' in window)) { initMiniMap(); return; }
  // O mapa só é carregado quando a seção está perto da tela
  const obs = new IntersectionObserver(es => {
    if (es.some(e => e.isIntersecting)) { obs.disconnect(); initMiniMap(); }
  }, {rootMargin: '300px'});
  obs.observe(box);
}

setupMiniPizza();
