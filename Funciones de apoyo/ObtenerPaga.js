
function Nivel(nivel){
    let x
    if (nivel === 'A')  x = 5;
    if (nivel === 'B')  x = 10;
    if (nivel === 'C')  x = 15;
    if (nivel === 'Cuauh') x = 20;
    return x
}

function coeficentEquipo(jugadores){   
    Goles = jugadores.map((goles)=>{
        return goles.goles;
    })
    const totalDeGolesJugadores = Goles.reduce((a,b)=> a+b, 0);

    Niveles = jugadores.map((nivel)=>{

        return Nivel(nivel.nivel)
    })

    const totalDeGolesEquipo = Niveles.reduce((a,b)=> a+b, 0);

    let coeficienteTodos = totalDeGolesJugadores / totalDeGolesEquipo

    if(coeficienteTodos > 1){
        return 1
    } else{
        return coeficienteTodos
    }
}
    
function coeficenteJugador(goles,nivel){
    let coeficiente = goles / Nivel(nivel)
    if (coeficiente > 1){
        return 1
    }else{
        return coeficiente
    }
}
    

function ObtenerPaga(jugadores){
    
 
    
    return jugadores.map(function(x){

        const porcientoBono = (coeficentEquipo(jugadores)+ coeficenteJugador(x.goles,x.nivel))/2
        
        x.sueldo_completo = x.sueldo + (x.bono*porcientoBono)
        
        
        return x
        
    })
    
}
module.exports = ObtenerPaga