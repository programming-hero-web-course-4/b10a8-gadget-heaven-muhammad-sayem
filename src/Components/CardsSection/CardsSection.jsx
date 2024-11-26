import { NavLink } from "react-router-dom";

const CardsSection = ({ categories }) => {

    return (
        <div>
            <div className="">
                <div className="p-10 shadow-2xl rounded-xl">
                    <div className=" flex flex-col">
                        <NavLink to='/' className={({isActive}) => 
                                        `px-5 py-3 mb-6 text-center rounded-full font-bold bg-[#F2F2F3] hover:bg-[#9538E2] hover:text-white ${isActive ? 'bg-purple-600 text-white' : ""}`
                        }> All </NavLink>
                        {
                            categories.map(category => (
                                <NavLink
                                    key={category.category}
                                    to={`category/${category.category}`}
                                    className={({isActive}) => 
                                        `px-5 py-3 mb-6 text-center rounded-full font-bold bg-[#F2F2F3] hover:bg-[#9538E2] hover:text-white ${isActive ? 'bg-purple-600 text-white' : ""}`
                                    }
                                > {category.category} </NavLink>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardsSection;