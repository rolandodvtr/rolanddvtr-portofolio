//=== FILE JAVASCRIPT KHUSUS UNTUK LAMAN 3D DESAIN WEB PORTO ===//



// ============== GAMBAR DRAWING DRONE ======================//
const areaGambar= document.getElementById('dwg-drone-js');
const teksMelayang = document.getElementById('teksMelayang');

areaGambar.addEventListener('mousemove', function(e) {
    teksMelayang.style.display = 'block';
    
    // Memberi jarak agar teks tidak tertutup panah kursor
    // e.clientX/Y mengambil posisi tepat di layar browser
    teksMelayang.style.left = (e.clientX + 15) + 'px';
    teksMelayang.style.top = (e.clientY + 15) + 'px';
});

areaGambar.addEventListener('mouseleave', function() {
    teksMelayang.style.display = 'none';
});

//=============================================================//