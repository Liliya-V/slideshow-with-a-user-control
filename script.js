var carousel = document.getElementById('images')
var image = [1,2,3,4,5]
var i = image.length

carousel.innerHTML = "<img src= ./images/1.jpeg>"


/**
 * injects an image into the carousel (called inline in html, on .next onclick)
 */
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

/**
 * loops a nextImage function so it repeats itself every so many seconds
 */
setInterval(nextImage, 2000)

/**
 * injects an image into the carousel (called inline in html on .prev onclick)
 */
function prevImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1
    } else {
        i = image.length
    }
    carousel.innerHTML = "<img src= ./images/" + image[i - 1] + ".jpeg>"
}

