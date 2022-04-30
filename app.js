const Btn_yes = document.querySelector('#btnyes');

Btn_yes.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si mi querida colageno xd...')
});

const Bnt_no = document.querySelector('#btnno');

Bnt_no.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    Bnt_no.style.setProperty('top',randomY+'%');
    Bnt_no.style.setProperty('left',randomX+'%');
    Bnt_no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})