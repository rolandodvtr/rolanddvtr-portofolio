// ----------------- For Navbar Animation --------------  
const navbar = document.querySelector('.Class-navbar');

// Saklar melacak apakah user menggulir
let hasScrolled = false;

// Event listener untuk mendeteksi guliran halaman
window.addEventListener('scroll', () => {
    // Cek apakah user sudah menggulir ke bawah lebih dari 50px
    if (window.scrollY > 50 && !hasScrolled) {
        hasScrolled = true;
    } 
    
    // Tambahan untuk mengembalikan navbar ke posisi awal
    if (window.scrollY === 0) {
        hasScrolled = false;
        navbar.classList.remove('navbar-hidden');
    }
});

//  efek delay saat navbar di klik 
const navbarLinks = document.querySelectorAll('.a-navbar');

navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Delay 300ms agar efek hover biru Bang sempat terlihat dulu
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500); 
        }
    });
});




// Event listener untuk mendeteksi pergerakan mouse
window.addEventListener('mousemove', (event) => {
    // Jika user belum pernah menggulir, jangan lakukan apa-apa
    if (!hasScrolled) {
        return;
    }

    const mousePosition = event.clientY;
    const topThreshold = 100;

    // Jika kursor berada di area atas layar, tampilkan navbar
    if (mousePosition < topThreshold) {
        navbar.classList.remove('navbar-hidden');
    } else {
        // Jika kursor tidak di area atas, sembunyikan navbar
        navbar.classList.add('navbar-hidden');
    }
});



// ==================Untuk memuncul / menghilangkan penjelasan pada gambar *Projek====================

const cards = document.querySelectorAll(".card");
const descs = document.querySelectorAll(".desc");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    const isAlreadyActive = targetElement.classList.contains("active");
    descs.forEach(d => d.classList.remove("active"));

    if (!isAlreadyActive) {
      targetElement.classList.add("active");
    }

  });
});





