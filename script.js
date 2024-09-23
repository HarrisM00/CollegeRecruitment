function countdownTimer() {
    const deadline = new Date("Nov 15, 2024 23:59:59").getTime();
    // w3 schools
    // today's date and time
    const now = new Date().getTime();
    
    // distance between now and countdown date
    const timeLeft = deadline - now;
    
    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    
    document.getElementById("countdown").innerHTML = 
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    //"Deadline Passed"
    if (timeLeft < 0) {
      document.getElementById("countdown").innerHTML = "Deadline Passed";
    }
  }

  // Update every 1 second
  setInterval(countdownTimer, 1000);
