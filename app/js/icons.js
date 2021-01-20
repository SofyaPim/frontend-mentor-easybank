let elem = document.querySelectorAll(".filtered");


elem.forEach(item => {

    item.addEventListener("mouseover", function changeColor() {
        this.classList.add('filter');
    }, true);
    item.addEventListener("pointerover", function changeColor() {
        this.classList.add('filter');

    }, true);
    item.addEventListener("mouseout", function changeColor() {
        this.classList.remove('filter');
    }, true);
    item.addEventListener("pointerout", function changeColor() {
        this.classList.remove('filter');

    }, true);



});