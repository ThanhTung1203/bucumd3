document.getElementById('next').onclick = function (){
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(list[0])
}
document.getElementById('pre').onclick = function () {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(list[list.length-1])
}