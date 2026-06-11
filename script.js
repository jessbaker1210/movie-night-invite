// RSVP logic (unchanged)
let guests = [];

function rsvp() {
  const name = document.getElementById("guestName").value;
  if (!name) return;

  guests.push(name);

  document.getElementById("confirmation").innerText =
    `Thanks, ${name}! 🎉`;

  document.getElementById("guestCount").innerText =
    `Guests attending: ${guests.length}`;

  const list = document.getElementById("guestList");
  list.innerHTML = "";
  guests.forEach(g => {
    let li = document.createElement("li");
    li.textContent = g;
    list.appendChild(li);
  });

  document.getElementById("guestName").value = "";
}

// ✅ FORCE MUSIC TO PLAY NONSTOP
const music = document.getElementById("music");

// Try autoplay immediately
window.addEventListener("load", () => {
  playMusic();
});

// Fallback: play on first user interaction (mobile requirement)
document.addEventListener("click", playMusic);
document.addEventListener("touchstart", playMusic);

function playMusic() {
  if (music.paused) {
    music.play().catch(() => {
      console.log("Autoplay blocked until user interacts.");
    });
  }
}

// ✅ OPTIONAL: COUNTDOWN
const countdown = document.getElementById("countdown");
const eventDate = new Date("October 14, 2026 18:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎬 It's Movie Time!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((distance / 1000 / 60) % 60);

  countdown.innerHTML =
    `${days}d ${hrs}h ${mins}m until showtime 🍿`;
}, 1000);
