const contactForm = document.getElementById("contactForm");
const successmessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const feedback = document.getElementById("userMessage").value;

    const feedbackData = {
        name: name,
        email: email,
        message: feedback,
        date: new Date().toLocaleDateString()
    };

    localStorage.setItem("userFeedback", JSON.stringify(feedbackData));

    successmessage.style.display = "block";

    contactForm.reset();

    setTimeout(() => {
        successmessage.style.display = "none";
    }, 3000);
});