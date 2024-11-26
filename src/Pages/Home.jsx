import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import CardsSection from '../Components/CardsSection/CardsSection';
import {Helmet} from "react-helmet";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Helmet>
                <title> Gadget Heavens </title>
            </Helmet>
            {/* Banner Part */}
            <Banner></Banner>

            {/* Cards Part */}
            <div className='w-10/12 mx-auto mb-16'>
                <h2 className="text-4xl font-bold text-center mb-8"> Explore Cutting-Edge Gadgets </h2>
                <div className='flex gap-x-6'>
                    <div className='w-1/5'>
                        <CardsSection categories={categories}></CardsSection>
                    </div>
                    <div className='w-4/5'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;