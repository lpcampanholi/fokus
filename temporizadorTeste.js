let segundos = 0;
console.log(segundos);

function incrementar() {
  segundos++;
  console.log(segundos);
};

const intervalo = setInterval(incrementar, 1000);

clearInterval(intervalo);
