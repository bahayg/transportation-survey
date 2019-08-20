$(document).ready(function(){
  $("form#transportation-survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransitInputs = $(this).val();
      $("#work-responses").append(workTransitInputs + "<br>");
      });
      $("#other-responses").show();
      $("input:checkbox[name=other-transportation]:checked").each(function(){
        var otherTransitInputs = $(this).val();
        $("#other-responses").append(otherTransitInputs + "<br>");
      });
      $("#transportation_survey").hide();
    });
  });
