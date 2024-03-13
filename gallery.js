document.addEventListener("DOMContentLoaded", function() {
    // Select all thumbnail images
    const thumbnails = document.querySelectorAll("#thumbnail-list img");
    // Select the featured image
    const featuredImage = document.getElementById("featured-image");

    // Iterate over each thumbnail image
    thumbnails.forEach(function(thumbnail) {
        // Add click event listener to each thumbnail
        thumbnail.addEventListener("click", function() {
            // Get the source of the clicked thumbnail
            const thumbnailSrc = thumbnail.getAttribute("src");
            // Replace the source of the featured image with the full-sized version
            featuredImage.setAttribute("src", thumbnailSrc.replace("-small.jpg", "-large.jpg"));
        });
    });
});
