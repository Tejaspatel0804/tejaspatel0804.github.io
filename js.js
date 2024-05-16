(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const birthday = "July 16, 2024 19:34:00"; // Updated birthday

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            // do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 0)
}());
