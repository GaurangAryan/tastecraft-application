// ==================== STATE ====================
let bevState  = { type: 'all', search: '' };
let bevCuisine = 'all';   // set from localStorage

// ==================== INIT ====================
window.onload = function () {
    bevCuisine = localStorage.getItem('cuisinePreference') || 'all';
    renderBeverages();
};

// ==================== RENDER ====================
function renderBeverages() {
    const grid  = document.getElementById('bev-grid');
    const noRes = document.getElementById('bev-no-results');
    const count = document.getElementById('bev-count');

    let list = beverages.filter(b => {
        const matchCuisine = bevCuisine === 'all' || b.cuisine === bevCuisine;
        const matchType    = bevState.type === 'all' || b.type === bevState.type;
        const matchSearch  = b.name.toLowerCase().includes(bevState.search) ||
                             b.nameHindi.includes(bevState.search) ||
                             b.tags.some(t => t.toLowerCase().includes(bevState.search));
        return matchCuisine && matchType && matchSearch;
    });

    count.textContent = `Showing ${list.length} beverage${list.length !== 1 ? 's' : ''}`;

    if (!list.length) { grid.innerHTML = ''; noRes.style.display = 'block'; return; }
    noRes.style.display = 'none';

    grid.innerHTML = list.map((b, i) => {
        const hasImg   = b.image && !b.image.includes('placeholder');
        const imgHtml  = hasImg
            ? `<img src="${b.image}" alt="${b.name}" class="card-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : '';
        const emojiHtml = `<div class="card-emoji-display" style="${hasImg ? 'display:none' : 'display:flex'}">${b.emoji}</div>`;

        return `<div class="recipe-card bev-card" style="animation-delay:${i * 0.08}s" onclick="viewBeverage('${b.id}')">
            <div class="card-image-container">
                ${imgHtml}${emojiHtml}
                <span class="card-badge type-${b.type}">${b.typeLabel}</span>
            
            </div>
            <div class="card-content">
                <h3 class="card-title">${b.name}</h3>
                <p class="card-title-hindi">${b.nameHindi}</p>
                <div class="card-meta">
                    <span class="meta-item"><span class="meta-icon">Time -</span>${b.prepTime}</span>
                    <span class="meta-item">${b.calories} kcal</span>
                </div>
                <div class="card-tags">${b.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}</div>
                <div class="card-footer">
                    <span class="cost-badge">${b.costRange}</span>
                    <button class="view-recipe-btn">View Recipe &#8594;</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

// ==================== FILTERS ====================
function filterByType(type, btn) {
    bevState.type = type;
    btn.closest('.filter-buttons').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBeverages();
}

function filterBeverages() {
    bevState.search = document.getElementById('bev-search').value.toLowerCase();
    renderBeverages();
}

function viewBeverage(id) { window.location.href = 'beverage-detail.html?id=' + id; }
