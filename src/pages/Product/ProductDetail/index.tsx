import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetSingleProduct } from "@/actions/productActions"
import Rating from "react-rating"
import IconList from "@/components/Icon"
import "../style.css"
import Spinner from "@/components/Spinner"

type product = {
  image: string
  category: string
  title: string
  price: string
  rating: {
    count: number
    rate: number
  }
  description: string
}

const ProductDetail = () => {
  const { id } = useParams<{ id: any }>()
  const [product, setProduct] = useState<product | null>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const Handle = async () => {
      const data = await GetSingleProduct(id)
      setProduct(data)
      setLoading(false)
    }
    Handle()
  }, [])
  return (
    <>
      <div className="product_detail_card">
        {!loading ? (
          <div className="product_detail">
            <img src={product?.image} className="product_image" />
            <div style={{ width: "100%" }}>
              <h1>Type: {product?.category}</h1>
              <h3>Name: {product?.title}</h3>
              <h3>Price: ${product?.price}</h3>
              <Rating fractions={0.1} initialRating={product?.rating.rate} readonly />
              <h3>Product Count: {product?.rating.count}</h3>
              <h3>Description:</h3>
              <p style={{ fontSize: "20px", display: "flex", marginLeft: "15px" }}>
                {product?.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="spin_container">
            <Spinner />
          </div>
        )}

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
