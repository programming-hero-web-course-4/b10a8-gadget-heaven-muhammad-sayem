import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const allData = useLoaderData();

    return (
        <div className="">
            <Helmet>
                <title> Statistics </title>
            </Helmet>
            <div className='bg-[#9538E2] text-center pt-12 text-white'>
                <h2 className="text-4xl font-bold mb-6"> Statistics </h2>
                <p className="text-md px-96 text-thin pb-12 mb-8"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>
            </div>

            <div className='w-10/12 mx-auto shadow-2xl rounded-2xl mb-8 py-12'>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <BarChart width={1240} height={450} data={allData} className='mx-auto'>
                        <Bar dataKey="price" fill="#1da5a5"> </Bar>
                        <XAxis dataKey='product_title'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                {/* </ResponsiveContainer> */}
            </div>

        </div>
    );
};

export default Statistics;