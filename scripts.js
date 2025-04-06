/// tabs on experience part
const expTabButtons = document.querySelectorAll(".exp-tab-button");
const expTabContents = document.querySelectorAll(".exp-tab-content");

expTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    expTabButtons.forEach((btn) => btn.classList.remove("active"));
    expTabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button and corresponding content
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

if (window.innerWidth <= 430) {
  // Swap the position of elements for mobile view
  var mainHeading = document.querySelector(".main-heading");
  var profileContainer = document.querySelector(".profile-container");

  // Move profileContainer before mainHeading
  mainHeading.parentNode.insertBefore(profileContainer, mainHeading);
}

// Check the screen size
document.body.style.backgroundImage = "url('assets/backgroundphoto.png')";
document.body.style.backgroundSize = "cover";
