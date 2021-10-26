//slider
const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClass();
        slide.classList.add('active');
    })
}

function clearActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

// products render
const goods = [
    { title: 'Над пропасть во ржи', author: ' Дж. Сэлинджер', price: 250, id: 1 },
    { title: 'Убить пересмешника', author: 'Харпер Ли', price: 350, id: 2 },
    { title: 'На Западном фронте без перемен', author: 'Э.М. Ремарк', price: 350, id: 3 },
    { title: 'По ком звонит колокол', author: 'Э. Хемингуэй', price: 250, id: 4 },
  ];

  const renderGoodsItem = (item) => {
    return `<div class="goods-item">
        <a href="#"><img height="312" width="200" src="image/item-${item.id}.jpg" alt=""></a>
        <h3 class="item-title">${item.title}</h3>
        <h4>${item.author}</h4>
        <p>${item.price}</p>
    </div>`;
  };

const renderProducts = (goods) => {
    document.querySelector('.goods-list').insertAdjacentHTML('beforeend', goods.map(item => renderGoodsItem(item)).join(''));
}
renderProducts(goods);
