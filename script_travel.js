document.getElementById('countdownForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const dateInput = document.getElementById('date').value;
  const timeInput = document.getElementById('time').value;

  if (dateInput && timeInput) {
      const countdownDate = new Date(dateInput + 'T' + timeInput + ':00').getTime();
      startCountdown(countdownDate);
  }
});

function startCountdown(countdownDate) {
  const countdownFunction = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
          clearInterval(countdownFunction);
          document.querySelector('.countdown').innerHTML = "Have a great trip!";
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
  }, 1000);
}