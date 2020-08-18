'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Jugadores",
      [
          {  
            name:"Juan Perez",
            nivel:"C",
            goles:10,
            sueldo:50000,
            bono:25000,
            sueldo_completo:null,
            equipo:"rojo",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {  
            name:"EL Cuauh",
            nivel:"Cuauh",
            goles:30,
            sueldo:100000,
            bono:30000,
            sueldo_completo:null,
            equipo:"azul",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {  
            name:"Cosme Fulanito",
            nivel:"A",
            goles:7,
            sueldo:20000,
            bono:10000,
            sueldo_completo:null,
            equipo:"azul",
            createdAt: new Date(),
            updatedAt: new Date(),
   
         },
         {  
            name:"El Rulo",
            nivel:"B",
            goles:9,
            sueldo:30000,
            bono:15000,
            sueldo_completo:null,
            equipo:"rojo",
            createdAt: new Date(),
            updatedAt: new Date(),
   
         }
      ],{}
        
      
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */ await queryInterface.bulkDelete('Jugadores', null, {});
    
  }
};
