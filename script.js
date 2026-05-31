function saveUser() {

    var name = document.getElementById("input-name").value;
    var age = document.getElementById("input-age").value;

    if (!name || !age) {
        alert("Please enter your name and age.");
        return;
    }

    // Store in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    document.getElementById("greeting").innerText = `Welcome, ${name}!`;

    // Calculate age in months
    document.getElementById("age-months").innerText = `You are ${calculateMonths(age)} months old.`;

    // Check if user is over 18
    if (age >= 18) {
        document.getElementById("content-check").innerText = "You are old enough to access adult content.";
    } else {
        document.getElementById("content-check").innerText = "You are too young for adult content.";
    }

    // Show motivational quote 5 times using a loop
    var quote = "Believe in yourself!";
    var quotesDiv = document.getElementById("quotes");

    for (var i = 0; i < 5; i++) {
        quotesDiv.innerHTML += `<div class="bg-gray-100 px-4 py-3 rounded-lg text-sm text-gray-700">${quote}</div>`;
    }

    // Show the results
    document.getElementById("results").classList.remove("hidden");
}

// Function to calculate age in months
function calculateMonths(age) {
    return age * 12;
}

// Clear localStorage and reset the page
function resetUser() {
    localStorage.clear();
    location.reload();
}