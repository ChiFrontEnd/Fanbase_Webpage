// ==========================
// 1. Theme Toggle Logic
// ==========================
const themeToggle = document.getElementById("themeToggle");

function applyTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const isDark = savedTheme === "dark";
    
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
    themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
}

themeToggle.onclick = () => {
    const isDark = document.body.classList.toggle("dark");
    document.body.classList.toggle("light", !isDark);
    
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
};

applyTheme();

// ==========================
// 2. Hero Transition Logic
// ==========================
const exploreBtn = document.getElementById("exploreBtn");
const hero = document.getElementById("hero");
const recipeBook = document.getElementById("recipeBook");

exploreBtn.addEventListener("click", () => {
    hero.classList.add("hideHero");

    setTimeout(() => {
        hero.style.display = "none";
        recipeBook.style.display = "block";
        recipeBook.scrollIntoView({
            behavior: "smooth"
        });
    }, 700);
});

// ==========================
// 3. Dynamic Recipe Rendering Logic (Conditional Buttons)
// ==========================
let currentIndex = 0;
const container = document.getElementById("recipeContainer");

function displayRecipe(index) {
    const r = recipes[index];

    // Map ingredients and instructions into list items
    const ingredientsHTML = r.ingredients.map(item => `<li>${item}</li>`).join("");
    const instructionsHTML = r.instructions.map(item => `<li>${item}</li>`).join("");

    // Condition ke mutabiq buttons ka HTML tayar karna
    let buttonsHTML = `<div class="btn-group" style="display: flex; gap: 15px; margin-top: 30px;">`;

    // Agar pehli recipe nahi hai, toh Previous button dikhayein
    if (index > 0) {
        buttonsHTML += `<button class="next-btn" id="prevRecipeBtn">← Previous Recipe</button>`;
    }

    // Agar aakhri recipe nahi hai, toh Next button dikhayein
    if (index < recipes.length - 1) {
        buttonsHTML += `<button class="next-btn" id="nextRecipeBtn">Next Recipe →</button>`;
    }

    buttonsHTML += `</div>`;

    // Render the active recipe card inside the container
    container.innerHTML = `
        <div class="recipe-card">
            <p class="subtitle">${r.subtitle}</p>
            <h2>${r.title}</h2>
            <p>${r.description}</p>
            <p class="meta">${r.meta}</p>
            <p class="rating">${r.rating}</p>

            <div class="image-row">
                <img src="${r.image}" alt="${r.title}">
            </div>

            <h4>Ingredients :</h4>
            <ul>${ingredientsHTML}</ul>
            <br>

            <h4>Instructions :</h4>
            <ol>${instructionsHTML}</ol>

            ${buttonsHTML}
        </div>
    `;

    // Event listener for Next Button (agar exist karta hai)
    const nextBtn = document.getElementById("nextRecipeBtn");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentIndex < recipes.length - 1) {
                currentIndex++;
                displayRecipe(currentIndex);
                container.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Event listener for Previous Button (agar exist karta hai)
    const prevBtn = document.getElementById("prevRecipeBtn");
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                displayRecipe(currentIndex);
                container.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

// Initial load: Display the first recipe
document.addEventListener("DOMContentLoaded", () => {
    displayRecipe(currentIndex);
});

// ==========================
// 4. Back to Home Page
// ==========================
// Elements select karein
const homeBtn = document.getElementById("homeBtn");
const homeLogo = document.getElementById("homeLogo");

// Home par wapas jaane ka common function
function goToHome() {
    // Recipe book ko hide karein
    recipeBook.style.display = "none";
    
    // Hero section ko wapas laayein aur animation class remove karein
    hero.style.display = "flex";
    setTimeout(() => {
        hero.classList.remove("hideHero");
    }, 50);

    // Home button ko chupayein kyunki hum already home par hain
    homeBtn.style.display = "none";

    // Page ke top par smooth scroll karein
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Explore button click hone par Home button ko dikhayein
exploreBtn.addEventListener("click", () => {
    hero.classList.add("hideHero");

    setTimeout(() => {
        hero.style.display = "none";
        recipeBook.style.display = "block";
        
        // Recipe page khulte hi Home button show ho jayega
        homeBtn.style.display = "inline-block";

        recipeBook.scrollIntoView({
            behavior: "smooth"
        });
    }, 700);
});

// Home button aur Logo par click event lagayein
homeBtn.addEventListener("click", goToHome);
homeLogo.addEventListener("click", goToHome);