import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto bg-[#9538E2] relative mb-56 pt-16'>
            <div>
                <h2 className="text-5xl font-bold text-white text-center px-48 mb-6"> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h2>

                <p className='text-white text-center text-lg font-thin px-48 mb-8'> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>

                <Link to="/dashboard">
                    <div className='flex justify-center mb-8 pb-72'>
                        <button className='btn rounded-full text-lg font-bold text-[#9538E2]'> Shop Now </button>
                    </div>
                </Link>

                <div className="w-1/2 flex justify-center absolute top-96 left-[360px] bg-[#ffffff66] rounded-xl">
                    <img className="w-full h-[300px] p-2 rounded-2xl" src={bannerImage} alt="Banner Image" />
                </div>

                
            </div>
        </div>
    );
};

export default Banner;