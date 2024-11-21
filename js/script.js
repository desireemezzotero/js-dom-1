/* richiamo il bottone */
const btn = document.getElementById("button");
const lightOff = document.querySelector('.off');
const lightOn = document.querySelector('.on');


btn.addEventListener('click', () => {
  lightOn.classList.add('.active');
  btn.innerHTML = 'Spegni' 
})