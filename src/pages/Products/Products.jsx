import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";
import { addProducts } from "../../app/features/todo/productsSlice";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productss = useSelector((state) => state.productsReducer.products);
  const { products } = useFetch("https://fakestoreapi.com/products");

  useEffect(() => {
    dispatch(addProducts(products));
  }, [products]);

  const handleClick = (event) => {
    navigate("/product-description/" + event.currentTarget.id);
  };
  return (
    <>
      <Header />
      <div className="grid">
        {productss?.map((product) => (
          <div className="view" key={product?.id}>
            <div>
              <img
                id={product?.id}
                onClick={handleClick}
                src={product?.image}
                style={{ width: "200px", height: "200px" }}
                alt="React Image"
              />
            </div>
            <div>{product?.title}</div>
            <div>{`$${product?.price}`}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
