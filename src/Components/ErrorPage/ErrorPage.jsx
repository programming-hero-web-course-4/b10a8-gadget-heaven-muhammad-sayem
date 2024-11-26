import errorImage from "../../assets/errorpage.jpeg"

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-red-500 text-center font-bold mt-8"> 404 Not Found </h2>
            <div className="w-10/12 flex justify-center mx-auto mt-12">
                <img className="h-[350px] w-2/3" src={errorImage} alt="" />
            </div>
            <h2 className="text-5xl text-red-500 text-center font-bold mt-8"> Try again later with a valid URL </h2>
        </div>
    );
};

export default ErrorPage;