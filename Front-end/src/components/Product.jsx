
const Product = () => {
    
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl text-center m-4 mx-auto">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
