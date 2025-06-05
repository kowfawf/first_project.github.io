document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    function updateCart() {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name} (${item.size})</span>
                <span>
                    ${item.quantity} × ${item.price} ₽
                    <span class="cart-item-remove" data-index="${index}">✕</span>
                </span>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        cartTotal.textContent = `Итого: ${total} ₽`;
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                saveCart();
                updateCart();
            });
        });
    }
    function addToCart(product) {
        const existingItemIndex = cart.findIndex(
            item => item.id === product.id && item.size === product.size
        );
        
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += product.quantity || 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                size: product.size,
                quantity: product.quantity || 1,
                image: product.image
            });
        }
        saveCart();
        updateCart();
    }
    document.querySelectorAll('.pay').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productElement = this.closest('.carousel-item, .carousel-item-short, .carousel-item-t-short');
            const product = {
                id: productElement.querySelector('img').src,
                name: this.closest('.content, .pay-title').previousElementSibling.alt,price: parseInt(this.textContent.match(/\d+/)[0]),
                image: productElement.querySelector('img').src
            };
            
            addToCart(product);
            cartIcon.classList.add('animate-bounce');
            setTimeout(() => {
                cartIcon.classList.remove('animate-bounce');
            }, 1000);
        });
    });
    updateCart();
    document.querySelector('.checkout-btn')?.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }
        alert('Заказ оформлен! Сумма: ' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + ' ₽');
        cart = [];
        saveCart();
        updateCart();
    });
});