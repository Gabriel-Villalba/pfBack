const { User } = require('../db')
const createUser = require("../handlers/createUsers")
//const { check, validationResult, body } = require("express-validator");

// mi funcion "validate" le llega por parametros un email y una passw

const validate = async (Email,Contraseña) => {

// busco en la db si hay un correo que coincida con el me llego y si coincide guardo
// la informacion del usuario en mi variable "user"

    const user = await User.findOne({where: {Email}})

// en la informacion almacenada en user verifico si la passowrd coincide con la que me llego
// en parametros y retorno true o false dependiendo si coincide o no.

    if(user.Contraseña === Contraseña){
        return true
    } else {
        return false
    }
}


const loginHandler = async (req, res) => {

    // traigo del front email/passw

    const { Email, Contraseña } = req.body

    try {

        // con mi funcion "validate" verifico si esta registrado o no
        // pasandole por parametros el email y la passw del front

        const login = await validate(Email, Contraseña)

        if (login) {
            res.status(200).json({ access: 'Se ha ingresado' })
        } else {
            res.status(200).json({ access: 'Clave incorrecta' })
        }
    } catch (error) {
        res.status(400).json({ access: 'No registrado' })
    }
}

const registerHandler = async (req, res) => {
    try {

// traigo del front name,email y password

        const { email, password } = req.body

        // compruebo que los campos esten llenos
        
        if( !email || !password){
            return res.status(400).json({access: 'Datos incompletos'})
         }

// verifico si no existe otro gmail en mi db

        const verificateEmail = await User.findOne({ where: { email } })

        if (verificateEmail) {
            return res.status(400).json({ access: 'Este correo ya existe' })
        }

        
// creo el registro en db

        await User.create({ email, password })

        res.status(200).json({ access: email + ' Registro Exitoso' })

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//************CREAMOS UN NUEVO USUARIO*************************************** */
const newUser = async (req, res) => {
  try {
    const { Nombre, Email } = req.body;
    const existingUser = await User.findOne({ where: { Email } });
    if (existingUser) {
      console.log("usuario ya existe")
      return res.status(400).send("usuario ya existe");
    }
    await createUser(Nombre, Email);
    console.log("Usuario creado exitosamente");
    res.status(200).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


///**********OBTENER USUARIO****************** */
const getUsers = async (req, res)=>{
    const {Nombre}= req.params
    try {
      if (!Nombre) {
        return res.status(400).send("Ingrese un Nombre");
      }
      const user = await User.findOne({ 
        where: {Nombre}, 
       });
      if (!user) {
        return res.status(400).send("Usuario inexistente");
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}
//***********OBTENER TODOS LOS USUARIOS********************** */
const getAllUsers = async (req , res) => {
  try {
    
    const users = await User.findAll();
    return res.status(200).json(users);
    
  } catch (error) {
    return res.status(500).send("Error interno del servidor");
  }
};


module.exports = {
    newUser, 
    getUsers,
    getAllUsers,
    newUser
}