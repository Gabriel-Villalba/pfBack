const { MercadoPagoConfig, Preference } = require("mercadopago");

const createPreference = async (req, res) => {
  try {
    const client = new MercadoPagoConfig({
      //accessToken: "APP_USR-8208977605272570-062109-7f75b773fc75dd75796129fc3e524f2e-1750994478"
      accessToken:
        "APP_USR-6952793342028548-062115-477c75a36a8cf02bfb9a1a09a8807a25-1866252207",
    });

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
        success: "https://pf-front-end-bay.vercel.app/",
        failure: "https://pf-front-end-bay.vercel.app/",
        pending: "https://pf-front-end-bay.vercel.app/",
      },
      auto_return: "approved",
    };
    console.log(req.body.title);
    console.log(req.body.quantity);
    console.log(req.body.price);
    const preference = new Preference(client);
    const result = await preference.create({ body });

    res.json({ id: result.id });
  } catch (error) {
    console.error("¡Ups! Hubo un error al crear la preferencia:", error);
    res.status(500).json({ message: "Error al crear la preferencia" });
  }
};

module.exports = createPreference;
