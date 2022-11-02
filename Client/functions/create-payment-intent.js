// domain/.netlify/functions/create-payment-intent

require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_AUTH_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart_reducer, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return total_amount + shipping_fee;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "inr",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
};
