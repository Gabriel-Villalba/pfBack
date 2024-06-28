const { User, Cart,Product, ProducCart } = require('../db')
const createUser = require("../handlers/createUsers")

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
        
        const { Email, Contraseña, Nombre } = req.body
        
        try {
            
            // con mi funcion "validate" verifico si esta registrado o no
            // pasandole por parametros el email y la passw del front
            
            const login = await validate(Email, Contraseña)
         

        if (login) {
            const html = getTemplate("bienvenida", Nombre);
         await sendEmail(Email,`Bienvenido ${Nombre}`, html)

            res.status(200).json({ access: 'Se ha ingresado' })
        } else {
            res.status(200).json({ access: 'Clave incorrecta' })
        }
    } catch (error) {
        res.status(400).json({ access: 'No registrado' })
    }
}

const registerHandler = async (req, res) => {//*varios cambios en este controller, 
                                             //*verifica si existe el usuario y si tiene carrito
    try { 
        // Extraemos los datos del front-end: nombre, email y contraseña
        const { Nombre, Email } = req.body;
      let userAdmin = false;
        // Comprobamos que los campos estén llenos
        if (!Nombre || !Email) {
            return res.status(400).json({ access: 'Datos incompletos' });
        }
        // Verificamos si ya existe un usuario con el mismo email en la base de datos
        const existingUser = await User.findOne({ where: { Email } });

        if (existingUser) {
            
            existingUser.dataValues.isAdmin === true ? userAdmin= true : userAdmin = false
            // El usuario ya existe, verificamos si tiene un carrito
            const userCart = await findUserCart(existingUser.id);

            //console.log("EL ID del carrito es : ",userCart)
            if (userCart) {
                res.status(200).json({ hasCart: true, cartId:existingUser.dataValues.CartId , id:existingUser.id , userAdmin:userAdmin});
            } else {
                console.log('Crear un carrito para el usuario...');
                res.status(200).json({ hasCart: false,id:existingUser.id });
            }
        } else {
            console.log('Usuario no encontrado. Crear nuevo usuario...');
            // Creamos un nuevo usuario
            //  const isAdmin= true ;//* descomentar para crear administrador 
            // const user = await User.create({ Nombre, Email, isAdmin });//* descomentar para crear administrador 
            const user = await User.create({ Nombre, Email})//* comentar para crear administrador 
           console.log(user.dataValues.id)
            res.status(200).json({existing: true, hasCart: false, id :user.dataValues.id, userAdmin:userAdmin });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//********VALIDAR SI TIENE CARRITO*************** */
async function findUserCart(id) {
    try {
        const user = await User.findByPk(id, {
            include: Cart // Incluye la relación con el carrito
        });
       // console.log(user)

        if (user && user.CartId) {
            //console.log(`El usuario con ID ${id} tiene un carrito.`, user.Cart.id);
            return user.Cart.id;
        } else {
            console.log(`El usuario con ID ${id} no tiene un carrito.`);
            return null;
        }
    } catch (error) {
        console.error('Error al buscar el carrito del usuario:', error);
        return null;
    }
}






module.exports = {
    loginHandler,
    registerHandler
}