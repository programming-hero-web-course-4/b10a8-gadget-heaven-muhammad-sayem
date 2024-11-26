import privacyImage from "../assets/praivacy policy.jpg";
import { AiOutlineSafety } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcAmex, FaGooglePay, FaCcDiscover } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const privacyPolicy = () => {
    
    return (
        <div>
            <Helmet>
                <title> Privacy Policy </title>
            </Helmet>
            <div className="text-white text-center bg-[#9538E2] mb-12 pt-12">
                <h2 className="text-4xl font-bold mb-6"> Privacy Policy </h2>
                <p className="text-md pb-12 font-thin"> We are always strict about our privacy policy and the privacy of our reputated Customers. </p>
            </div>

            <div className="w-10/12 flex items-center gap-x-6 mx-auto mb-12">
                <div className="w-1/2">
                    <ul className="list-disc list-inside">
                        <li className="mb-4 shadow-2xl p-6 rounded-2xl  text-lg font-semibold"> We collect personal details (name, email, payment info) for processing orders and improving your experience. </li>

                        <li className="mb-4 shadow-2xl p-6 rounded-2xl  text-lg font-semibold"> Your data is used to process orders, send updates, and personalize services. </li>

                        <li className="mb-4 shadow-2xl p-6 rounded-2xl  text-lg font-semibold"> We do not sell your data. We share it only with trusted service providers like payment processors. </li>

                        <li className="mb-4 shadow-2xl p-6 rounded-2xl  text-lg font-semibold"> Our site uses cookies to improve user experience. You can disable them in your browser. </li>

                        <li className="mb-4 shadow-2xl p-6 rounded-2xl  text-lg font-semibold"> You can access, update, or delete your personal data anytime by contacting us. </li>

                        <li className="mb-4 shadow-2xl p-6 rounded-2xl  text-lg font-semibold"> We are not responsible for the privacy practices of external websites linked on our site. </li>

                    </ul>
                </div>

                <div className="w-1/2">
                    <img className="rounded-2xl" src={privacyImage} alt="" />
                </div>


            </div>

            <div className="w-10/12 mx-auto flex items-center gap-x-8 mb-32">
                <div className="w-1/2">
                    <h3 className="text-2xl font-bold mb-6"> Liabilities </h3>
                    <hr className="mb-4" />
                    <ul className="list-disc list-inside">
                        <li> We provide warranties as per the manufacturer’s terms. We are not liable for any damages or issues arising after the warranty period or due to unauthorized repairs. </li>

                        <li> While we strive for accurate descriptions, pricing, and availability, we cannot guarantee that all information is error-free. We reserve the right to correct errors or cancel orders if necessary. </li>
                    </ul>
                </div>

                <div className="w-1/2">
                    <div className="flex gap-x-3 items-center p-4 border-2 mb-4 rounded-2xl ">
                        <AiOutlineSafety size={45}></AiOutlineSafety>
                        <h3 className="text-2xl font-bold"> Secure Payment </h3>
                    </div>

                    <div className="flex gap-x-3 items-center p-4 border-2 mb-4 rounded-2xl ">
                        <BsWallet2 size={45}></BsWallet2>
                        <h3 className="text-2xl font-bold"> Money Back </h3>
                    </div>

                    <div className="flex gap-x-3 items-center p-4 border-2 mb-4 rounded-2xl ">
                        <FaRegEyeSlash size={45}></FaRegEyeSlash>
                        <h3 className="text-2xl font-bold"> No Hidden Charge </h3>
                    </div>

                    <div className="flex gap-x-3 items-center p-4 border-2 mb-4 rounded-2xl ">
                        <RiCustomerServiceFill size={45}></RiCustomerServiceFill>
                        <h3 className="text-2xl font-bold"> Premium Customer Servive </h3>
                    </div>

                    <div className="flex gap-x-3 items-center p-4 border-2 mb-4 rounded-2xl ">
                        <VscGraphLine size={45}></VscGraphLine>
                        <h3 className="text-2xl font-bold"> Market Purpose </h3>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto">
                <div className="mb-12"> 
                    <h3 className="text-4xl text-center font-bold underline"> Payment Methods </h3>
                </div>

                <div className="grid grid-cols-3 gap-y-8 gap-x-8">
                    <div className="flex flex-col items-center shadow-xl py-16 rounded-2xl border-2">
                        <FaCcVisa size={45}></FaCcVisa>
                        <h4 className="text-xl font-bold mt-6"> Visa Payment </h4>
                    </div>

                    <div className="flex flex-col items-center shadow-xl py-16 rounded-2xl border-2">
                        <FaCcPaypal size={45}></FaCcPaypal>
                        <h4 className="text-xl font-bold mt-6"> Paypal Payment </h4>
                    </div>

                    <div className="flex flex-col items-center shadow-xl py-16 rounded-2xl border-2">
                        <FaCcMastercard size={45}></FaCcMastercard>
                        <h4 className="text-xl font-bold mt-6"> Mastercard Payment </h4>
                    </div>

                    <div className="flex flex-col items-center shadow-xl py-16 rounded-2xl border-2">
                        <FaCcAmex size={45}></FaCcAmex>
                        <h4 className="text-xl font-bold mt-6"> Express Payment </h4>
                    </div>

                    <div className="flex flex-col items-center shadow-xl py-16 rounded-2xl border-2">
                        <FaGooglePay size={45}></FaGooglePay>
                        <h4 className="text-xl font-bold mt-6"> Google Payment </h4>
                    </div>

                    <div className="flex flex-col items-center shadow-xl py-16 rounded-2xl border-2">
                        <FaCcDiscover size={45}></FaCcDiscover>
                        <h4 className="text-xl font-bold mt-6"> Discover Payment </h4>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default privacyPolicy;