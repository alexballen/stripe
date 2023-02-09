import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51MTvC9FELtZWTYHq5r17wOJYEDmXxJoiLiwUuPGPzb8o1UvLX6uk4DxZ7qDRovabUV1gadJ3VPDgaFN92t8L7QzS00XOKIQLaK"
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Elements>
      </BrowserRouter>
    </div>
  );
}

export default App;
