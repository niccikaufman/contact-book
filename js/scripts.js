//back end
function Contact(firstName,lastName,phoneNumber,email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

//front end
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
});