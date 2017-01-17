$(document).ready(function(){
  $("form#future-survey").submit(function(event){
    event.preventDefault();
    $("#zodiac-response").show();
    $("input:checkbox[name=zodiac]:checked").each(function(){
      var zodiac = $(this).val();
      $('#zodiac-response').append(zodiac + "<br>");
    });

    $("#globe-response").show();
    $("input:checkbox[name=globe]:checked").each(function(){
      var globe = $(this).val();
      $('#globe-response').append(globe + "<br>");
    });
    $('#future-survey').hide();
  });
});
