const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51MTvC9FELtZWTYHqRo04J67i0pyXM7ZUc6cudf1iuC3Z5iBOb9bS1aP8ShKu6yvihOp91pgMNR4aezq1T9Vw42cB009bWhC9H8"
);

const postStripe = async (req, res) => {
  try {
    const { id, amount } = req.body;
    console.log(amount);

    await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Productos",
      payment_method: id,
      confirm: true,
    });

    res.send({ message: "Pago Exitoso" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
};

module.exports = {
  postStripe,
};
