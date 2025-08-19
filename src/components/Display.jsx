import React from "react";
import useFetch from "../components/useFetch";

const Display = () => {
  const [data] = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="page-body">
      <div className="container py-5">
        <h2 className="mb-4 fw-bold text-center text-dark">
          🛒 Trending Products
        </h2>
        <div className="row g-4">
          {data &&
            data.map((item) => {
              const rating = Math.round(item.rating?.rate || 3);
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                  <div className="card product-card shadow-sm">
                    <div className="image-container">
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-semibold text-dark">
                        {item.title}
                      </h6>

                      
                      <p className="mb-1 text-warning">
                        {"⭐".repeat(rating)}{" "}
                        <span className="text-muted small">
                          ({item.rating?.count || 100})
                        </span>
                      </p>

                      {/* Price */}
                      <h5 className="fw-bold text-success mb-3">₹{item.price}</h5>

                      {/* Buttons */}
                      <div className="mt-auto d-flex gap-2">
                        <button className="btn btn-warning btn-sm flex-fill">
                          Add to Cart
                        </button>
                        <button className="btn btn-dark btn-sm flex-fill">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Display;
