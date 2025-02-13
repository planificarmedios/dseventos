(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Define your countdown dates here
  const countdownDates = ['11/30/2025', '12/06/2025', '12/06/2025'];

  countdownDates.forEach((date, index) => {
    const countDown = new Date(date).getTime(),
      intervalId = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days' + (index + 1)).innerText = Math.floor(distance / day);
        document.getElementById('hours' + (index + 1)).innerText = Math.floor(
          (distance % day) / hour
        );
        document.getElementById('minutes' + (index + 1)).innerText = Math.floor(
          (distance % hour) / minute
        );
        document.getElementById('seconds' + (index + 1)).innerText = Math.floor(
          (distance % minute) / second
        );

        // Do something later when the date is reached
        if (distance < 0) {
          document.getElementById('headline' + (index + 1)).innerText = 'Event has started!';
          document.getElementById('countdown' + (index + 1)).style.display = 'none';
          clearInterval(intervalId);
        }
      }, 1000);
  });
})();
