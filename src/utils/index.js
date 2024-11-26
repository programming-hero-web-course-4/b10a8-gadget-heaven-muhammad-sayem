import toast from "react-hot-toast";

// Get all coffees from local storage //
const getAllAddedProducts = () => {
    const all = localStorage.getItem('addedProducts');
    
    if(all){
        const addedProducts = JSON.parse(all);
        return addedProducts;
    }
    else{
        return [];
    }
}

// Add a product to the local storage //

const addProduct = (product) => {
    const addedProducts = getAllAddedProducts();
    const isExist = addedProducts.find(item => item.product_id === product.product_id);
    if(isExist){
        return toast.error(`${product.product_title} already exists!!`);
    }
    // console.log(addedProducts);
    addedProducts.push(product);
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
    toast.success(`${product.product_title} has been added successfully to the cart!!`);
}


// Remove a product from local storage //

const removeProduct = (id) =>{
    const addedProducts = getAllAddedProducts();

    const remaining = addedProducts.filter(product => product.product_id !== id);

    localStorage.setItem('addedProducts', JSON.stringify(remaining));
    toast.success(`successfully removed!!`);
}

const removeAll = () => {
    localStorage.setItem('addedProducts', JSON.stringify([]));
}

export {addProduct, getAllAddedProducts, removeProduct, removeAll}