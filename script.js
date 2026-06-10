// 🎶 Music toggle
function toggleMusic() {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// ⏳ Countdown
const eventDate = new Date("Oct 14, 2026 18:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff % (1000*60*60))/(1000*60));

  document.getElementById("countdown").innerHTML =
    `⏳ ${d}d ${h}h ${m}m until movie night`;
}, 1000);

// 📊 Guests (LOCAL STORAGE)
let guests = JSON.parse(localStorage.getItem("guests")) || [];

// Render list
function renderGuests() {
  document.getElementById("guestCount").innerText =
    `👥 Guests Attending: ${guests.length}`;

  const list = document.getElementById("guestList");
  list.innerHTML = "";

  guests.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

// RSVP
function rsvp() {
  const input = document.getElementById("guestName");
  const name = input.value.trim();

  if (!name) {
    document.getElementById("confirmation").innerText =
      "⚠️ Please enter your name!";
    return;
  }

  guests.push(name);
  localStorage.setItem("guests", JSON.stringify(guests));

  input.value = "";
  renderGuests();

  document.getElementById("confirmation").innerText =
    "🎉 You're on the list!";
}

// Initial load
renderGuests();

// 🍁 Leaves
for (let i = 0; i < 25; i++) {
  let leaf = document.createElement("div");
  leaf.className = "leaf";

  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = (5 + Math.random() * 5) + "s";
  leaf.style.opacity = Math.random();

  document.body.appendChild(leaf);
}
