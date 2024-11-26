import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { product_id, product_title, product_image, price } = card;
    return (
        <div className="card bg-base-100 shadow-xl space-4">
            <figure className="px-10 pt-10">
                <img src={product_image} alt="Product Image" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl"> {product_title} </h2>
                <p className="text-lg text-gray-500 font-bold"> Price: ${price} </p>
                <div className="card-actions">
                    <Link to={`/product/${product_id}`} className="btn btn-outline border-[#9538E2] text-[#9538E2] text-md font-bold rounded-full"> View Details </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;