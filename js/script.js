emailjs.init({
  publicKey: "4lyndCBtAZ2AV1gvh",
});

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_dev7b5f",
      "template_g268yfu",
      this
    )
    .then(() => {
      alert("✅ Thank you! Your message has been sent successfully.");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("❌ Failed to send message.");
    });
  });
}