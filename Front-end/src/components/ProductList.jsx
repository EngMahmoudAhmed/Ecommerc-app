import { useState , useEffect } from 'react'
/* eslint-disable no-undef */
// import Product from './Product'
const Api_Url = "http://localhost:3000/products"


const ProductList = () => {

    const [products, setProducts] = useState([])


    useEffect(() => { fetch(Api_Url)
        .then(res => res.json())
        .then(data => setProducts(data)) }, [])
    

    const filterproduct = (category) => {
        if (category === 'All') {
            setProducts(products)
        }
        else {
            setProducts(products.filter((product) => product.category === category))
        }
    }
    // const [filteredProducts, setFilteredProducts] = useState([])
    console.log(products);
    

    return (<>
    <h1 className="text-4xl font-bold text-center mt-10 mb-10">
            Our Products
            </h1>
        <div className=" text-2xl font-bold flex justify-center items-center">

            <button className=" font-bold btn btn-outline mx-2 my-5" onClick={() => filterproduct('All')}>All</button>
            <button className=" font-bold btn btn-outline mx-2 my-5" onClick={() => filterproduct("men's clothing")}>Men`s</button>
            <button className=" font-bold btn btn-outline mx-2 my-5" onClick={() => filterproduct("jewelery")}>Jewelery</button>
            <button className=" font-bold btn btn-outline mx-2 my-5" onClick={() => filterproduct("electronics")}>electronics</button>
            <button className=" font-bold btn btn-outline mx-2 my-5" onClick={() => filterproduct("women's clothing")}>Women`s</button>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => {
                // const {id, title, price, category, description, image} = product
                return (
                    <div key={product.id} className="border border-gray-200 p-4 rounded-lg">
                        <img src={product.image} alt={product.title} className="w-full h-64 object-cover object-center" />
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p className="text-gray-500">{product.description ? product.description.slice(0, 50):'...'}...</p>
                            <p className="text-gray-500">{product.category}</p>
                            <p className="text-slate-100">${product.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>    
    )
}

export default ProductList
