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
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.emailAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click","li",function() {
    showContact(this.id);
  });
}

$(document).ready(function(){
  attachContactListeners();
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone").val();
    const inputtedEmailAddress = $("input#new-email").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
});