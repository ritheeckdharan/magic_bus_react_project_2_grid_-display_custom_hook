import React, { useState } from "react";
import useFetch from "../components/useFetch";

const Display = () => {
  const [data] = useFetch("https://fakestoreapi.com/products");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  
  const filteredData = data
    ? data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  
  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === "low-high") return a.price - b.price;
    if (sort === "high-low") return b.price - a.price;
    if (sort === "rating") return b.rating?.rate - a.rating?.rate;
    return 0;
  });

  return (
    <div className="page-body">
      <div className="container py-5">
        <h2 className="mb-4 fw-bold text-center text-dark">
          🛒 Trending Products
        </h2>

        
        <div className="row mb-4 align-items-center">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control form-control-sm border-primary shadow-sm"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select form-select-sm border-success shadow-sm"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{ maxWidth: "250px" }}
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="rating">Rating: High → Low</option>
            </select>
          </div>
        </div>

      
        <div className="row g-4">
          {sortedData.length > 0 ? (
            sortedData.map((item) => {
              const rating = Math.round(item.rating?.rate || 3);
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                  <div className="card product-card shadow-sm h-100 border-0">
                    <div className="image-container bg-light p-2 rounded">
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt={item.title}
                        style={{ height: "200px", objectFit: "contain" }}
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

                      <h5 className="fw-bold text-success mb-3">
                        ₹{item.price}
                      </h5>

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
            })
          ) : (
            <p className="text-center text-muted">No products found 😔</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
