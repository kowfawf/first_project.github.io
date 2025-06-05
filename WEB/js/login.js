document.addEventListener('DOMContentLoaded', function() {
    const orderItemsContainer = document.querySelector('.order-items');
    const orderTotalElement = document.querySelector('.order-total');
    const checkoutForm = document.getElementById('checkoutForm');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    function updateOrderSummary() {
        orderItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.name} (${item.quantity} шт.)</span>
                <span>${item.price * item.quantity} ₽</span>
            `;
            orderItemsContainer.appendChild(orderItem);
        });
        orderTotalElement.textContent = `Итого: ${total} ₽`;
    }
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Ваша корзина пуста!');
            return;
        }
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            payment: document.getElementById('payment').value,
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Заказ оформлен! Сумма: ${formData.total} ₽\nМы свяжемся с вами для подтверждения.`);
        updateOrderSummary();
        checkoutForm.reset();
    });
    updateOrderSummary();
});