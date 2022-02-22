const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}

refs.btnStart.addEventListener('click', () => {
   timerId = setInterval(() => {
       refs.body.style.backgroundColor = getRandomHexColor();
   }, 500);
    refs.btnStart.setAttribute("disabled", "disabled");
})

refs.btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    const isAttributeExist = refs.btnStart.hasAttribute('disabled')
    if (isAttributeExist) {
        refs.btnStart.removeAttribute("disabled", "disabled");

    }
})




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
