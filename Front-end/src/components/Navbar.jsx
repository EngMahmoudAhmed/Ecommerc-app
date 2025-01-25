import img from '../assets/shopping-cart-commerce-and-shopping-svgrepo-com.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start ">
                <div className="avatar">
                    <div className="w-16 rounded display-flex justify-start align-middle">
                        <img src={img} className=' cursor-pointer'/>
                    </div>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <summary>Item 2</summary>

                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
