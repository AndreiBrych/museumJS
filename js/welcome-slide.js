$(document).ready(function(){
$('.slider').slick({
appendArrows:$('.control'),
appendDots:$('.control'),
dots: true
});
$(".slider").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
 });
});