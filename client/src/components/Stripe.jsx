import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Stripe = ({ precio }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      setLoading(true);
      try {
        const { id } = paymentMethod;
        const { data } = await axios.post("http://localhost:3001/api/pagos", {
          id,
          amount: precio,
        });
        console.log(data);
        alert(data.message);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }
  };

  return (
    <div className="mb-5 col-md-6 offset-md-3">
      <h1>Stripe</h1>
      <form onSubmit={handleSubmit} className="card card-body">
        <div className="container p-4">
          <div className="row">
            <div>
              <img
                src="https://www.donwordpress.com/blog/wp-content/uploads/2019/06/stripe.jpg"
                alt="imagen stripe pagos"
                className="img-fluid"
              />
              <CardElement className="form-control mt-2 border border-primary" />
            </div>
          </div>
        </div>
        <button className="btn btn-success" disabled={!stripe}>
          {loading ? (
            <div className="spinner-border text-info" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Pagar"
          )}
        </button>
      </form>
    </div>
  );
};

export default Stripe;
