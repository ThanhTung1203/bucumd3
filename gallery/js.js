document.getElementById('next').onclick = function (){
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(list[0])
}
document.getElementById('pre').onclick = function () {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(list[list.length-1])
}

document.addEventListener("DOMContentLoaded", function() {
    var buyNowButtons = document.querySelectorAll(".buyNowButton");

    buyNowButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var parentWrapper = this.closest('.wrapper');
            var formWrapper = parentWrapper.querySelector('.buyNowFormWrapper');
            formWrapper.classList.toggle("show-form");
        });
    });
});
