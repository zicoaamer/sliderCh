// Left Side Menu 
$(".sideClick").click(function(){
    $(".stayLeft").css({"left" : "0"});
    $(".sideClick").animate({"margin":"250px"}, 400);
})
$(".closeNow").click(function(){
    $(".stayLeft").css({"left" : "-250px"});
    $(".sideClick").animate({"margin":"0px"}, 400);
})
//accordion 
$(".one-section h3").click(function(){
    $(".one-section p").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
//counter
$(document).ready(function() {
    function updateCounter() {
      var now = new Date().getTime();
      var targetDate = new Date("2023-08-31T23:59:59").getTime();
      var timeRemaining = targetDate - now;
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      $(".day").text(days + " D");
      $(".hours").text(hours +" h");
      $(".minutes").text(minutes + " m");
      $(".secs").text(seconds + " s");
    }

    updateCounter();
    setInterval(updateCounter, 1000);
});
// remaining characters
let countl = 100;
$("#usermsg").keyup(function() {
    var len = $(this).val().length;
    var am = countl - len;
    if(am <= 0){
        $(".rmn").text("No Available Characters Is");
    }
    else{
    $(".rmn").text(am);
    }
});