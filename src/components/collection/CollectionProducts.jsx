import React from "react";
import ProductCard from "../global/ProductCard";

export default function CollectionProducts({ products, title }) {
  return (
    <div className="container pb-16" >
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {title} ({products.length}) results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
