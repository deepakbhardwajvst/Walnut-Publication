import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import SortOptions from "../components/SortOptions";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSortBy(type);
    const sortedProducts = [...products].sort((a, b) => {
      if (type === "title") {
        return a.title.localeCompare(b.title);
      } else if (type === "price") {
        return a.price - b.price;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <div className="container mx-auto py-8">
      <SortOptions sortBy={sortBy} onSort={handleSort} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
