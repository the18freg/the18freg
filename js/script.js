document.addEventListener("DOMContentLoaded", function () {

    emailjs.init({
        publicKey: "4lyndCBtAZ2AV1gvh"
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
            .then(function () {

                alert("✅ Message Sent Successfully!");

                form.reset();

            })
            .catch(function (error) {

                console.error("EmailJS Error:", error);

                alert("❌ Message send failed.");

            });

        });

    }

});