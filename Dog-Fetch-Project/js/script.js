const breedList = document.getElementById("breedList");
const breedDetails = document.getElementById("breedDetails");
const factsBtn = document.getElementById("factsBtn");
const groupsBtn = document.getElementById("groupsBtn");

factsBtn.addEventListener("click", loadFacts);
groupsBtn.addEventListener("click", loadGroups);

/* ===============================
NORMAL TEST CASES
=================================*/

// Test Case 1: Load breeds successfully on page load
async function fetchBreeds() {
    console.log("Test Case 1: Fetching breeds...");

    try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds");

        // Edge Test Case 1: API request fails
        if (!response.ok) {
            throw new Error("Failed to fetch breeds from API");
        }

        const data = await response.json();

        console.log("Breeds loaded successfully:", data.data.length);
        displayBreeds(data.data);

    } catch (error) {
        console.error("Edge Case Triggered: API error handled.", error.message);
        breedList.innerHTML = "Unable to load breeds.";
    }
}


// Test Case 2: Display breed list
function displayBreeds(breeds) {
    breedList.innerHTML = "";

    // Edge Test Case 2: Empty breed list
    if (!breeds || breeds.length === 0) {
        console.warn("Edge Case Triggered: No breeds available.");
        breedList.innerHTML = "No breeds found.";
        return;
    }

    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed.attributes.name;

        // Test Case 3: Click a breed to load details
        li.addEventListener("click", () => {
            console.log("Test Case 3: Breed clicked:", breed.attributes.name);
            fetchBreedDetails(breed.id);
        });

        breedList.appendChild(li);
    });
}


/* ===============================
BREED DETAILS
=================================*/

async function fetchBreedDetails(id) {
    try {
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);

        // Edge Test Case 3: Invalid breed ID or failed request
        if (!response.ok) {
            throw new Error("Failed to fetch breed details");
        }

        const data = await response.json();
        const breed = data.data.attributes;

        // Edge Test Case 4: Missing data fields
        if (!breed.description || !breed.life) {
            console.warn("Edge Case Triggered: Missing breed data.");
        }

        breedDetails.innerHTML = `
            <h3>${breed.name}</h3>
            <p>${breed.description || "No description available."}</p>
            <p><strong>Life Span:</strong> 
            ${breed.life?.min || "?"} - ${breed.life?.max || "?"} years</p>
        `;

    } catch (error) {
        console.error("Error loading breed details:", error.message);
        breedDetails.innerHTML = "Error loading breed information.";
    }
}


/* ===============================
FACTS SECTION
=================================*/

// Normal Test Case: Load dog facts
async function loadFacts() {
    const factsList = document.getElementById("factsList");
    factsList.innerHTML = "";

    try {
        const response = await fetch("https://dogapi.dog/api/v2/facts");
        const data = await response.json();

        // Edge Case: Empty facts list
        if (!data.data || data.data.length === 0) {
            console.warn("Edge Case: No facts returned.");
            factsList.innerHTML = "No facts available.";
            return;
        }

        data.data.forEach(fact => {
            const li = document.createElement("li");
            li.textContent = fact.attributes.body;
            factsList.appendChild(li);
        });

        console.log("Facts loaded successfully.");

    } catch (error) {
        console.error("Facts error:", error);
        factsList.innerHTML = "Error loading facts.";
    }
}


/* ===============================
GROUPS SECTION
=================================*/

async function loadGroups() {
    const groupList = document.getElementById("groupList");
    groupList.innerHTML = "";

    try {
        const response = await fetch("https://dogapi.dog/api/v2/groups");
        const data = await response.json();

        data.data.forEach(group => {
            const li = document.createElement("li");
            li.textContent = group.attributes.name;
            groupList.appendChild(li);
        });

        console.log("Groups loaded successfully.");

    } catch (error) {
        console.error("Groups error:", error);
        groupList.innerHTML = "Error loading groups.";
    }
}


// Run Test Case 1 automatically
fetchBreeds();