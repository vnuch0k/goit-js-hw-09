// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

let selectedTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedTime = new Date(selectedDates[0]).getTime();
      if (Date.now() > selectedDates[0]) {
          alert("Please choose a date in the future")
          refs.button.setAttribute("disabled", "disabled");
      } else {
          refs.button.removeAttribute("disabled", "disabled");
      }
    },
};

// const obj = Object.values(options);
// const chosenTime = obj[2];
// console.log(chosenTime);



const refs = {
    text: document.querySelector('#datetime-picker'),
    button: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}



refs.button.setAttribute("disabled", "disabled");
flatpickr(refs.text, options)



const timer = {
    start() {
        refs.button.setAttribute("disabled", "disabled");
        refs.text.setAttribute("disabled", "disabled");
        const startTime = selectedTime;
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            
            const convertedMs = convertMs(deltaTime);
            console.log(convertedMs);
             outputValues(convertedMs);

        }, 1000)
        
    }
}

refs.button.addEventListener('click', timer.start)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
    

}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function outputValues({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}


