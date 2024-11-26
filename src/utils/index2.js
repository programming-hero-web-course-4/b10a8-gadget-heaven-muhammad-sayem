import toast from "react-hot-toast";

// Get all coffees from local storage //
const getAllWishedProducts = () => {
    const all = localStorage.getItem('addedWishedProducts');
    
    if(all){
        const wishedProducts = JSON.parse(all);
        return wishedProducts;
    }
    else{
        return [];
    }
}


// Add a product to the local storage //

const addWishProduct = (product) => {
    const wishedProducts = getAllWishedProducts();
    const isExist = wishedProducts.find(item => item.product_id === product.product_id);
    if(isExist){
        return toast.error(`${product.product_title} already exists!!`);
    }
    // console.log(wishedProducts);
    wishedProducts.push(product);
    localStorage.setItem('addedWishedProducts', JSON.stringify(wishedProducts));
    toast.success(`${product.product_title} added to wishlist successfully!!`);
}


// Remove a product from local storage //

const removeWishlistedProduct = (id) => {
    const wishedProducts = getAllWishedProducts();
    const remaining = wishedProducts.filter(product => product.product_id !== id);

    localStorage.setItem('addedWishedProducts', JSON.stringify(remaining));
    toast.success(`Successfully Removed!!`);
}


export {addWishProduct, getAllWishedProducts, removeWishlistedProduct}