"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import productsData from "../../data/products.json";
import { Product } from "../../types/product";
import styles from "./page.module.css";

function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Mock fetching products (you can replace this with an actual API call)
    setProducts(productsData as Product[]);
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Fashion</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              aria-hidden
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
            />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button className={styles.detailsButton}>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
