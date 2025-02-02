import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Qmf3WP1hpgVltNEYypXIUyCVP8h4QXrz3UBypyFzkz1jztzyJR7FOF8MWlC7Lxw3D4hO6BUwXEKJ2yENhevz4HG00cMrlk8J5"
);

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const ProductCard = ({ products }: { products: Product[] }) => {
  // build request
  const handleCheckout = async (product: Product) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      // round to avoid floating-point precision errors
      const amountInCents = Math.round(product.price * 100);

      const response = await fetch(
        "http://localhost:8080/product/v1/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: product.name,
            amount: amountInCents, // Convert to cents
            quantity: 1,
            currency: "USD",
          }),
        }
      );

      const data = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error("Stripe Checkout Error:", result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-12 col-lg-9 mx-auto">
          {/* this fragment needs to disappear on small screens */}
          <>
            {/* move to left side of screen */}
            <div>some-link</div>
          </>

          <div className="row row-cols-2 row-cols-md-3 g-4">
            {products.map((product: Product) => (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  {/* <img src="..." className="card-img-top" alt="..."> */}
                  <div className="card-body">
                    <h5 className="card-title">{product.name.toString()}</h5>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <button type="button" class="btn btn-primary btn-sm" onClick={() => handleCheckout(product)}>
                      Checkout
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
