export const timer = {
  intervalId: null,
  secondsRemaining: 0,
  setTimer(seconds) {
    return this.secondsRemaining = seconds;
  },
  startTimer() {
    return this.intervalId = setInterval(this.countDown, 1000);
  },
  countDown() {
    return timer.secondsRemaining > 0
             ? timer.secondsRemaining--
             : timer.timeRanOut();
  },
  timeRanOut() {
    return clearInterval(timer.intervalId);
  }
};