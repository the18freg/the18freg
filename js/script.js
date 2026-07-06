// EmailJS Initialize
emailjs.init("4lyndCBtAZ2AV1gvh");

const form = document.getElementById("contact-form");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

emailjs.sendForm(

"service_dev7b5f",

"template_g268yfu",

this

).then(function () {

alert("✅ Thank you! Your message has been sent successfully.");

form.reset();

}, function (error) {

alert("❌ Something went wrong. Please try again.");

console.log(error);

});

});

}