$(document).ready(function() {
    console.log('jQuery is attached');

    var intervalTime = 3000;
    var imageWidth = $('.carousel-image').width();
    var currPosition = 0;
    var totalImages = $('.carousel-image').length;


    $('.carousel-image-container').css('width', imageWidth * totalImages);

    function imgSlide() {
        currPosition -= imageWidth;
        if (currPosition < -imageWidth * (totalImages - 1)) {
            currPosition = 0;
        }
        $('.carousel-image-container').animate({ left: currPosition }, 600);
    }

    setInterval(imgSlide, intervalTime);
});