const productsJSON = `
[
    {
        "id": "1",
        "title": "Baby Yoda",
        "image": "baby-yoda.svg",
        "description": "Baby Yoda sticker",
        "price": 49.99
    },
    {
        "id": "2",
        "title": "Banana",
        "image": "banana.svg",
        "description": "Banana sticker",
        "price": 19.99
    },
    {
        "id": "3",
        "title": "Girl",
        "image": "girl.svg",
        "description": "Girl sticker",
        "price": 24.99
    },
    {
        "id": "4",
        "title": "Viking",
        "image": "viking.svg",
        "description": "Viking sticker",
        "price": 34.99
    }
]
`;

function renderProducts(products) {
    const productsContainer = document.querySelector('.product-list');
    const sortedProducts = products.slice().sort( (a, b) => a.price - b.price );
    for (const product of sortedProducts) {
        productsContainer.innerHTML += `
            <article>
                <h3>${product.title}</h3>
                <img src="img/${product.image}" alt="${product.title}">
                <p>${product.description}</p>
                <div class="button-container">
                    <button class="button card-button">Info</button>
                    <button class="button card-button">${product.price} - Buy</button>
                </div>
            </article>`
    }
}

renderProducts(JSON.parse(productsJSON));

document.querySelector('.sort-asc')
        .addEventListener('click', sortProductAscending);
document.querySelector('.sort-asc')
        .addEventListener('click', sortProductDescending);
