import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Productos from "./components/Productos";
import Stripe from "./components/Stripe";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51MTvC9FELtZWTYHq5r17wOJYEDmXxJoiLiwUuPGPzb8o1UvLX6uk4DxZ7qDRovabUV1gadJ3VPDgaFN92t8L7QzS00XOKIQLaK"
);

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <Productos />
        <Stripe />
      </Elements>
    </div>
  );
}

export default App;
