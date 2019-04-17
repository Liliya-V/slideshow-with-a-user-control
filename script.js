// var pictureIndex = 1;
// runSlideShow(pictureIndex);
//
// function runSlideShow(index) {
//     var pictures = document.getElementsByClassName('picture');
//     if (index > pictures.length) {
//         pictureIndex = 1
//     }
//     if (index < 1) {
//         pictureIndex = pictures.length
//     }
//     for (var i = 0; i < pictures.length; i++) {
//         pictures[i].classList.add('hidden');
//     }
//     pictures[pictureIndex-1].classList.remove('hidden');
// }
//
// document.getElementsByClassName('.prev').addEventListener('click', function() {
//
// });
//
// document.getElementsByClassName('.next').addEventListener('click', function() {
//
// });
var carousel = document.getElementById('images')
var image = [1,2,3,4,5]
var i = image.length

carousel.innerHTML = "<img src= ./images/1.jpeg>"



function nextImage() {
    if (i < image.length) {
        i = i + 1
    }
    else {
        i = image[0]
    }
    if (i===image.length) {
        i = 0
    }
    carousel.innerHTML = "<img id='slideleft' src= ./images/" + image[i] + ".jpeg>"
}
// setInterval(nextImage, 2000)


function prevImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1
    } else {
        i = image.length
    }
    carousel.innerHTML = "<img src= ./images/" + image[i - 1] + ".jpeg>"
}

