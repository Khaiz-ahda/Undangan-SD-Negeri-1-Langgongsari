//<!--Click Buka Undangan -->
document.getElementById('openInvitation').addEventListener('click', function () {
    // Smooth scroll to the quotes section
    document.querySelector('.quotes').scrollIntoView({
      behavior: 'smooth', // Enable smooth scrolling
      block: 'start' // Align to the top of the viewport
    });
  
    // Display the navigation bar
    const navigationContainer = document.getElementById('navigationContainer');
    navigationContainer.style.display = 'block'; // Make it visible
    navigationContainer.style.opacity = '0'; // Start with transparency for fade-in effect
    setTimeout(() => {
      navigationContainer.style.transition = 'opacity 0.5s ease'; // Add fade-in transition
      navigationContainer.style.opacity = '1'; // Fade in
    }, 50); // Slight delay for smooth animation
  });


//<!-- Java Script untuk menghilangkan scroll -->
// Tambahkan kelas "no-scroll" saat pertama kali halaman dimuat
document.body.classList.add("no-scroll");

document.getElementById("openInvitation").addEventListener("click", function() {
  // Hapus kelas "no-scroll" setelah tombol diklik
  document.body.classList.remove("no-scroll");

  // Scroll ke bagian event
  document.getElementById("event").scrollIntoView({
    behavior: "smooth", // Efek scroll halus
    block: "center" // Pastikan bagian tetap terlihat rapi di viewport
  });

  // Tampilkan navigasi
  document.querySelector(".navigation-container").style.display = "block";
});





document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".list");
    const navigationContainer = document.querySelector(".navigation ul");
    let activeIndex = 0; // Index of the currently active navigation item

    // Function to slide right
    function slideRight() {
        if (activeIndex < navItems.length - 1) {
            navItems[activeIndex].classList.remove("active");
            activeIndex++; // Move to the next item
            navItems[activeIndex].classList.add("active");

            // Scroll horizontally to the next item
            navItems[activeIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
        }
    }

    // Function to slide left
    function slideLeft() {
        if (activeIndex > 0) {
            navItems[activeIndex].classList.remove("active");
            activeIndex--; // Move to the previous item
            navItems[activeIndex].classList.add("active");

            // Scroll horizontally to the previous item
            navItems[activeIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
        }
    }

    // Add event listeners for each navigation item (click functionality)
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            navItems[activeIndex].classList.remove("active");
            activeIndex = index; // Update the active index
            item.classList.add("active");

            // Ensure the clicked item is centered in view
            item.scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
        });
    });

    // Optionally, add keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            slideRight(); // Slide to the right when the right arrow key is pressed
        }
        if (e.key === "ArrowLeft") {
            slideLeft(); // Slide to the left when the left arrow key is pressed
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".list");
    const sections = document.querySelectorAll("section");
    let activeIndex = 0; // Indeks elemen navigasi yang aktif

    // Fungsi untuk memperbarui elemen aktif berdasarkan posisi scroll
    function updateActiveIconOnScroll() {
        let scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const offsetTop = section.offsetTop - 50; // Buffer untuk memastikan deteksi yang akurat
            const offsetBottom = offsetTop + section.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                // Hapus kelas "active" dari semua elemen navigasi
                navItems.forEach((navItem) => navItem.classList.remove("active"));
                
                // Tambahkan kelas "active" ke elemen saat ini
                navItems[index].classList.add("active");

                // Geser elemen navigasi yang aktif ke tengah
                navItems[index].scrollIntoView({
                    behavior: "smooth", // Animasi halus
                    inline: "center", // Pastikan elemen di tengah
                    block: "nearest" // Pilihan agar tampilan tetap efisien
                });

                // Perbarui indeks aktif
                activeIndex = index;
            }
        });
    }

    // Tambahkan event listener ke scroll
    window.addEventListener("scroll", updateActiveIconOnScroll);

    // Inisialisasi pertama kali untuk memastikan ikon aktif sesuai
    updateActiveIconOnScroll();
});

// Klik Gambar
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';

    // Tambahkan event listener untuk menutup modal saat area di luar konten diklik
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Countdown Timer
// Set tanggal akhir untuk hitungan mundur
const targetDate = new Date('2025-04-30T19:00:00').getTime();

// Fungsi untuk menghitung sisa waktu
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update elemen HTML dengan nilai yang dihitung
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        // Jika hitungan mundur selesai
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        clearInterval(countdownInterval);
    }
}

// Perbarui hitungan mundur setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);

//Salin Kartu Bank
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Nomor rekening ${text} berhasil disalin!`);
    }).catch(err => {
        console.error('Gagal menyalin teks:', err);
    });
}


//Submit Kirim
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi kehadiran berhasil terkirim!");
      })
    });
  });

// Music Control
const music = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');
const openInvitationBtn = document.getElementById('openInvitation');

// Function to toggle music
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.classList.remove('bi-music-note');
        musicIcon.classList.add('bi-music-note-list');
    } else {
        music.pause();
        musicIcon.classList.remove('bi-music-note-list');
        musicIcon.classList.add('bi-music-note');
    }
}

// Reveal the music icon and play music when the invitation is opened
openInvitationBtn.addEventListener('click', function () {
    musicIcon.style.display = 'block'; // Show the music icon
    if (music.paused) {
        music.play();
        musicIcon.classList.remove('bi-music-note');
        musicIcon.classList.add('bi-music-note-list');
    }
});

// Add event listener to the music icon for manual control
musicIcon.addEventListener('click', toggleMusic);


//barcode
// Add functionality to show the barcode when the invitation is opened
document.getElementById('openInvitation').addEventListener('click', function () {
    // Reveal the barcode container
    document.getElementById('barcode-icon-container').style.display = 'block';
});

// Add click event to the barcode icon
document.getElementById('barcode-icon-container').addEventListener('click', function () {
    const uniqueCode = "Undangan Alumni SD Negeri 1 Langgongsari"; // Replace with the actual code
    alert(`Your unique code is: ${uniqueCode}`);
});



//whatsapp
// Add functionality to show WhatsApp icon when the invitation is opened
document.getElementById('openInvitation').addEventListener('click', function () {
    // Reveal the WhatsApp icon container
    document.getElementById('whatsapp-icon-container').style.display = 'block';
});


  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('n') || '';
  const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
  const namaContainer = document.querySelector('.hero h4 span');
  namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/,',');

  document.querySelector('#nama').value = nama;
