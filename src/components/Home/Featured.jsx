import { Link } from "react-router-dom";


const Featured = () => {
    return (
        <div className="my-28 max-w-[1480px] mx-auto px-[40px] relative ">
            <div>
                <img src="https://i.ibb.co/BCgtcXH/royal-sup.jpg" alt="" className="" />
            </div>
            <div className="max-w-[600px] bg-green-800 absolute top-[30px] px-10 right-24 flex flex-col items-center">
            <h2 className="text-center pt-10 mb-7 text-5xl leading-[50px] text-white font-script ">Rooms & Suites</h2>
            <p className="pb-10 text-white">The best five star resort in the Sylhet region of Bangladesh. Equipped with all modern state of the art amenities and facilities, located in Sylhet (the tea capital of Bangladesh), around four hours drive from Dhaka. This resort is the true combination of ultimate luxury, gracious hospitality and admirable greenery. Classified in 08 categories with 135 hotel rooms and suites Helton welcomes you in Sylhet to enjoy your holiday or vacation with comfort and luxury.</p>
            <Link to="/rooms" ><button className="w-[112px] h-[40px] bg-green-500 text-white mb-10 ">More</button></Link>
            </div>
        </div>
    );
};

export default Featured;