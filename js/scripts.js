//back end for AddressBook
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if(this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if(this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

//back end for Contacts
function Contact(firstName,lastName,phoneNumber,emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

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