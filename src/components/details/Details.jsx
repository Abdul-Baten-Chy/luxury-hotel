import { useLoaderData } from "react-router-dom";
import Header from "../Home/Header";


const Details = () => {
  const room = useLoaderData();
 
  

  const { _id, price, size, maxGuests, description, roomTitle, image } = room;
  

  
  // const handleBookingSubmit=()=>{

  // }
  return (
    <div className="w-full">
      <Header></Header>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-36  max-w-[1480px] mx-auto px-[40px]  mb-20">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-script text-4xl">{roomTitle}</h2>
          <p className="max-w-[500px] mt-16 pt-8 border-t-2 text-justify">
            {description}
          </p>
         

          <div className="card-actions justify-center">
            <button
              className="w-[112px] h-[40px] text-center bg-green-500 text-white mb-10 "
              
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full max-w-[1480px] mx-auto px-[40px] bg-gray-200 mt-[80px]">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-center pt-10 mb-7 text-5xl leading-[60px] font-script ">
            Facts & Figures
          </h2>
          <img
            src="https://i.ibb.co/0rR6d41/line.png"
            alt=""
            className="block mx-auto mb-10"
          />
          <div className="flex gap-10 justify-center my-10 pb-10">
            <p className="font-script text-5xl border-r-2 border-yellow-500 pr-10 text-center">
              {size} <br />
              <span className="text-2xl text-center font-sans text-zinc-950">
                SIZE SQF
              </span>
            </p>
            <p className="font-script text-3xl border-r-2 border-yellow-500 leading-[50px] pr-10 text-center">
              Rack Rate <br />
              <span className="text-2xl text-center font-sans text-zinc-950 ">
                BDT {price}
              </span>
            </p>
            <p className="font-script text-5xl text-center">
              {maxGuests} <br />
              <span className="text-2xl font-sans text-center text-zinc-950">
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
