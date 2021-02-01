const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }
  
  inicializar() {
  	this.elegirColor = this.elegirColor.bind(this)
    btnEmpezar.classList.add('hide')
    this.level = 1
    this.colors = {
    	celeste,
    	violeta,
		naranja,
		verde
    }
  }

  generarSecuencia() {
  	this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))

  }

  siguienteNivel(){
  	this.iluminarSecuencia()
  	this.agregarEventosClick()
  }

  transformarNumeroAColor(numero){
  	switch (numero){
  		case 0:
  			return 'celeste'
  		case 1:
  			return 'violeta'
  		case 2:
  			return 'naranja'
  		case 3:
  			return 'verde'
  	}
  }

  iluminarSecuencia(){
  	for(let i = 0; i < this.level; i++){
  		let color = this.transformarNumeroAColor(this.secuencia[i])
  		setTimeout(() => this.iluminarColor(color), 1000 * i)
  	}
  }

  iluminarColor(color){
  	this.colors[color].classList.add('light')
  	setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color){
  	this.colors[color].classList.remove('light')
  }

  agregarEventosClick(){
  	this.colors.celeste.addEventListener('click', this.elegirColor)
  	this.colors.verde.addEventListener('click', this.elegirColor)
  	this.colors.violeta.addEventListener('click', this.elegirColor)
  	this.colors.naranja.addEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
  	console.log(this)
  }
}

function empezarJuego() {
  var juego = new Juego()
}