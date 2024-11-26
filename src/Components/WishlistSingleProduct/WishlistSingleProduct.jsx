import { TiDeleteOutline } from "react-icons/ti";

const WishlistSingleProduct = ({ product, handleRemove }) => {
    const { product_id, product_title, product_image, description, price  } = product;
    return (
        <div>
            <div className="flex items-center gap-x-6 p-5 rounded-xl shadow-xl">
                <div className="w-1/4">
                    <img className="h-[250px] w-full" src={product_image} alt="Product Image" />
                </div>

                <div className="w-3/4">
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-bold mb-4"> {product_title} </h3>
                        <div onClick={()=> handleRemove(product_id)} className="hover:cursor-pointer">
                            <TiDeleteOutline size={40} color="red"></TiDeleteOutline>
                        </div>
                    </div>
                    <p className="text-md text-gray-500 mb-4"> {description} </p>
                    <h4 className="text-xl font-bold"> Price: ${price} </h4>
                </div>


            </div>

        </div>
    );
};

export default WishlistSingleProduct;