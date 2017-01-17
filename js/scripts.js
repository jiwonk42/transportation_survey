
$(document).ready(function(){
  $("form#future-survey").submit(function(event){
    event.preventDefault();
    
    var number = 0;

    $("input:checkbox[name=zodiac]:checked").each(function(){
      var zodiac = $(this).val();
      $('#zodiac-response').append(zodiac + "<br>");
      number++;
    });

    var result = function() {
      if(number <= 2) {
        return "Your future is great!";
      } else if (number === 3 || number === 4) {
        return "Your future sucks!!!";
      }
    };
    $("#zodiac-response").text(result);

    $('#future-survey').hide();
  });
});
