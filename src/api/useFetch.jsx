import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);

  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };
  useEffect(() => {
    fetchInfo();
  }, [url]);

  return { products };
};

export default useFetch;
