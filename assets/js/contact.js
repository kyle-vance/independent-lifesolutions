
// #### Contact form ####
document.addEventListener("DOMContentLoaded", function() {
    fetch("contact.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contact-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error fetching contact section:", error));
});
