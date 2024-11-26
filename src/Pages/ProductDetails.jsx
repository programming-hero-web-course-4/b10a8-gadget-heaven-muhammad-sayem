import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Rating from "react-rating";
import "./css/style.css";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addProduct } from "../utils";
import { addWishProduct, getAllWishedProducts } from "../utils/index2";
import { Helmet } from "react-helmet";


const ProductDetails = () => {
    const allProducts = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const selectedProduct = allProducts.find(product => product.product_id === parseInt(id));
        setProduct(selectedProduct);

        const wished = getAllWishedProducts();
        const isExist = wished.find(item => item.product_id === selectedProduct.product_id);

        if(isExist){
            setIsInWishlist(true);
        }
        
    }, [allProducts, id])

    const handleAddProduct = (product) => {
        addProduct(product);
    }

    const handleWishList = (product) => {
        addWishProduct(product);
        setIsInWishlist(true);
    }

    return (
        <div className="text-center">
            <Helmet>
                <title> Product Details </title>
            </Helmet>
            <div className="bg-[#9538E2] text-white pb-48">
                <h2 className="text-3xl font-bold mb-6"> Product Details </h2>
                <p className="text-lg font-thin px-96 mb-6"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>
            </div>


            <div className="w-4/5 mx-auto -mt-48 mb-24">
                <div className="card lg:card-side bg-base-100 shadow-2xl space-x-6 p-20">
                    <figure className="w-1/3">
                        <img src={product.product_image} alt="Album" />
                    </figure>
                    <div className="w-2/3 text-left">
                        <h2 className="card-title text-3xl font-bold mb-3"> {product.product_title} </h2>

                        <p className="text-xl text-[#09080fb3] font-bold mb-3"> Price: {product.price} </p>

                        <div className="mb-3">
                            {
                                product.availability ?
                                    <p className="bg-[#EBF6E7] text-[#5EB23F] inline px-3 py-1 border-2 border-[#5EB23F] rounded-full text-sm"> In Stock </p>
                                    :
                                    <p className="bg-[#f6eae7] text-[#b2473f] inline px-3 py-1 border-2 border-[#b2473f] rounded-full text-sm"> Out of Stock </p>
                            }
                        </div>

                        <p className="text-md text-gray-500 mb-3"> {product.description} </p>

                        <p className="text-xl font-bold mb-4"> Specificaton: </p>

                        <ol className="custom-list text-lg text-gray-500 mb-4">
                            {
                                product?.Specification?.map((spec, idx) => (
                                    <li key={idx}> {spec} </li>
                                ))
                            }
                        </ol>

                        <div className="flex gap-x-2 items-center mb-4">
                            <p className="text-xl font-bold"> Rating </p>
                            <FaStar size={20} color="gold"></FaStar>
                        </div>

                        <div className="flex gap-x-3 items-center mb-4">
                            <Rating
                                initialRating={product.rating}
                                readonly={true}
                                fullSymbol={<FaStar size={20} color="gold"></FaStar>}
                                emptySymbol={<FaStar size={20} color="gray"></FaStar>}
                            ></Rating>
                            <p className="px-3 py-1 rounded-full bg-[#F2F2F3]"> {product.rating} </p>
                        </div>

                        <div className="flex space-x-6 items-center mb-6">

                            <div onClick={()=> handleAddProduct(product)} className="bg-[#8A35D1] gap-x-2 inline-flex px-8 py-4 rounded-full text-white font-bold hover:cursor-pointer hover:bg-black">
                                <button className="text-lg"> Add to Cart </button>
                                <IoCartOutline size={25}></IoCartOutline>
                            </div>

                            <button disabled = {isInWishlist}
                                onClick={()=> handleWishList(product)} className={`p-3 border-2 shadow-xl rounded-full hover:cursor-pointer ${isInWishlist ? 'opacity-50' : ""}`} >
                                <FaRegHeart size={25}></FaRegHeart>
                            </button>

                        </div>
        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;