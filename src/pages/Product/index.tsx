import { GetAllCategories, GetAllProducts, GetInCategory } from "@/actions/userActions"
import { useState, useEffect } from "react"

import "./style.css"

const Product = () => {
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState<string>("")

  const handleCategory = async (data: string) => {
    let list
    if (data !== "") {
      list = await GetInCategory(data)
    } else {
      list = await GetAllProducts()
    }
    setProducts(list)
  }

  useEffect(() => {
    const handleAllCategory = async () => {
      const list = await GetAllCategories()
      setCategories(list)
    }
    const handleAllProducts = async () => {
      const list: any[] = await GetAllProducts()
      setProducts(list)
    }
    handleAllCategory()
    handleAllProducts()
  }, [])

  return (
    <>
      <div className="product-card">
        <div className="product_header">
          <div
            className="inputContainer"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <p style={{ fontSize: "18px" }}>Search:</p>
            <input
              type="search"
              id="search"
              placeholder=" "
              className="product_input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div
            className="inputContainer"
            style={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "4px" }}
          >
            <p style={{ fontSize: "18px" }}>Products:</p>
            <select onChange={(e) => handleCategory(e.target.value)} className="product_select">
              <option value="">All Products</option>
              {categories.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="grid-container">
          {products &&
            products?.map((item, index) => {
              if (item?.title.includes(search) || item?.description.includes(search))
                return (
                  <div className="products" key={index}>
                    <img src={item.image} alt={item?.title} className="product" />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: "700",
                        fontSize: "16px",
                      }}
                    >
                      <p className="product-title">{item?.title}</p>
                      <p>${item?.price}</p>
                    </div>
                    <p className="description">{item?.description}</p>
                    <a href={`/product/${item.id}`}>
                      <button style={{ width: "100%" }}>More Details</button>
                    </a>
                  </div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Product
