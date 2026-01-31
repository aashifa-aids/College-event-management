// Get events from localStorage
function getEvents() {
    return JSON.parse(localStorage.getItem("events")) || [];
}

// Save events to localStorage
function saveEvents(events) {
    localStorage.setItem("events", JSON.stringify(events));
}

// ADD EVENT (Admin)
if (document.getElementById("eventForm")) {
    document.getElementById("eventForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let title = document.getElementById("eventTitle").value;
        let date = document.getElementById("eventDate").value;
        let venue = document.getElementById("eventVenue").value;

        let events = getEvents();
        events.push({ title, date, venue });

        saveEvents(events);
        alert("Event Added Successfully!");
        this.reset();
    });
}

// DISPLAY EVENTS (Student)
function displayEvents() {
    let eventsDiv = document.getElementById("events");
    if (!eventsDiv) return;

    let events = getEvents();
    eventsDiv.innerHTML = "";

    events.forEach(event => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Venue: ${event.venue}</p>
            <hr>
        `;
        eventsDiv.appendChild(div);
    });
}

displayEvents();

// REGISTER STUDENT
if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Registered Successfully!");
        this.reset();
    });
}
