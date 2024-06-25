function openForm(element,openElement) {
    document.getElementById(openElement).style.display = "block";
    document.getElementById(element).style.display = "none";
}

document.getElementById('hamburguesa').addEventListener('click',function(){
    this.classList.toggle('active')
    document.getElementById('nav').classList.toggle('active')
})