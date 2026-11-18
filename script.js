const WA_URL = 'https://wa.me/5544999187735';

// Ativa o preset de fotos (bloco salvo em index.html dentro de <template id="preset-fotos">)
const MOSTRAR_FOTOS = false;

// Caminho da imagem de cada bloco do preset ("" mantém o espaço reservado)
const FOTOS = {fachada: '', pizza: '', forno: '', equipe: '', fachada2: ''};

// Fotos ilustrativas temporárias de alguns sabores (veja images/LEIA-ME.md). Troque pelas fotos reais.
const FOTOS_SABORES = {
  'Margherita': 'images/pizza-3.jpg',
  'Calabresa': 'images/pizza-6.jpg',
  'Catfrango': 'images/pizza-1.jpg',
  'Quatro Queijos': 'images/pizza-4.jpg',
  'Cinco Queijos': 'images/pizza-5.jpg',
  'Palmito Cremoso': 'images/pizza-2.jpg'
};

function flavorPhoto(it){
  return it[3] || FOTOS_SABORES[it[0]] || '';
}

const CAT_LABEL = {salgadas:'Salgadas', especiais:'Especiais', doces:'Doces', docesesp:'Doces especiais'};

const DATA = {
  salgadas: {
    prices: [["Esfiha","R$ 13,00"],["Pizza","R$ 94,00"],["Pizza de Metro","R$ 179,00"]],
    items: [
      ["Atum","Molho, muçarela, atum, cebola e orégano"],
      ["Bacon","Molho, muçarela, bacon e orégano"],
      ["Baiana","Molho, muçarela, calabresa moída, pimenta calabresa, cebola e orégano"],
      ["Brócolis c/ Requeijão","Molho, muçarela, creme de leite, brócolis, requeijão e orégano"],
      ["Calabresa","Molho, muçarela, calabresa fatiada, cebola e orégano",true],
      ["Carne","Carne moída temperada e tomate (sabor exclusivo p/ esfiha)"],
      ["Escarola c/ Bacon","Molho, muçarela, escarola refogada ao alho, bacon, muçarela e orégano"],
      ["Catfrango","Molho, muçarela, requeijão, frango desfiado cremoso e batata palha",true],
      ["Catupyresa","Molho, muçarela, calabresa fatiada e requeijão"],
      ["Cinco Queijos","Molho, muçarela, parmesão, provolone, queijo prato, cheddar e orégano",true],
      ["Lombo Canadense","Molho, muçarela, lombo canadense, requeijão e orégano"],
      ["Lombo c/ Abacaxi","Molho, muçarela, lombo e abacaxi"],
      ["Margherita","Molho, muçarela, tomate cereja fresco, manjericão seco e fresco"],
      ["Milho","Molho, muçarela, milho e orégano"],
      ["MilhiBacon","Molho, muçarela, milho, bacon e orégano",true],
      ["Moda da Casa","Molho, muçarela, frango desfiado cremoso, bacon, milho, palmito, requeijão, azeitona, ovos e orégano"],
      ["Palmito Cremoso","Molho, muçarela, requeijão, palmito cremoso e gergelim preto",true],
      ["Molinella","Molho, muçarela, peito de peru, bacon, palmito, cream cheese e orégano"],
      ["Pepperoni","Molho, muçarela, salame pepperoni e orégano"],
      ["Quatro Queijos","Molho, muçarela, parmesão, provolone, queijo prato e orégano"],
      ["Rúcula c/ Tomate Seco","Molho, muçarela, rúcula, tomate seco e orégano"],
      ["Strogonoff de Frango","Molho, muçarela, strogonoff de frango e batata palha"],
      ["Toscana","Molho, muçarela, calabresa, bacon, ovos, cebola e orégano"]
    ]
  },
  especiais: {
    prices: [["Esfiha","R$ 15,00"],["Pizza","R$ 107,00"],["Pizza de Metro","R$ 194,00"]],
    items: [
      ["Barbecue de Carne","Molho, muçarela, filé em cubos, tomate, cebola picada, molho barbecue e orégano",true],
      ["Camarão","Molho, muçarela, camarão ao creme de leite, cheiro verde e orégano"],
      ["Chicken Cheese","Molho, muçarela, frango cremoso, bacon, cream cheese e orégano",true],
      ["Costela Bovina","Molho, muçarela, costela bovina desfiada, requeijão, cebola roxa e orégano"],
      ["Filé do Chef","Molho, muçarela, filé em cubos, cebola picada, bacon, requeijão e orégano"],
      ["Frango c/ Alho Poró","Molho, muçarela, frango em cubos, alho poró, manjericão seco e orégano"],
      ["Gorgonzola c/ Mel","Creme de leite, muçarela, gorgonzola, gergelim branco e mel"],
      ["Parmegiana","Molho, muçarela, filé em cubos ao molho de tomate, presunto e orégano"],
      ["Strogonoff de Carne","Molho, muçarela, strogonoff de carne e batata palha",true]
    ]
  },
  doces: {
    prices: [["Esfiha","R$ 13,00"],["Pizza","R$ 94,00"],["Pizza de Metro","R$ 179,00"]],
    items: [
      ["Banana Nevada","Creme de leite, muçarela, banana, doce de leite, canela e chocolate branco"],
      ["Brigadeiro","Creme de leite, chocolate ao leite, granulado e leite condensado"],
      ["Charge","Creme de leite, chocolate ao leite, castanha de caju e leite condensado"],
      ["Chocolate","Creme de leite, chocolate ao leite e leite condensado"],
      ["Confeti","Creme de leite, chocolate ao leite, confeti e leite condensado"],
      ["Marnata","Creme de leite, chocolate ao leite, morango e leite condensado",true],
      ["Ouro Negro","Creme de leite, chocolate, gotas de chocolate branco e leite condensado"],
      ["Romeu e Julieta","Creme de leite, muçarela e goiabada"],
      ["Tropical","Creme de leite, muçarela, lascas de abacaxi e leite condensado"]
    ]
  },
  docesesp: {
    prices: [["Esfiha","R$ 15,00"],["Pizza","R$ 107,00"],["Pizza de Metro","R$ 194,00"]],
    items: [
      ["Bombom com Nutella","Creme de leite, nutella e bombom ouro branco em pedaços",true],
      ["Morango com Nutella","Creme de leite, nutella e morango"],
      ["Ninho com Nutella","Creme de leite, nutella e leite em pó"]
    ]
  }
};

