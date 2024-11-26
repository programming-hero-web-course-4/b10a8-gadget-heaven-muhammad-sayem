const Footer = () => {
    return (
        <div className="shadow-2xl border-t-2 mt-36 pt-16">
            <div className="w-10/12 mx-auto">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4"> Gadget Heaven </h3>
                    <p className="text-lg text-gray-500 mb-5"> Leading the way in cutting-edge technology and innovation. </p>
                    <hr className="mb-4" />
                </div>

                <footer className="footer">
                    <nav className="mx-auto">
                        <h5 className="text-lg font-bold">Services</h5>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </nav>
                    <nav className="mx-auto">
                        <h5 className="text-lg font-bold">Company</h5>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className="mx-auto">
                        <h5 className="text-lg font-bold">Legal</h5>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>

    );
};

export default Footer;