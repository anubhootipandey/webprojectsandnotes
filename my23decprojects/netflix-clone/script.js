document.addEventListener("DOMContentLoaded", function () {
    // Sample data for movies and TV shows
    const contentData = [
        { title: "Stranger Things", type: "TV Show", image: "stranger_things.jpg" },
        { title: "Money Heist", type: "TV Show", image: "money_heist.jpg" },
        { title: "The Witcher", type: "TV Show", image: "the_witcher.jpg" },
        { title: "Inception", type: "Movie", image: "inception.jpg" },
        // Add more content as needed
    ];

    // Function to create and append movie and TV show cards to the DOM
    function appendContentCards() {
        const mainContent = document.getElementById("main-content");

        contentData.forEach(content => {
            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = `images/${content.image}`;
            image.alt = content.title;

            const title = document.createElement("h3");
            title.textContent = content.title;

            const type = document.createElement("p");
            type.textContent = content.type;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(type);

            mainContent.appendChild(card);
        });
    }

    // Call the function to append content cards when the DOM is loaded
    appendContentCards();
});
