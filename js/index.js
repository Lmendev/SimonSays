const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 10

class Juego {
  constructor() {
  	this.inicializar()
  	this.generarSecuencia()
  	
  	setTimeout(this.siguienteNivel, 500)
  }
  
  inicializar() {
  	this.elegirColor = this.elegirColor.bind(this)
  	this.siguienteNivel = this.siguienteNivel.bind(this)

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
  	this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))

  }

  siguienteNivel(){
  	this.subnivel = 0
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

  transformarColorANumero (color){
  	switch (color){
  		case 'celeste':
  			return 0
  		case 'violeta':
  			return 1
  		case 'naranja':
  			return 2
  		case 'verde':
  			return 3
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

  eliminarEventosClick(){
  	this.colors.celeste.removeEventListener('click', this.elegirColor)
  	this.colors.verde.removeEventListener('click', this.elegirColor)
  	this.colors.violeta.removeEventListener('click', this.elegirColor)
  	this.colors.naranja.removeEventListener('click', this.elegirColor)
  }

  elegirColor(ev) {
  	const nombreColor = ev.target.dataset.color
  	const numeroColor = this.transformarColorANumero(nombreColor)
  	
  	this.iluminarColor(nombreColor)

  	if (numeroColor === this.secuencia[this.subnivel]){  		
  		this.subnivel++

  		if(this.subnivel === this.level){
  			this.level++
  			this.eliminarEventosClick()

  			if(this.level === (ULTIMO_NIVEL + 1)) {
  				//Winner
  			} else{
  				setTimeout(this.siguienteNivel, 1500)
  			}
  		}
  	}else{
  		//loser
  	}
  }
}

function empezarJuego() {
  var juego = new Juego()
}