const { MercadoPagoConfig, Preference } = require("mercadopago");

const createPreference = async (req, res) => {
  try {
    const client = new MercadoPagoConfig({
      //"APP_USR-8031760293388354-062721-f50f0e46936f4c09a84fbe2f267a70ca-1877865992"
      accessToken:
        //"APP_USR-6952793342028548-062115-477c75a36a8cf02bfb9a1a09a8807a25-1866252207",
        "APP_USR-4034642779918978-062718-608b8f8e95632ec7250e320b2ef483b9-1866254135",
    });
    //console.log(req.body);
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity), // Parseo a número para asegurarme que sea un número
          unit_price: Number(req.body.unit_price), // Parseo a número para asegurarme que sea un número
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://pf-front-3u9ene45k-gabrielvillalbas-projects.vercel.app/",
        failure: "https://pf-front-3u9ene45k-gabrielvillalbas-projects.vercel.app/",
        pending: "https://pf-front-3u9ene45k-gabrielvillalbas-projects.vercel.app/",
      },
      auto_return: "approved",

    };
   
    //console.log(req.body.title);
    //console.log(req.body.quantity);
    //console.log(req.body.unit_price);
    const preference = new Preference(client);
    const result = await preference.create({ body });
  console.log(result);
    res.json({ id: result.id });
  } catch (error) {
    console.error("¡Ups! Hubo un error al crear la preferencia:", error);
    res.status(500).json({ message: "Error al crear la preferencia" });
  }
};

module.exports = createPreference;
