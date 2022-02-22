const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name = delay]'),
  stepInput: document.querySelector('input[name = step]'),
  amountInput: document.querySelector('input[name = amount]')
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', onFormSumbit);

function onFormSumbit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);


  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).
      catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayValue += stepValue;
  }
}

