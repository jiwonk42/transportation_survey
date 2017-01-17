
$(document).ready(function(){
  $("form#future-survey").submit(function(event){
    event.preventDefault();

    var number = 0;
    var number2 = 0;
    $("input:checkbox[name=zodiac]:checked").each(function(){
      var zodiac = $(this).val();
      number++;
    });

    $("input:checkbox[name=globe]:checked").each(function(){
      var globe = $(this).val();
      number2++;
    });

    var result = function() {
      if(number <= 2 && number2 <= 2) {
        return "Your future is great!";
      } else if (number === 3 || number === 4 && number2 === 3 || number2 === 4) {
        return "Your future sucks!!!";
      } else {
        return "you have no future. you will die soon";
      }
    };
    $("#response").text(result);

    $('#future-survey').hide();
  });
});
