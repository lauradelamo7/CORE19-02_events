// Importar modulo Later.js:
const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter{
    constructor(configuracion) {
      super();
    // Usar zona horaria local:
    later.date.localTime();

    if (configuracion instanceof Array){
      for(var i=0; i<configuracion.lenght;i++){
        var e =configuracion[i];
        //hora -> e.hora
        //temperatura -> e.temperaturaIdeal
        console.log("Hora"+ e.hora + "temperaturaIdeal")
        later.setInterval(
          () => this.emit('ideal', e.temperatura),
          later.parse.text ('at' + e.hora)
        );
      }
    }
    // Crear planificación para todos los dias a las 18:00
    const sched = later.parse.text('at 18:00');
    // Crear un temporizador que escriba indefinidamente "hola"
    // en los instantes planificados anteriormente:


	}
}

exports = module.exports = Programador;
