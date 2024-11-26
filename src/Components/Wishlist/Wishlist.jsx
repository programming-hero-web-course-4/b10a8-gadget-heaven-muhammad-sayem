import { useEffect, useState } from "react";
import { getAllWishedProducts, removeWishlistedProduct } from "../../utils/index2";
import WishlistSingleProduct from "../WishlistSingleProduct/WishlistSingleProduct";
const Wishlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const addedProducts = getAllWishedProducts();
        setProducts(addedProducts);
    }, []);

    const handleRemove = (id) => {
        removeWishlistedProduct(id);
        const addedProducts = getAllWishedProducts();
        setProducts(addedProducts);
    }


    return (
        <div>
            <div className="w-10/12 mx-auto my-12">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-2xl font-bold"> Wishlist </h3>
                    </div>
                </div>

                <div className="space-y-5">
                    {
                        products.map(product => <WishlistSingleProduct
                            key={product.product_id}
                            product={product}
                            handleRemove={handleRemove}
                        ></WishlistSingleProduct>)
                    }
                </div>
                
                
            </div>

        </div>
    );
};

export default Wishlist;