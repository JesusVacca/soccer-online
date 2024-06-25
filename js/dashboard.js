
document.getElementById('close-img').addEventListener('click',function(e){
    e.preventDefault();
    const header = document.getElementById('header');
    header.classList.toggle('active');
    if(header.classList.contains('active'))this.src = '../img/icon/arrow-bar-left.svg';
    else this.src = '../img/icon/arrow-bar-right.svg';
})