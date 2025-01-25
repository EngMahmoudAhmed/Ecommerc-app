import { motion } from 'framer-motion';
import img1 from '../assets/ecommerce-statistics-hero-1.png'
import img2 from '../assets/upi-credit-cards-v1.png';
import img3 from '../assets/eCommerce-Marketing.png';
import img4 from '../assets/eCommerce-Website-Features-1920-x-1080.jpg'


const HeroSection = () => {
    return (
        <div className="relative bg-gray-800 text-white flex items-center justify-center ">
                <img src={img3} className="w-full h-full object-cover opacity-50"  />
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 absolute text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover Your Style
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Shop the latest trends and exclusive collections, tailored just for you.
                </motion.p>
                <motion.div
                    className="mt-8 flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium shadow-lg">
                        Shop Now
                    </button>
                    <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium shadow-lg">
                        Explore Deals
                    </button>
                </motion.div>
            </div>
            {/* <div className="absolute inset-0 z-[-1]">
                <img
                    src={img1}
                    alt="E-commerce Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div> */}
        </div>
    );
};

export default HeroSection;
