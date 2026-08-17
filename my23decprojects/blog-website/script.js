document.addEventListener("DOMContentLoaded", function () {
    // Sample blog posts
    const blogPosts = [
        {
            title: "First Blog Post",
            content: "This is the content of the first blog post."
        },
        {
            title: "Second Blog Post",
            content: "This is the content of the second blog post."
        },
        // Add more blog posts as needed
    ];

    // Function to create and append blog posts to the DOM
    function appendBlogPosts() {
        const blogPostsContainer = document.getElementById("blog-posts");

        blogPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            const titleElement = document.createElement("h2");
            titleElement.textContent = post.title;

            const contentElement = document.createElement("p");
            contentElement.textContent = post.content;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            blogPostsContainer.appendChild(postElement);
        });
    }

    // Call the function to append blog posts when the DOM is loaded
    appendBlogPosts();
});
