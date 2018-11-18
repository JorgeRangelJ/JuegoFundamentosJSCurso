const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }

  generarSecuencia() {
    // Crear un array de 10 elementos, y fill pone el valor en 0 es decir 10 ceros
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel() {
   this.iluminarSecuencia() 
  }

  transformasNumeroAColor(numero) {
    switch (numero) {
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

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      /*
      ejemplo de como seria la secuencia 
      0 1 0 2
      celeste
      violeta
      celeste
      naranja
      */
      // llamar funcion para iluminar el color      
      const color = this.transformasNumeroAColor(this.secuencia[i])
      setTimeout(() => { 
        // console.log(color)
        this.iluminarColor(color)
      }, 1000 * i)
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add('light')
    setTimeout( () => this.apagarColor(color), 350)
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }
}

function empezarJuego() {
  window.juego = new Juego()
}