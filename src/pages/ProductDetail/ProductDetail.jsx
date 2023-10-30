import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import useFetch from "../../api/useFetch";
import Button from "../../components/Button/Button";
import { addProductDetail } from "../../app/features/todo/prductDetailSlice";
import "./ProductDetail.css";

function ProductDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const productDetail = useSelector(
    (state) => state.detailReducer.productDetail
  );
  const { products } = useFetch(`https://fakestoreapi.com/products/${id}`);

  useEffect(() => {
    dispatch(addProductDetail(products));
  }, [products]);

  return (
    <>
      <div className="desHeader">
        <div>
          <h1 className="heading">Product details</h1>
        </div>
        <div>
          <BsSearch
            className="iconSearchh"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div>
          <AiOutlineShoppingCart
            className="iconCartt"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
      <div className="des-data" key={productDetail?.id}>
        <div className="imgDiv">
          <img
            className="desImg"
            src={productDetail?.image}
            style={{ width: "460px", height: "460px" }}
            alt="React Image"
          />
        </div>
        <div className="desDetail">
          <h1>
            <b>{productDetail?.title}</b>
          </h1>
          <h3>Price: ${productDetail?.price}</h3>
          <h3>Category: {productDetail?.category}</h3>
          <div className="size">
            <Button className="btn">M</Button>
            <Button className="btn">L</Button>
            <Button className="btn">XL</Button>
          </div>
          <h4 className="detail">{productDetail?.description}</h4>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