const BORDAS = [
  {title:"Pizza", rows:[["Catupiry / Cheddar / Mista salgada","R$ 17,00"],["Chocolate ao leite / branco / mista doce","R$ 20,00"]]},
  {title:"Pizza de Metro", rows:[["Catupiry / Cheddar / Mista salgada","R$ 23,00"],["Chocolate ao leite / branco / mista doce","R$ 26,00"]]}
];

const DRINKS = [
  ["Água mineral","500 ml, com ou sem gás","R$ 6,00"],
  ["Coca-Cola lata","220 ml, normal e zero","R$ 5,00"],
  ["Coca-Cola KS","290 ml, normal e zero","R$ 8,00"],
  ["Coca-Cola","600 ml, normal e zero","R$ 11,00"],
  ["Coca-Cola","1 litro, normal e zero","R$ 15,00"],
  ["Guaraná Gold Scrin","1 litro","R$ 11,00"],
  ["H2O Limoneto","500 ml","R$ 9,00"],
  ["Refrigerante lata","350 ml, Coca, Guaraná, Tônica, Sprite, Fanta Citrus","R$ 7,50"],
  ["Suco Prats laranja","300 ml","R$ 9,50"],
  ["Suco Prats laranja","900 ml","R$ 21,00"],
  ["Suco natural de laranja","300 ml viagem R$12 · 500 ml viagem R$16 · copo 350 ml R$10,50 · jarra 1,5L R$39","a partir de R$ 10,50"],
  ["Suco de polpa (água ou leite)","copo 350 ml ou jarra 1,5L · sabores: abacaxi c/ hortelã, abacaxi, maracujá, acerola, morango, laranja c/ acerola, laranja c/ morango","a partir de R$ 9,00"]
];

// Top 10: edite nomes e ordem conforme o cardápio físico (nome exatamente como em DATA)
const TOP10 = ["Calabresa","Catfrango","Cinco Queijos","MilhiBacon","Palmito Cremoso","Barbecue de Carne","Chicken Cheese","Strogonoff de Carne","Marnata","Bombom com Nutella"];

const COMBOS = [
  ["8 Esfihas","Até 4 sabores tradicionais","R$ 92,00"],
  ["12 Esfihas","Até 4 sabores tradicionais","R$ 126,00"],
  ["20 Esfihas","Até 4 sabores tradicionais","R$ 170,00"]
];

function renderPrices(prices){
  return '<div class="group-price-row">' + prices.map(p =>
    `<div class="price-chip">${p[0]}<b>A partir de ${p[1]}</b></div>`
  ).join('') + '</div>';
}

// Formato de cada sabor: [nome, descrição, (não usado), foto, preço]
// foto: caminho da imagem ou "" (sem foto)
// preço: "R$ 00,00" do sabor, que varia conforme os ingredientes; sem preço, a linha não aparece
function waLink(msg){
  return `${WA_URL}?text=${encodeURIComponent(msg)}`;
}

