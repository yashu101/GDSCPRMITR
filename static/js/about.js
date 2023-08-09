document.addEventListener("DOMContentLoaded", function() {
    // Get the "About Us" link element
    const aboutUsLink = document.querySelector('a[href="#about"]');
    
    // Add a click event listener to the link
    aboutUsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Get the target section element by its ID
        const aboutSection = document.getElementById("about");
        
        // Calculate the offset of the target section
        const offsetTop = aboutSection.offsetTop;
        
        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});