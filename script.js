const music = document.getElementById("music");

// ✅ Enable music after user interaction
function startMusic() {
  music.muted = false;
  music.play().catch(() => {});
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// ✅ Load saved guests from browser storage
let guests = JSON.parse(localStorage.getItem("guests")) || [];

// Render guest list
function updateGuestList() {
  const list = document.getElementById("guestList");
  list.innerHTML = "";

  guests.forEach(name => {
    const li = document.createElement("li");
    li.textContent = "🎟️ " + name;
    list.appendChild(li);
  });

  document.getElementById("guestCount").innerText =
    `Guests attending: ${guests.length}`;
}

// RSVP function
function rsvp() {
  const input = document.getElementById("guestName");
  const name = input.value.trim();

  if (!name) return;

  if (guests.includes(name)) {
    document.getElementById("confirmation").innerText =
      "Already RSVP’d!";
    return;
  }

  guests.push(name);

  // Save to browser
  localStorage.setItem("guests", JSON.stringify(guests));

  document.getElementById("confirmation").innerText =
    `Thanks, ${name}! 🎉`;

  input.value = "";

  updateGuestList();
}

// Initial render
updateGuestList();

// ✅ Countdown
const countdown = document.getElementById("countdown");
const eventDate = new Date("October 14, 2026 18:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    countdown.innerHTML = "🎬 It's Movie Time!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML = `${d}d ${h}h ${m}m until showtime 🍿`;
}, 1000);
