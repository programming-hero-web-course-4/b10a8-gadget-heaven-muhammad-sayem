import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {
    const allCards = useLoaderData();
    const {category} = useParams();
    const {pathname} = useLocation();

    // const categories = ["/","Laptops", "Phones", "Speakers", "Headphones", "Accessories"];

    // if(!categories.includes(category)){
    //     // return <h1> Invalid Category </h1>
    //     throw new Error("Invalid category")
    // }


    const [cards, setCards] = useState([]);
    const [viewed, setViewed] = useState(false);
    useEffect(()=>{
        if(category){
            const filteredCards = allCards.filter(card => card.category === category);
            setCards(filteredCards);
        }
        else{
            setCards(allCards.slice(0,6));
        }
    }, [allCards, category]);

    const handleViewMore = () => {
        setViewed(true);
        setCards(allCards);
    }


    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-6">
                {
                    cards.map(card => <Card 
                        key={card.product_id}
                        card={card}
                    ></Card>)
                }
            </div>
            
            {
                pathname === '/' ?  <button disabled={viewed} onClick={handleViewMore} className="btn bg-[#9538E2] text-lg text-white font-bold"> View More </button> : ""
            }

            
        </div>
        
    );
};

export default Cards;