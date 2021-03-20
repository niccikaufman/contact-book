$(document).ready(function(){
  $("#formButton").click(function(){
    $("#form1").toggle();
  });
  $("#entry-save").submit(function(event){
    event.preventDefault();
    
    const firstNameInput = $("input#firstName").val();
    const lastNameInput = $("input#lastName").val();
    const phoneInput = $("input#phoneNumber").val();
    const emailInput = $("input#emailAddress").val();
    const homeInput = $("input#homeAddress").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);
    $(".home").text(homeInput);

  });
});