function renderItems(items, catLabel){
  return '<div class="item-grid">' + items.map(it => `
    <article class="item-card">
      <div class="item-photo">
        ${flavorPhoto(it) ? `<img src="${flavorPhoto(it)}" alt="${esc(it[0])} (foto ilustrativa)" loading="lazy">` : '<i class="ti ti-photo"></i>'}
        ${TOP10.includes(it[0]) ? '<span class="tag">Top 10</span>' : ''}
      </div>
      <div class="item-body">
        <h3>${it[0]}</h3>
        <p>${it[1]}</p>
        ${it[4] ? `<p class="price">Pizza a partir de ${it[4]}</p>` : ''}
        <div class="item-actions">
          <button type="button" class="add-btn" data-add="${esc(it[0])}" data-cat="${esc(catLabel || '')}" aria-label="Adicionar ${esc(it[0])} ao carrinho"><svg class="ico"><use href="#i-cart"/></svg> Adicionar</button>
        </div>
      </div>
    </article>
  `).join('') + '</div>';
}

function buildMenu(){
  const wrap = document.getElementById('menuContent');
  let html = '';
  for (const key in DATA) {
    const g = DATA[key];
    html += `<div class="menu-group" id="grp-${key}" data-cat="${key}" role="tabpanel">
      ${renderPrices(g.prices)}
      ${renderItems(g.items, CAT_LABEL[key])}
    </div>`;
  }
  html += `<div class="menu-group" id="grp-bordas" data-cat="bordas" role="tabpanel">
    <div class="borda-grid">
    ${BORDAS.map(b => `
      <div class="borda-table">
        <h3>${b.title}</h3>
        ${b.rows.map(r => `<div class="borda-row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('')}
      </div>
    `).join('')}
    </div>
  </div>`;
  html += `<div class="menu-group" id="grp-bebidas" data-cat="bebidas" role="tabpanel">
    <div class="drinks-grid">
    ${DRINKS.map(d => `
      <div class="drink-row">
        <div>
          <div class="dn">${d[0]}</div>
          <div class="dv">${d[1]}</div>
        </div>
        <div class="dp">${d[2]}</div>
      </div>
    `).join('')}
    </div>
  </div>`;
  wrap.innerHTML = html;

  document.getElementById('combosWrap').innerHTML = COMBOS.map(c => `
    <div class="combo-card">
      <div class="cn">${c[0]}</div>
      <div class="cd">${c[1]}</div>
      <div class="cp">${c[2]}</div>
      <div class="item-actions">
        <button type="button" class="add-btn" data-add="${esc(c[0])}" data-cat="Combo" aria-label="Escolher sabores do combo ${esc(c[0])}"><svg class="ico"><use href="#i-cart"/></svg> Escolher sabores</button>
      </div>
    </div>
  `).join('');

  document.getElementById('topWrap').innerHTML = TOP10.map((name, i) => {
    let it = null;
    for (const k in DATA) { const f = DATA[k].items.find(x => x[0] === name); if (f) { it = f; break; } }
    if (!it) return '';
    return `<div class="top-card reveal">
      <div class="top-num">${String(i + 1).padStart(2, '0')}</div>
      ${flavorPhoto(it) ? `<img class="top-img" src="${flavorPhoto(it)}" alt="${esc(name)} (foto ilustrativa)" loading="lazy">` : ''}
      <div class="top-body"><h3>${name}</h3><p>${it[1]}</p>${it[4] ? `<p class="tp">Pizza a partir de ${it[4]}</p>` : ''}</div>
    </div>`;
  }).join('');

  document.getElementById('grp-salgadas').classList.add('active');
}

function setupTabs(){
  const tabs = [...document.querySelectorAll('.cat-tab')];
  const select = (tab, focus) => {
    tabs.forEach(t => {
      const on = t === tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('.menu-group').forEach(g => g.classList.toggle('active', g.id === 'grp-' + tab.dataset.cat));
    if (focus) tab.focus();
    tab.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next, true);
    });
  });
}

function setupOpenStatus(){
  const el = document.getElementById('openStatus');
  if (!el) return;
  const OPEN = 18 * 60, CLOSE = 23 * 60 + 30;
  const update = () => {
    // Horário de Cianorte (PR), fuso de Brasília
    const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/Sao_Paulo'}));
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const isOpenDay = day !== 1;
    let text, open = false;
    if (isOpenDay && mins >= OPEN && mins < CLOSE) {
      text = 'Aberto agora · fecha às 23h30'; open = true;
    } else if (isOpenDay && mins < OPEN) {
      text = 'Fechado · abre hoje às 18h';
    } else {
      const next = (day + 1) % 7;
      text = next === 1 ? 'Fechado · abre terça às 18h' : 'Fechado · abre amanhã às 18h';
    }
    el.innerHTML = `<span class="status-dot ${open ? 'on' : ''}"></span> ${text}`;
    el.hidden = false;
  };
  update();
  setInterval(update, 60 * 1000);
}

function setupReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => obs.observe(el));
}

function setupHeaderScroll(){
  const header = document.querySelector('header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setupCounters(){
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) {
    counters.forEach(animate);
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(el => obs.observe(el));
}

function norm(s){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function esc(s){ return s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function setupSearch(){
  const input = document.getElementById('menuSearch');
  const clear = document.getElementById('searchClear');
  const res = document.getElementById('searchResults');
  const menu = document.getElementById('menuContent');
  const CATS = {salgadas:'Salgadas', especiais:'Especiais', doces:'Doces', docesesp:'Doces especiais'};
  if (!input) return;

  const run = () => {
    const raw = input.value.trim();
    const q = norm(raw);
    clear.hidden = !q;
    if (!q) { res.hidden = true; res.innerHTML = ''; menu.hidden = false; return; }
    const terms = q.split(/\s+/);
    const match = text => { const t = norm(text); return terms.every(w => t.includes(w)); };
    let html = '', total = 0;
    for (const k in DATA) {
      const hits = DATA[k].items.filter(it => match(it[0] + ' ' + it[1]));
      if (hits.length) { total += hits.length; html += `<h3 class="res-title">${CATS[k]}</h3>` + renderItems(hits, CAT_LABEL[k]); }
    }
    const drinks = DRINKS.filter(d => match(d[0] + ' ' + d[1]));
    if (drinks.length) {
      total += drinks.length;
      html += '<h3 class="res-title">Bebidas</h3><div class="drinks-grid">' + drinks.map(d => `
        <div class="drink-row"><div><div class="dn">${d[0]}</div><div class="dv">${d[1]}</div></div><div class="dp">${d[2]}</div></div>`).join('') + '</div>';
    }
    menu.hidden = true; res.hidden = false;
    res.innerHTML = total
      ? `<p class="res-count">${total} ${total === 1 ? 'resultado' : 'resultados'} para “${esc(raw)}”</p>` + html
      : `<p class="res-empty">Nenhum resultado para “${esc(raw)}”.<br>Tente outro sabor ou ingrediente.</p>`;
  };

  input.addEventListener('input', run);
  clear.addEventListener('click', () => { input.value = ''; run(); input.focus(); });
  input.addEventListener('keydown', e => { if (e.key === 'Escape') { input.value = ''; run(); } });
  document.querySelectorAll('.cat-tab').forEach(t => t.addEventListener('click', () => { if (input.value) { input.value = ''; run(); } }));
}

function setupMore(){
  const ROWS = 3;
  const mq2 = window.matchMedia('(min-width:640px)'), mq3 = window.matchMedia('(min-width:980px)');
  const cols = () => mq3.matches ? 3 : mq2.matches ? 2 : 1;
  document.querySelectorAll('#menuContent .item-grid').forEach(grid => {
    const cards = [...grid.children];
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'more-btn';
    grid.after(btn);
    let open = false;
    const apply = () => {
      const limit = ROWS * cols();
      const need = cards.length > limit;
      cards.forEach((c, i) => { c.hidden = need && !open && i >= limit; });
      btn.hidden = !need;
      btn.setAttribute('aria-expanded', open);
      btn.innerHTML = open ? 'Ver menos <i class="ti ti-chevron-up"></i>' : `Ver mais sabores (${cards.length - limit}) <i class="ti ti-chevron-down"></i>`;
    };
    btn.addEventListener('click', () => {
      open = !open; apply();
      if (!open) document.querySelector('.menu-wrap').scrollIntoView({behavior:'smooth', block:'start'});
    });
    mq2.addEventListener('change', apply); mq3.addEventListener('change', apply);
    apply();
  });
}

function setupNav(){
  const links = document.querySelectorAll('.nav-links a');
  const secs = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach(s => obs.observe(s));
}

function setupPresetFotos(){
  if (!MOSTRAR_FOTOS) return;
  const tpl = document.getElementById('preset-fotos');
  const grid = document.getElementById('aboutGrid');
  if (!tpl || !grid) return;
  const fotos = tpl.content.cloneNode(true);
  fotos.querySelectorAll('[data-foto]').forEach(el => {
    const src = FOTOS[el.dataset.foto];
    if (!src) return;
    const img = document.createElement('img');
    img.src = src;
    img.alt = el.querySelector('.ph-content span').textContent + ' (foto ilustrativa)';
    img.loading = 'lazy';
    el.querySelector('.ph-content').remove();
    el.classList.add('filled');
    el.append(img);
  });
  const [aboutPhoto, gallery] = [fotos.querySelector('.photo-placeholder'), fotos.querySelector('.gallery-strip')];
  grid.classList.add('has-photo');
  grid.append(aboutPhoto);
  grid.after(gallery);
}

// Carrinho: esfihas por quantidade; pizzas, pizzas de metro e combos montados com sabores.
// Guardado em localStorage (só para este navegador).
const CART_KEY = 'gordo-carrinho-v3';
const SIZES = {
  esfiha: {label: 'Esfiha', title: 'Esfihas', max: 20},
  pizza: {label: 'Pizza', title: 'Pizzas (12 pedaços)', max: 3},
  metro: {label: 'Pizza de Metro', title: 'Pizzas de metro (36 pedaços)', max: 4},
  combo: {label: 'Combo', title: 'Combos', max: 4}
};

let cart = {esfihas: {}, pizzas: [], combos: []};
try {
  const saved = JSON.parse(localStorage.getItem(CART_KEY));
  if (saved && saved.esfihas && Array.isArray(saved.combos) && Array.isArray(saved.pizzas)) cart = saved;
} catch (e) {}

function saveCart(){
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}

function sumQty(group){
  return Object.values(group).reduce((n, it) => n + it.qty, 0);
}

function cartTotal(){
  return sumQty(cart.esfihas) + cart.combos.length + cart.pizzas.length;
}

function cartMessage(){
  const out = ['Olá! Quero pedir:'];
  const esfihas = Object.values(cart.esfihas);
  if (esfihas.length) out.push('', '*Esfihas*', ...esfihas.map(it => `- ${it.qty}x ${it.name}`));
  ['pizza', 'metro'].forEach(size => {
    const list = cart.pizzas.filter(p => p.size === size);
    if (list.length) out.push('', `*${SIZES[size].title}*`, ...list.map((p, i) => `- ${SIZES[size].label} ${i + 1}: ${p.flavors.join(' + ')}`));
  });
  if (cart.combos.length) out.push('', '*Combos*', ...cart.combos.map(c => `- Combo ${c.name}: ${c.flavors.join(' + ')}`));
  return out.join('\n');
}

function qtyRow(group, key, label, qty){
  return `<li class="cart-item">
    <div class="cart-info"><span class="cart-name">${esc(label)}</span></div>
    <div class="cart-qty">
      <button type="button" data-qty="${group}|${esc(key)}|-1" aria-label="Diminuir ${esc(label)}">−</button>
      <span>${qty}</span>
      <button type="button" data-qty="${group}|${esc(key)}|1" aria-label="Aumentar ${esc(label)}"><svg class="ico"><use href="#i-plus"/></svg></button>
    </div>
  </li>`;
}

// Linha de item montado com sabores (pizza, pizza de metro ou combo)
function choiceRow(name, flavors, removeAttr, id){
  return `<li class="cart-item">
    <div class="cart-info">
      <span class="cart-name">${esc(name)}</span>
      <span class="cart-cat">${flavors.map(f => esc(f)).join(' + ')}</span>
    </div>
    <button type="button" class="cart-remove" ${removeAttr}="${id}" aria-label="Remover ${esc(name)}"><svg class="ico"><use href="#i-trash"/></svg></button>
  </li>`;
}

function cartGroup(title, rows){
  return rows.length ? `<li class="cart-group"><h4>${title}</h4><ul>${rows.join('')}</ul></li>` : '';
}

function renderCart(){
  const total = cartTotal();
  document.getElementById('cartList').innerHTML =
    cartGroup(SIZES.esfiha.title, Object.entries(cart.esfihas).map(([k, it]) => qtyRow('esfihas', k, it.name, it.qty))) +
    ['pizza', 'metro'].map(size =>
      cartGroup(SIZES[size].title, cart.pizzas.filter(p => p.size === size).map((p, i) =>
        choiceRow(`${SIZES[size].label} ${i + 1}`, p.flavors, 'data-remove-pizza', p.id)))
    ).join('') +
    cartGroup('Combos', cart.combos.map(c => choiceRow(`Combo ${c.name}`, c.flavors, 'data-remove-combo', c.id)));

  document.getElementById('cartSub').textContent = total ? `${total} ${total === 1 ? 'item' : 'itens'}` : 'Nenhum item ainda';
  document.getElementById('cartEmpty').hidden = total > 0;
  const count = document.getElementById('cartCount');
  count.textContent = total;
  count.hidden = total === 0;
  document.getElementById('cartSend').href = total ? waLink(cartMessage()) : WA_URL;
  document.getElementById('cartClear').hidden = total === 0;
}

function changeQty(group, key, delta){
  const it = cart[group][key];
  if (!it) return;
  it.qty = Math.min(99, it.qty + delta);
  if (it.qty <= 0) delete cart[group][key];
  saveCart(); renderCart();
}

function addQty(group, name, qty){
  const it = cart[group][name] || (cart[group][name] = {name, qty: 0});
  it.qty = Math.min(99, it.qty + qty);
  saveCart(); renderCart();
}

function newId(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function addPizza(size, flavors){
  cart.pizzas.push({id: newId(), size, flavors: [...flavors]});
  saveCart(); renderCart();
}

function addCombo(name, flavors){
  cart.combos.push({id: newId(), name, flavors: [...flavors]});
  saveCart(); renderCart();
}

function removeById(list, id){
  cart[list] = cart[list].filter(x => x.id !== id);
  saveCart(); renderCart();
}

function findFlavor(name){
  for (const k in DATA) {
    const it = DATA[k].items.find(x => x[0] === name);
    if (it) return it;
  }
  return null;
}

// Sabores marcados como exclusivos de esfiha não entram em pizza
function esfihaOnly(name){
  const it = findFlavor(name);
  return !!it && /exclusivo p\/ esfiha/i.test(it[1]);
}

// Mantém o Tab dentro da janela aberta (carrinho ou montagem do pedido)
function trapFocus(el, e){
  if (e.key !== 'Tab') return;
  const items = [...el.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])')]
    .filter(x => x.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function setupCart(){
  const panel = document.getElementById('cart');
  const overlay = document.getElementById('cartOverlay');
  const openCart = () => {
    panel.classList.add('open'); overlay.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    document.getElementById('cartClose').focus();
  };
  const closeCart = () => {
    panel.classList.remove('open'); overlay.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.getElementById('cartBtn').focus();
  };
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  // Aviso de item adicionado, com atalho para abrir o carrinho
  const toast = document.getElementById('toast');
  let toastTimer;
  const hideToast = () => toast.classList.remove('show');
  const showToast = text => {
    document.getElementById('toastText').textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 4000);
  };
  document.getElementById('toastOpen').addEventListener('click', () => { hideToast(); openCart(); });

  // Montagem do pedido: tamanho (esfiha, pizza ou metro) e sabores; combos só escolhem sabores
  const builderEl = document.getElementById('builder');
  const builderOverlay = document.getElementById('builderOverlay');
  const pickerBtn = document.getElementById('pickerBtn');
  const pickerPanel = document.getElementById('pickerPanel');
  const pickerSearch = document.getElementById('pickerSearch');
  const pickerList = document.getElementById('pickerList');
  let b = null, opener = null, lastSize = 'pizza';

  // Lista de sabores: abre por baixo do botão, com busca e grupos por categoria
  const closePicker = refocus => {
    pickerPanel.hidden = true;
    pickerBtn.setAttribute('aria-expanded', 'false');
    if (refocus) pickerBtn.focus();
  };
  const renderPicker = () => {
    const q = norm(pickerSearch.value.trim());
    const isCombo = b.mode === 'combo';
    const isEsfiha = b.size === 'esfiha';
    let html = '';
    Object.keys(DATA).filter(k => !isCombo || k === 'salgadas').forEach(k => {
      const items = DATA[k].items.filter(it =>
        !b.flavors.includes(it[0]) && (isCombo || isEsfiha || !esfihaOnly(it[0])) && (!q || norm(it[0] + ' ' + it[1]).includes(q)));
      if (!items.length) return;
      html += `<li class="picker-group" role="presentation">${CAT_LABEL[k]}</li>`;
      html += items.map(it => `<li class="picker-opt" role="option" tabindex="-1" aria-selected="false" data-flavor="${esc(it[0])}">
        <span class="picker-name">${esc(it[0])}</span><span class="picker-desc">${esc(it[1])}</span></li>`).join('');
    });
    pickerList.innerHTML = html || '<li class="picker-empty" role="presentation">Nenhum sabor encontrado.</li>';
  };
  const openPicker = () => {
    pickerPanel.hidden = false;
    pickerBtn.setAttribute('aria-expanded', 'true');
    pickerSearch.value = '';
    renderPicker();
    pickerSearch.focus();
  };
  const chooseFlavor = name => {
    if (b.flavors.length < SIZES[b.size].max) { b.flavors.push(name); b.qtys[name] = 1; }
    closePicker(false);
    renderBuilder();
    (pickerBtn.disabled ? document.getElementById('builderConfirm') : pickerBtn).focus();
  };

  const renderBuilder = () => {
    const isCombo = b.mode === 'combo';
    document.getElementById('builderTitle').textContent = isCombo ? `Combo ${b.combo}` : b.flavors[0];
    document.getElementById('sizeLabel').hidden = isCombo;
    document.getElementById('sizePick').hidden = isCombo;
    builderEl.querySelectorAll('[data-size]').forEach(btn => {
      const on = btn.dataset.size === b.size;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-checked', on);
      btn.disabled = b.only && btn.dataset.size !== 'esfiha';
    });
    const isEsfiha = b.size === 'esfiha';
    document.getElementById('builderConfirm').disabled = isCombo && b.flavors.length === 0;
    const max = SIZES[b.size].max, full = b.flavors.length >= max;
    document.getElementById('builderCount').textContent = isEsfiha ? 'Sabores e quantidade' : `Sabores (${b.flavors.length}/${max})`;
    document.getElementById('builderChips').innerHTML = b.flavors.map((f, i) => {
      const rm = (isCombo || b.flavors.length > 1)
        ? `<button type="button" data-flavor-remove="${i}" aria-label="Remover ${esc(f)}"><svg class="ico"><use href="#i-close"/></svg></button>` : '';
      if (!isEsfiha) return `<li class="flavor-chip"><span>${esc(f)}</span>${rm}</li>`;
      return `<li class="flavor-chip"><span>${esc(f)}</span>
        <div class="chip-qty">
          <button type="button" data-esf="${i}|-1" aria-label="Diminuir ${esc(f)}">−</button>
          <span>${b.qtys[f] || 1}</span>
          <button type="button" data-esf="${i}|1" aria-label="Aumentar ${esc(f)}"><svg class="ico"><use href="#i-plus"/></svg></button>
        </div>${rm}</li>`;
    }).join('');
    document.getElementById('pickerLabel').textContent = b.flavors.length ? 'Adicionar outro sabor' : 'Escolher um sabor';
    pickerBtn.disabled = full;
    if (full) closePicker(false); else if (!pickerPanel.hidden) renderPicker();
    const total = b.flavors.reduce((n, f) => n + (b.qtys[f] || 1), 0);
    document.getElementById('builderHint').textContent = isEsfiha
      ? `Total: ${total} ${total === 1 ? 'esfiha' : 'esfihas'}. Cada esfiha leva 1 sabor.`
      : full
        ? (isCombo ? 'Limite de sabores do combo atingido.' : 'Limite de sabores atingido para este tamanho.')
        : (isCombo ? `Escolha de 1 a ${max} sabores tradicionais.` : `Você pode misturar até ${max} sabores.`);
  };

  const openBuilder = (name, from, isCombo) => {
    if (isCombo) {
      b = {mode: 'combo', combo: name, size: 'combo', qtys: {}, flavors: [], only: false};
    } else {
      const only = esfihaOnly(name);
      b = {mode: 'flavor', size: only ? 'esfiha' : lastSize, qtys: {[name]: 1}, flavors: [name], only};
    }
    opener = from;
    closePicker(false);
    renderBuilder();
    builderEl.classList.add('open'); builderOverlay.classList.add('open');
    builderEl.setAttribute('aria-hidden', 'false');
    (isCombo ? pickerBtn : (builderEl.querySelector('[data-size].active') || builderEl.querySelector('[data-size]'))).focus();
  };
  const closeBuilder = () => {
    builderEl.classList.remove('open'); builderOverlay.classList.remove('open');
    builderEl.setAttribute('aria-hidden', 'true');
    closePicker(false);
    if (opener) opener.focus();
    b = null;
  };

  document.getElementById('builderClose').addEventListener('click', closeBuilder);
  builderOverlay.addEventListener('click', closeBuilder);
  builderEl.querySelectorAll('[data-size]').forEach(btn => btn.addEventListener('click', () => {
    if (btn.disabled) return;
    b.size = btn.dataset.size; lastSize = b.size;
    if (b.size === 'esfiha') b.flavors.forEach(f => { b.qtys[f] = b.qtys[f] || 1; });
    else b.flavors = b.flavors.filter(f => !esfihaOnly(f)).slice(0, SIZES[b.size].max);
    renderBuilder();
  }));
  pickerBtn.addEventListener('click', () => { if (pickerPanel.hidden) openPicker(); else closePicker(true); });
  pickerSearch.addEventListener('input', renderPicker);
  pickerList.addEventListener('click', e => {
    const opt = e.target.closest('[data-flavor]');
    if (opt) chooseFlavor(opt.dataset.flavor);
  });
  pickerPanel.addEventListener('keydown', e => {
    const opts = [...pickerList.querySelectorAll('[data-flavor]')];
    const i = opts.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); (opts[i + 1] || opts[0])?.focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0) pickerSearch.focus(); else opts[i - 1].focus(); }
    else if (e.key === 'Home' && i >= 0) { e.preventDefault(); opts[0].focus(); }
    else if (e.key === 'End' && i >= 0) { e.preventDefault(); opts[opts.length - 1].focus(); }
    else if (e.key === 'Enter' && i >= 0) { e.preventDefault(); chooseFlavor(opts[i].dataset.flavor); }
  });
  document.getElementById('builderChips').addEventListener('click', e => {
    const step = e.target.closest('[data-esf]');
    if (step) {
      const [i, d] = step.dataset.esf.split('|');
      const f = b.flavors[Number(i)];
      b.qtys[f] = Math.min(99, Math.max(1, (b.qtys[f] || 1) + Number(d)));
      renderBuilder();
      document.querySelector('#builderChips [data-esf="' + i + '|' + d + '"]')?.focus();
      return;
    }
    const rm = e.target.closest('[data-flavor-remove]');
    if (!rm) return;
    b.flavors.splice(Number(rm.dataset.flavorRemove), 1);
    renderBuilder();
  });
  document.getElementById('builderConfirm').addEventListener('click', () => {
    if (!b) return;
    let text;
    if (b.mode === 'combo') {
      if (!b.flavors.length) return;
      addCombo(b.combo, b.flavors);
      text = `Combo ${b.combo} (${b.flavors.join(' + ')}) foi adicionado ao carrinho`;
    } else if (b.size === 'esfiha') {
      b.flavors.forEach(f => addQty('esfihas', f, b.qtys[f] || 1));
      text = `Esfihas (${b.flavors.map(f => `${b.qtys[f] || 1}x ${f}`).join(', ')}) adicionadas ao carrinho`;
    } else {
      addPizza(b.size, b.flavors);
      text = `${SIZES[b.size].label} (${b.flavors.join(' + ')}) foi adicionada ao carrinho`;
    }
    closeBuilder();
    showToast(text);
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!pickerPanel.hidden) closePicker(true);
    else if (builderEl.classList.contains('open')) closeBuilder();
    else if (panel.classList.contains('open')) closeCart();
  });

  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      openBuilder(add.dataset.add, add, add.dataset.cat === 'Combo');
      return;
    }
    const qty = e.target.closest('[data-qty]');
    if (qty) {
      const [group, key, delta] = qty.dataset.qty.split('|');
      changeQty(group, key, Number(delta));
      return;
    }
    const rp = e.target.closest('[data-remove-pizza]');
    if (rp) { removeById('pizzas', rp.dataset.removePizza); return; }
    const rc = e.target.closest('[data-remove-combo]');
    if (rc) removeById('combos', rc.dataset.removeCombo);
  });

  document.getElementById('cartClear').addEventListener('click', () => {
    cart = {esfihas: {}, pizzas: [], combos: []};
    saveCart(); renderCart();
  });

  panel.addEventListener('keydown', e => trapFocus(panel, e));
  builderEl.addEventListener('keydown', e => trapFocus(builderEl, e));

  renderCart();
}

function setupToTop(){
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const toggle = () => { btn.hidden = window.scrollY < 600; };
  window.addEventListener('scroll', toggle, {passive: true});
  toggle();
}

// Rolagem dos links internos: acelera no começo e freia ao chegar (ease-in-out)
function setupSmoothScroll(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  let raf = 0;
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const offset = () => (document.querySelector('header')?.offsetHeight || 0) + 12;
  const stop = () => {
    if (!raf) return;
    cancelAnimationFrame(raf); raf = 0;
    root.style.scrollBehavior = '';
  };
  const scrollToY = (y, done) => {
    stop();
    const start = window.scrollY;
    const to = Math.max(0, Math.min(y, root.scrollHeight - window.innerHeight));
    const dist = to - start;
    if (Math.abs(dist) < 2) {
      root.style.scrollBehavior = 'auto'; window.scrollTo(0, to); root.style.scrollBehavior = '';
      if (done) done();
      return;
    }
    // com "reduzir movimento" ligado no sistema, a mesma curva roda mais curta
    const dur = reduce.matches
      ? Math.min(600, Math.max(300, Math.abs(dist) * 0.25))
      : Math.min(1100, Math.max(550, Math.abs(dist) * 0.45));
    const t0 = performance.now();
    root.style.scrollBehavior = 'auto';
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, start + dist * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else { raf = 0; root.style.scrollBehavior = ''; if (done) done(); }
    };
    raf = requestAnimationFrame(step);
  };
  // a pessoa assume o controle assim que rola, toca ou digita
  ['wheel', 'touchstart', 'keydown'].forEach(ev => window.addEventListener(ev, stop, {passive: true}));
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    const id = a.getAttribute('href');
    if (id === '#') { e.preventDefault(); scrollToY(0); return; }
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    scrollToY(el.getBoundingClientRect().top + window.scrollY - offset(), () => {
      history.replaceState(null, '', id);
      if (el.hasAttribute('tabindex')) el.focus({preventScroll: true});
    });
  });
}

buildMenu();
setupPresetFotos();
setupCart();
setupMore();
setupNav();
setupSearch();
setupTabs();
setupReveal();
setupHeaderScroll();
setupCounters();
setupOpenStatus();
setupToTop();
setupSmoothScroll();
