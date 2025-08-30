
const cards = document.querySelectorAll(".card");
const descs = document.querySelectorAll(".desc");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // sembunyiin semua
    descs.forEach(d => d.classList.remove("active"));

    // ambil id target dari data-target
    const targetId = card.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});


