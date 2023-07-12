import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function CollectionBanner({ image, title }) {
  return (
    <section className="relative ">
      <GatsbyImage image={image} className="py-11 w-full" alt={title}/>
       <div className="container absolute top-1/2 -translate-y-1/2 left-10">
        <h1 className="text-6xl text-white font-medium mb-4 capitalize w-[600px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
