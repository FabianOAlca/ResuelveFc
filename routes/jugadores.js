const express = require("express")
const db = require("../db/models")
const ObtenerPaga = require("../Funciones de apoyo/ObtenerPaga")
const router = express.Router()


/* obtener jugadores */
router.get('/', function (req, res) {
  const filter = req.body.filter || {}
  return db.Jugadores.findAll(filter).then((jugadores) =>res.json(ObtenerPaga(jugadores)))

  .catch(function(error){
    res.status(500).json({error:error})
  })


  
})

router.post('/', function(req,res){
  return db.Jugadores.create({...req.body}).then((jugador)=>{
    return res.json({success:true,data:jugador})
  })
  .catch((error)=>{
    res.status(500).json({error:error})
  }) 
})

router.delete("/:id", function (req, res) {
  const jugadorId = req.params.id

  db.Jugadores.destroy({ where: { id: jugadorId } })
    .then( ()=> {
      res.json({ success: true })
    })
    .catch((error)=> {
      res.status(500).json({ error: error })
    })
})


module.exports = router
