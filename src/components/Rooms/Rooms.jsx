import { Link } from "react-router-dom";

const Rooms = ({ room }) => {
  const { _id, price, size, maxGuests, roomTitle, image } = room;
//   const handleBookNow= (_id)=>{

//   }
  return (
    <div>
      <div className="flex gap-6">
        <div className="max-h-[600px]">
          <img
            src={image}
            alt=""
            className="block max-w-[700px] object-cover"
          />
        </div>
        <div className="max-w-[600px] max-h-[600px] px-10 right-24 flex flex-col justify-center items-center">
          <h2 className="pt-10 mb-2 text-5xl text-center leading-[50px] font-script text-black ">
            {roomTitle}
          </h2>
          <img src="https://i.ibb.co/0rR6d41/line.png" alt="" />
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
          <div className="flex justify-center mb-10">
            <p className="px-10 py-4 border-2  font-sans text-xl">Rack Rate</p>
            <p className="px-20 py-4 border-y-2 border-r-2 font-sans text-xl">
              BDT {price}/-
            </p>
          </div>
          <Link to={`/details/${_id}`} className="flex justify-center">
            <button className="w-[112px] h-[40px] text-center bg-green-500 text-white mb-10 ">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
