$(document).ready(function(){
  $("#formButton").click(function(){
    $("#form1").toggle();
  });

  $("#entry-save").click(function(){
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

    $("#contact-entry").show();
    $("#save-inquiry").show();
  });

  $("#clear-entry").click(function(){
    $("#form1")[0].reset();
    $("#form1").toggle();
    $("#contact-entry").toggle();
  });

  $("#confirm-save").click(function(){
    
  });
});