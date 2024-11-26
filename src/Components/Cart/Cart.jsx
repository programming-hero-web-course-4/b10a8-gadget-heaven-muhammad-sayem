import { useEffect, useState } from "react";
import { getAllAddedProducts, removeAll, removeProduct } from "../../utils";
import { ImSortAmountDesc } from "react-icons/im";
import CartSingleProduct from "../CartSingleProduct/CartSingleProduct";
import modalImage from "../../assets/Group.png"
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const addedProducts = getAllAddedProducts();
        setProducts(addedProducts);
    }, []);

    const [price, setPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        products.map(product => totalPrice += product.price);
        setPrice(totalPrice);
    }, [products])

    const handleSort = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProducts(sorted)
        // console.log('clicked');
    }

    const handleRemove = (id) => {
        removeProduct(id);
        const addedProducts = getAllAddedProducts();
        setProducts(addedProducts);
    }
    const [isDisabled, setIsDisabled] = useState(false);

    const handlePurchase = () => {
        setFinalPrice(price);
        setTimeout(()=>{
            removeAll();
            setProducts([]);
            setIsDisabled(true);
        }, 0)
    }
    const handleNavigate = () => {
        navigate('/');
    }

    
    

    return (
        <div className="w-10/12 mx-auto my-12">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-bold"> Cart </h3>
                </div>

                <div className="flex gap-x-3 items-center">
                    <h3 className="text-2xl font-bold"> Total Cost: {price.toFixed(2)} </h3>
                    <div onClick={handleSort} className="flex items-center gap-x-2 text-[#993BE0] border-2 border-[#993BE0] px-6 py-3 rounded-full hover:bg-[#993BE0] hover:cursor-pointer hover:text-white font-bold">
                        <button> Sort by price </button>
                        <ImSortAmountDesc></ImSortAmountDesc>
                    </div>

                    <div onClick={() => document.getElementById('my_modal_1').showModal()}>
                        <button onClick={handlePurchase} 
                            disabled = {isDisabled}
                            className={`px-6 py-3 rounded-full text-white font-bold bg-[#993BE0] hover:border-2 border-[#993BE0] ${price === 0 ? "opacity-40" : ""}`}>
                            Purchase
                        </button>

                        <dialog id="my_modal_1" className="modal text-center">
                            <div className="modal-box">
                                <div className="flex justify-center mb-12"> 
                                    <img className="w-[90px] h-[80px]" src={modalImage} alt="" />
                                </div>
                                <h3 className="font-bold text-3xl mb-4"> Payment Successfully </h3>
                                <hr className="mb-8" />
                                <p className="py-4 text-xl text-gray-500">Thanks for Purchasing.</p>
                                <p className="py-4 text-xl text-gray-500">Total: ${finalPrice.toFixed(2)} </p>
                                <div className="modal-action flex items-center justify-center">
                                    <form method="dialog" className="w-full">
                                        <button onClick={handleNavigate} className="btn w-full rounded-full text-xl font-bold">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>

                </div>
            </div>

            <div className="space-y-5">
                {
                    products.map(product => <CartSingleProduct
                        key={product.product_id}
                        product={product}
                        handleRemove={handleRemove}
                    ></CartSingleProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;