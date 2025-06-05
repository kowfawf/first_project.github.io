const btn = document.getElementById('button');
const b1 = document.getElementsByClassName('blick1')[0];
const b2 = document.getElementsByClassName('blick2')[0];
const b3 = document.getElementsByClassName('blick3')[0];
const b4 = document.getElementsByClassName('blick4')[0];
const b5 = document.getElementsByClassName('blick5')[0];

btn.addEventListener('click', () => {
    const val1 = b1.querySelector('input').value.trim();
    const val2 = b2.querySelector('input').value.trim();
    const val3 = b3.querySelector('input').value.trim();
    const val4 = b4.querySelector('input').value.trim();
    const val5 = b5.querySelector('input').value.trim();
    if (val1 && val2 && val3 && val4 && val5) {
        btn.style.backgroundColor = 'rgb(125, 184, 133)';
    } else {
        alert('Пожалуйста, заполните все поля');
        [b1, b2, b3, b4, b5].forEach(blick => {
            const input = blick.querySelector('input');
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });
    }
});