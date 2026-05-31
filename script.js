// =============================
// Travel Blog Website
// JavaScript File
// =============================

console.log("Travel Blog Loaded Successfully");

// =============================
// Dark Mode Function
// =============================

function darkMode() {
    document.body.classList.toggle("dark");
}

// =============================
// Contact Form Validation
// =============================

function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Message Sent Successfully!");
    return true;
}

// =============================
// Trip Planner Function
// =============================

function generatePlan() {

    let destination = document.getElementById("destination").value;
    let result = document.getElementById("result");

    switch (destination) {

        case "Goa":
            result.innerHTML = `
                <h3>Goa Trip Plan</h3>

                <p><strong>Day 1:</strong></p>
                <ul>
                    <li>Baga Beach</li>
                    <li>Calangute Beach</li>
                </ul>

                <p><strong>Day 2:</strong></p>
                <ul>
                    <li>Fort Aguada</li>
                    <li>Anjuna Beach</li>
                </ul>

                <p><strong>Day 3:</strong></p>
                <ul>
                    <li>Dudhsagar Falls</li>
                </ul>
            `;
            break;

        case "Manali":
            result.innerHTML = `
                <h3>Manali Trip Plan</h3>

                <p><strong>Day 1:</strong></p>
                <ul>
                    <li>Hidimba Temple</li>
                    <li>Old Manali</li>
                </ul>

                <p><strong>Day 2:</strong></p>
                <ul>
                    <li>Solang Valley</li>
                </ul>

                <p><strong>Day 3:</strong></p>
                <ul>
                    <li>Rohtang Pass</li>
                    <li>Manu Temple</li>
                </ul>
            `;
            break;

        case "Kerala":
            result.innerHTML = `
                <h3>Kerala Trip Plan</h3>

                <p><strong>Day 1:</strong></p>
                <ul>
                    <li>Munnar</li>
                </ul>

                <p><strong>Day 2:</strong></p>
                <ul>
                    <li>Alleppey Backwaters</li>
                </ul>

                <p><strong>Day 3:</strong></p>
                <ul>
                    <li>Kochi</li>
                    <li>Thekkady</li>
                </ul>
            `;
            break;

        default:
            result.innerHTML = `
                <p>Please select a destination.</p>
            `;
    }
}
document
.getElementById("bookingForm")
?.addEventListener("submit",
async function(e) {

    e.preventDefault();

    const bookingData = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        destination:
        document.getElementById("destination").value,

        travelers:
        document.getElementById("travelers").value,

        travelDate:
        document.getElementById("travelDate").value
    };

    const response =
    await fetch("/booking", {

        method: "POST",

        headers: {
            "Content-Type":
            "application/json"
        },

        body:
        JSON.stringify(bookingData)
    });

    const result =
    await response.text();

    alert(result);
});