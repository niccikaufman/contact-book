$(document).ready(function(){
  $("#createNew").click(function(){
    $("#form1").toggle();
  });

  $("#next").click(function(){
    event.preventDefault();
    $("#confirm-entry").show();
  });

  $("#reset").click(function() {
    $("#new-saved-contact").toggle();
    $("#confirm-entry").toggle();
  });

  $("#confirm-save").click(function(){
    event.preventDefault();
    const firstNameInput = $("input#firstName").val();
    const lastNameInput = $("input#lastName").val();
    const addressInput = $("input#address").val();
    const address2Input = $("input#address2").val();
    const phoneInput = $("input#phone").val();
    const emailInput = $("input#email").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".address2").text(address2Input);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);

    $("#new-saved-contact").show();
  });
});