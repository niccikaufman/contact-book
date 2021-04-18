//back end
function Contact(firstName,lastName,phoneNumber,emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + " " + lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

//front end
$(document).ready(function(){
  $("#createNew").click(function(){
    $("#form1").toggle();
  });

  $("#next").click(function(event){
    event.preventDefault();
    $("#confirm-entry").show();
    let newContact = new Contact($("#firstName").val(),$("#lastName").val(),$("#phone").val(),$("#email").val());
    console.log(newContact);
  });

  $("#confirm-save").click(function(event){
    event.preventDefault();
    
  });

  $("#reset").click(function(event) {
    event.preventDefault();
    $("#new-saved-contact").toggle();
    $("#confirm-entry").toggle();
  });
});