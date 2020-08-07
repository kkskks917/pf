
$('.f-icon').mouseover(function () {
    $('.i-submenu').addClass("active");
});
$('.f-icon').mouseout(function () {
    $('.i-submenu').removeClass("active");
});


$('.head > .menu > ul').mouseover(function(){
    $('.head > .logo > a > .logo-1').addClass('active');
})
$('.head > .menu > ul').mouseout(function(){
    $('.head > .logo > a > .logo-1').removeClass('active');
});

$('.head > .menu > ul').mouseover(function(){
    $('.head > .icon-bar > .icon2 > a > .f-icon').addClass('active');
})
$('.head > .menu > ul').mouseout(function(){
    $('.head > .icon-bar > .icon2 > a > .f-icon').removeClass('active');
})