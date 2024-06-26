
// #### Contact form ####
document.addEventListener("DOMContentLoaded", function() {
    fetch("contact.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contact-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error fetching contact section:", error));
});

// document.addEventListener("DOMContentLoaded", function() {
//     var contactForm = document.getElementById("contactForm");
//     if (contactForm) {
//         contactForm.addEventListener("submit", function(event) {
//             event.preventDefault(); // Prevent form submission

//             // Gather form data
//             var formData = new FormData(this);

//             // Send form data to server
//             fetch("send_email.php", {
//                 method: "POST",
//                 body: formData
//             })
//             .then(response => {
//                 if (response.ok) {
//                     return response.text();
//                 } else {
//                     throw new Error("Network response was not ok.");
//                 }
//             })
//             .then(data => {
//                 // Show success notification
//                 var notification = document.getElementById("notification");
//                 if (notification) {
//                     notification.classList.remove("d-none");
//                     notification.innerText = data;
//                 }
//                 // Optionally, reset the form after successful submission
//                 this.reset();
//             })
//             .catch(error => {
//                 console.error("There was a problem with the fetch operation:", error);
//                 // Show error message
//                 alert("Error: Message not sent. Please try again later.");
//             });
//         });
//     }
// });




