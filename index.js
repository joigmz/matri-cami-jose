// Countdown script (ajusta la fecha del evento y la zona horaria)
function getSantiagoNow() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Santiago' })).getTime();
}
const eventDate = new Date(new Date('2025-11-15T18:00:00').toLocaleString('en-US', { timeZone: 'America/Santiago' })).getTime();
const countdown = () => {
  const now = getSantiagoNow();
  const distance = eventDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(document.getElementById("days")) document.getElementById("days").innerText = days.toString().padStart(2, "0");
  if(document.getElementById("hours")) document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  if(document.getElementById("minutes")) document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  if(document.getElementById("seconds")) document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
};
setInterval(countdown, 1000);
countdown();

// Spotify floating player toggle
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('spotify-float-btn');
  var player = document.getElementById('spotify-player-float');
  if(btn && player) {
    btn.addEventListener('click', function() {
      player.classList.toggle('hidden');
    });
  }
});


const flowerImages = [
    'static/img/formal-1.jpg',
    'static/img/formal-2.jpg',
    'static/img/formal-3.jpg',
    'static/img/aventura-1.jpg',
    'static/img/aventura-2.jpg',
    'static/img/aventura-3.png',
    'static/img/aventura-4.jpg',
    'static/img/aventura-5.jpg',
    'static/img/aventura-6.jpg',
    'static/img/aventura-7.jpg',
    'static/img/aventura-8.jpg',
    'static/img/aventura-9.jpg',
    'static/img/aventura-10.jpg',
    'static/img/aventura-11.jpg',
    'static/img/aventura-12.jpg',
    'static/img/comiendo-juntos-1.jpg',
    'static/img/comiendo-juntos-2.jpg',
    'static/img/comiendo-juntos-3.jpg',
    'static/img/comiendo-juntos-4.jpg',
    'static/img/comiendo-juntos-5.jpg',
    'static/img/comiendo-juntos-6.jpg',
    'static/img/comiendo-juntos-7.jpg',
    'static/img/viviendo-juntos-1.jpg',
    'static/img/viviendo-juntos-2.jpg',
    'static/img/viviendo-juntos-3.jpg',
    'static/img/viviendo-juntos-4.jpg',
    'static/img/viviendo-juntos-5.jpg',
    'static/img/viviendo-juntos-6.jpg',
    'static/img/viviendo-juntos-7.jpg',
    'static/img/viviendo-juntos-8.jpg',
    'static/img/viviendo-juntos-9.jpg',
    'static/img/viviendo-juntos-10.jpg',
    'static/img/matrimonio-1.jpg',
    'static/img/nuestros-inicios-1.jpg'
  ];
  
  function changeRandomPics() {
    // Selecciona 4 imágenes distintas al azar
    const shuffled = flowerImages.sort(() => 0.5 - Math.random());
    for (let i = 1; i <= 8; i++) {
      const img = document.getElementById(`random-pic-${i}`);
      if (img) {
        img.src = shuffled[i - 1];
      }
    }
  }
  
  // Cambia las imágenes cada 10 segundos
  setInterval(changeRandomPics, 2*1000);
  // Cambia las imágenes al cargar la página
  window.addEventListener('DOMContentLoaded', changeRandomPics);