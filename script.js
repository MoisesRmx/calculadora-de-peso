const tpsInp = document.querySelector('.tps-gdk input');
const todos = [...document.querySelectorAll('.plt-vl span')];
const btnCalcular = document.querySelector('.btn-cclr')

btnCalcular.addEventListener('click', () => {
  const mercurio = 3.7  * tpsInp.value / 9.807;
  todos[0].innerText = mercurio.toFixed(2) + ' Kg';


  const venus = 8.87  * tpsInp.value / 9.807;
  todos[1].innerText = venus.toFixed(2) + ' Kg';


  const tierra = tpsInp.value;
  todos[2].innerText = tierra + ' Kg';


  const marte = 3.721  * tpsInp.value / 9.807;
  todos[3].innerText = marte.toFixed(2) + ' Kg';


  const jupiter = 24.79  * tpsInp.value / 9.807;
  todos[4].innerText = jupiter.toFixed(2) + ' Kg';


  const saturno = 10.44  * tpsInp.value / 9.807;
  todos[5].innerText = saturno.toFixed(2) + ' Kg';


  const urano = 8.87  * tpsInp.value / 9.807;
  todos[6].innerText = urano.toFixed(2) + ' Kg';

  const neptuno = 11.15  * tpsInp.value / 9.807;
  todos[7].innerText = neptuno.toFixed(2) + ' Kg';

  const luna = 1.62  * tpsInp.value / 9.807;
  todos[8].innerText = luna.toFixed(2) + ' Kg';
})
