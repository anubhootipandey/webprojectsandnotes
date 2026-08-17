document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");

    // Sample book data
    const books = [
        { title: "Book 1", author: "Author 1", image: "book1.jpg" },
        { title: "Book 2", author: "Author 2", image: "book2.jpg" },
        { title: "Book 3", author: "Author 3", image: "book3.jpg" },
        // Add more books as needed
    ];

    // Function to create and append book cards to the DOM
    function appendBookCards() {
        books.forEach(book => {
            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = `images/${book.image}`;
            image.alt = book.title;

            const title = document.createElement("h3");
            title.textContent = book.title;

            const author = document.createElement("p");
            author.textContent = `By ${book.author}`;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(author);

            bookList.appendChild(card);
        });
    }

    // Call the function to append book cards when the DOM is loaded
    appendBookCards();
});
