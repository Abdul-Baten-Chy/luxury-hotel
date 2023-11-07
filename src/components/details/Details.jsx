import { useLoaderData } from "react-router-dom";
import Header from "../Home/Header";

const Details = () => {
  const room = useLoaderData();
  const { _id, price, size, maxGuests, description, roomTitle, image } = room;
  return (
    <div className="max-w-[1480px] mx-auto px-[40px]">
      <Header></Header>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-36 max-w-[1480px] mx-auto  mb-20">
        <figure>
          <img
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-script text-4xl">{roomTitle}</h2>
          <p className="max-w-[500px] mt-16 pt-8 border-t-2 text-justify">{description}</p>
          <div className="card-actions justify-center">
          <button className="w-[112px] h-[40px] text-center bg-green-500 text-white mb-10 ">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full bg-gray-200 mt-[150px]">
            <div className="max-w-3xl mx-auto ">
            <h2 className="text-center pt-10 mb-7 text-5xl leading-[60px] font-script ">FACTS & FIGURES</h2>
            <img src="https://i.ibb.co/0rR6d41/line.png" alt="" className="block mx-auto mb-10" />
            <div className="flex gap-10 justify-center my-10">
            <p className="font-script text-5xl border-r-4 pr-10 text-center">
              {size} <br />
              <span className="text-2xl text-center font-sans text-gray-300">
                SIZE SQF
              </span>
            </p>
            <p className="font-script text-5xl text-center">
              {maxGuests} <br />
              <span className="text-2xl font-sans text-center text-gray-300">
                MAX GUESTS
              </span>
            </p>
          </div>
            </div>
        </div>
    </div>
  );
};

export default Details;
