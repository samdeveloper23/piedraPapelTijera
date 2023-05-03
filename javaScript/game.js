'use strict';

//#########Iniciamos el juego#################

let contadorRonda = 0;
let contadorAciertos = 0;
let contadorEmpates = 0;
let contadorErrores = 0;
let player;
let resultados;
const valorPiedra = 0;
const valosPapel = 1;
const valorTijera = 2;
const objeto = ['piedra', 'palel', 'tijeras'];
const imagenesObjetos = [
  '/media/piedraDibujo.avif',
  '/media/papelDibujo.jpeg',
  '/media/tijeraDibujo.jpeg',
];
//##########generamos el numero al azar############

let enemigo_azar = Math.floor(Math.random() * 3);
console.log(enemigo_azar);
//########asignamos los botones##########

const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijera = document.querySelector('#tijera');
const enemigo = document.querySelector('#enemigo');
const resultado = document.querySelector('#resultados');
const ronda = document.querySelector('#ronda');
const aciertos = document.querySelector('#aciertos');
const fallos = document.querySelector('#fallos');

//######Imprimimos los contadores en pantalla######
ronda.innerHTML = `Ronda:${contadorRonda}`;
aciertos.innerHTML = `Ganastes:${contadorAciertos}`;
fallos.innerHTML = `Perdistes:${contadorErrores}`;

//####Generamos la lógica del juego#########

const juegoDos = () => {
  enemigo_azar = Math.floor(Math.random() * 3);

  //####elegimos piedra#######
  if (player == 0) {
    if (enemigo_azar == 2) {
      contadorRonda++;
      contadorAciertos++;
      resultados = 'Ganastes';
    } else if (enemigo_azar == 1) {
      contadorRonda++;
      contadorErrores++;
      resultados = 'Perdistes';
    } else {
      contadorRonda++;
      contadorEmpates++;
      resultados = 'Empate';
    }
  }

  //######elegimos papel#########
  if (player == 1) {
    if (enemigo_azar == 0) {
      contadorRonda++;
      contadorAciertos++;
      resultados = 'Ganastes';
    } else if (enemigo_azar == 2) {
      contadorRonda++;
      contadorErrores++;
      resultados = 'Perdistes';
    } else {
      contadorRonda++;
      contadorEmpates++;
      resultados = 'Empate';
    }
  }

  //######elegimos tijera#########

  if (player == 2) {
    if (enemigo_azar == 1) {
      contadorRonda++;
      contadorAciertos++;
      resultados = 'Ganastes';
    } else if (enemigo_azar == 0) {
      contadorRonda++;
      contadorErrores++;
      resultados = 'Perdistes';
    } else {
      contadorRonda++;
      contadorEmpates++;
      resultados = 'Empate';
    }
  }
};

function impreso() {
  enemigo.style.backgroundImage = `url('${imagenesObjetos[enemigo_azar]}')`;
  resultado.innerHTML = `${resultados}`;
  ronda.innerHTML = `Ronda:${contadorRonda}`;
  aciertos.innerHTML = `Ganastes:${contadorAciertos}`;
  fallos.innerHTML = `Perdistes:${contadorErrores}`;
}

function time() {
  setTimeout(() => {
    enemigo.innerHTML = ``;
    resultado.innerHTML = ``;
    enemigo.style.backgroundImage = `url('/media/interroganteDibujo.avif')`;
  }, 2000);
}

function logg() {
  console.log(player);
  console.log(enemigo_azar);
  console.log(objeto[player]);
  console.log(objeto[enemigo_azar]);
  console.log(resultados);
}

function totalButton() {
  juegoDos(player);
  impreso();
  time();
  logg();
}

piedra.addEventListener('click', () => {
  player = valorPiedra;
  totalButton();
});

papel.addEventListener('click', () => {
  player = valosPapel;
  totalButton();
});

tijera.addEventListener('click', () => {
  player = valorTijera;
  totalButton();
});

enemigo.addEventListener('click', () => location.reload());
