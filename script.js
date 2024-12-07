document.addEventListener('mousemove', (e) => {
    const heroImage = document.querySelector('.hero-image');
    const x = (e.clientX / window.innerWidth) * 20 - 10; // Menghitung pergeseran horizontal
    const y = (e.clientY / window.innerHeight) * 20 - 10; // Menghitung pergeseran vertikal

    // Mengubah posisi latar belakang berdasarkan posisi mouse
    heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', function () {
    const heroText = document.querySelector('.hero-text');
    const scrollPosition = window.scrollY;
  
    // Mengubah opasitas teks berdasarkan scroll
    heroText.style.opacity = 1 - scrollPosition / 500;
  });