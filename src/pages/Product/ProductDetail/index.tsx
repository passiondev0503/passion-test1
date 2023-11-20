import { useParams } from "react-router-dom"

import "../style.css"
import { useEffect, useState } from "react"
import { GetSingleProduct } from "@/actions/userActions"
import Rating from "react-rating"
import IconList from "@/components/Icon"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  useEffect(() => {
    const Handle = async () => {
      const data = await GetSingleProduct(id)
      setProduct(data)
    }
    Handle()
  }, [])
  return (
    <>
      <div className="product_detail_card">
        <div className="product_detail">
          <img src={product?.image} className="product_image" />
          <div style={{ width: "100%" }}>
            <h1>Type: {product?.category}</h1>
            <h3>Name: {product?.title}</h3>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}> */}
            <h3>Price: ${product?.price}</h3>
            <Rating fractions={0.1} initialRating={product?.rating.rate} readonly />
            {/* </div> */}
            <h3>Product Count: {product?.rating.count}</h3>
            <h3>Description:</h3>
            <p style={{ fontSize: "20px", display: "flex", marginLeft: "15px" }}>
              {product?.description}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <a href="/product">
            <button style={{ width: "fit-content" }}>{IconList.backIcon} Go to Product Page</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
