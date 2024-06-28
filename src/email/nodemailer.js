const nodemailer = require('nodemailer');
require('dotenv').config();

const {CONTRASENADEAPLICACIONES, CORREO} = process.env;
const mail= {
  user: CORREO,
  pass: CONTRASENADEAPLICACIONES

}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    tls: {
      rejectUnauthorized: false
    },
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: mail.user,
      pass: mail.pass,
    },
  });
  const sendEmail = async (email, subject, html) => {//* email cliente , asunto, cuerpo del correo
     try {
       await transporter.sendMail({
            from: '"BellaMuse" bellamusevip@gmail.com', // sender address
            to: email, // list of receivers
            subject,
            html
    // attachments: [{
    //     filename: 'GDG_fondo_blanco.png',
    //     path: __dirname+ '/GDG_fondo_blanco.png',
    //     cid: 'GDG_fondo_blanco' //same cid value as in the html img src
    // }],
      });
     } catch (error) {
      console.log("Correo NO enviado", error)
     }
  }
  const getTemplate = (template,name) => {
    const templates = {
        bienvenida: getBienvenida(name),
        userEliminado: getUserEliminado,
    }
    return templates[template]
}

const getBienvenida = (name) => {
  return `

      <h2>Hola, ${name || 'Usuario'}</h2>
      <p>Gracias por preferirnos.</p>
      <p>Ahora que estás regitrado/a, te contamos mas de la aplicacion</p>
      <h3>Tu nuevo aliado para encontrar la prenda ideal para la ocacion perfecta donde podras </h3>
      <ul>
          <li>Buscar y filtrar por catgorias y precios</li>
          <li>Vision clara y organizada de las prendas</li>
          <li>compra en linea de los ejoeres articulos de belleza</li>
          <li>Pagar tu compra y envio desde la comodidad de tu casa</li>
      </ul>
    
      <h3 style="margin: auto;">¡BellaMuse estamos para Vestirte!

      <p>
      <strong>
      Atte. <a
      href="link que ye lleva al deploy" target="_blank"
      style="text-decoration: none;">BellaMuse</a>
      </strong>
  </p>
      `;
}

const getUserEliminado = (name) => {
  return `
 
  <h2>Estimado/a ${name}, tu cuenta ha sido eliminada satisfactoriamente.
      <br>
      Si esta solicitud no la hiciste tú, escríbenos a <a href="mailito:gestordegastospf@gmail.com">Gestor de Gastos</a>
  </h2>
  <p>
      <strong>
      Atte. <a
      href="https://gestor-de-gastos-front.vercel.app/" target="_blank"
      style="text-decoration: none;">Gestor de Gastos</a>
      </strong>
  </p>
  `
}

  module.exports ={
    sendEmail, 
    getTemplate
  }

  