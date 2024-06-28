const { User } = require('../db')
const createUser= async (Nombre, Email)=>{
    console.log("a crear")
    try {  
        console.log(Nombre, Email)
        //const { Nombre, Email, isAdmin } = req.body;
        if(!Nombre|| !Email  ){
          return ("faltan datos")
       }
        // Registrar el usuario nuevo
    const newUser= await User.create({
          Nombre,
          Email,
          isAdmin:false,
        });
        return newUser
      } catch (error) {
        console.error("Error en la validación:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      }
}

module.exports = createUser