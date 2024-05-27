// Function to include common head content in HTML documents
function linkHead() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the URL of the common_head.html file
    var url = 'head.html';

    // Send a GET request to fetch the common head content
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // If the request is successful, append the response to the head section of the current HTML document
            document.head.innerHTML += xhr.responseText;
        }
    };
    xhr.send();
}

// Call the function to include common head content when the DOM content is loaded
document.addEventListener('DOMContentLoaded', linkHead);
