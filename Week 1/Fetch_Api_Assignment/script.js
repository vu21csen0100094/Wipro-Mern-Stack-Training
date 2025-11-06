//This file will contain the javascript code

console.log("Javascript file is connected succesfully!");

// app.js

// STEP 1: Select the div where we’ll show posts
const postsContainer = document.getElementById("posts-container");

// STEP 2: Create a function to fetch posts
function fetchPosts() {
  // Show loading message
  postsContainer.innerHTML = "<p>Loading posts...</p>";

  // STEP 3: Fetch data from the API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // STEP 4: Check if response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch posts!");
      }
      return response.json(); // Convert response to JSON
    })
    .then((posts) => {
      // STEP 5: Display posts on the web page
      displayPosts(posts);
    })
    .catch((error) => {
      // STEP 6: Handle errors if API fails
      postsContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

// STEP 7: Function to display posts
function displayPosts(posts) {
  // Show only first 5 posts so it’s not too long
  const limitedPosts = posts.slice(0, 5);

  // Create HTML for each post
  const html = limitedPosts
    .map(
      (post) => `
      <div style="border:1px solid #ccc; margin:10px; padding:10px; border-radius:8px;">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `
    )
    .join("");

  // Add to the page
  postsContainer.innerHTML = html;
}

// STEP 8: Call the fetchPosts function when page loads
fetchPosts();
