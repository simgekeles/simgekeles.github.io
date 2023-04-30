// Add active class to navigation links on click
var navLinks = document.querySelectorAll("nav a");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}

// Toggle mobile menu
var menuButton = document.querySelector(".menu-button");
var mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("show");// Define an array of news articles
const news = [
  {
    title: "New Study Shows Benefits of Meditation",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "April 30, 2023"
  },
  {
    title: "Local Food Bank Accepting Donations",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "April 28, 2023"
  },
  {
    title: "Interview with Tech Entrepreneur John Smith",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "April 26, 2023"
  }
];

// Get the news container element
const newsContainer = document.getElementById("news-container");

// Loop through the news array and create a news article for each item
news.forEach(article => {
  // Create a new div element for the article
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("news-article");

  // Create a new h3 element for the article title
  const titleElement = document.createElement("h3");
  titleElement.textContent = article.title;

  // Create a new p element for the article content
  const contentElement = document.createElement("p");
  contentElement.textContent = article.content;

  // Create a new span element for the article date
  const dateElement = document.createElement("span");
  dateElement.textContent = article.date;

  // Append the title, content, and date elements to the article div
  articleDiv.appendChild(titleElement);
  articleDiv.appendChild(contentElement);
  articleDiv.appendChild(dateElement);

  // Append the article div to the news container
  newsContainer.appendChild(articleDiv);
});
