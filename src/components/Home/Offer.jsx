import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="my-28 max-w-[1480px] mx-auto px-[40px] relative ">
      <div className="flex">
        <div>
          <img
            src="https://i.ibb.co/2SXdZ4w/early-winter-package-small-2023.jpg"
            alt=""
          />
        </div>
        <div className="max-w-[600px]  px-10 right-24 flex flex-col justify-center">
          <h2 className="pt-10 mb-2 text-4xl leading-[50px] font-script text-black ">
            Early Winter Package
          </h2>
          <p className="mb-7">
            Valid from 1st November 2023 to 30th November 2023
          </p>
          <p className="pb-10 text-black text-justify">
            Treat yourself to a cozy warm escape at Tea Resort & Golf with the
            exclusive package starts from BDT. <strong>20,999</strong> NET for
            two persons/per night with KIDS STAY & MEAL FREE! This package
            includes delightful Buffet Lunch, Dinner, Breakfast, entertaining
            Movie show, Outdoor Sports & many more.
          </p>
          <Link to="/rooms">
            <button className="w-[112px] h-[40px] bg-green-500 text-white mb-10 ">More</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div>
          <img
            src="https://i.ibb.co/vYhrTT6/early-winter-special-deal-small-2023.jpg"
            alt=""
          />
        </div>
        <div className="max-w-[600px]  px-10 right-24 flex flex-col justify-center">
          <h2 className="pt-10 mb-2 text-4xl font-script leading-[50px] text-black ">
            Early Winter Special Deal!
          </h2>
          <p className="mb-7">
            Valid from 1st November 2023 to 30th November 2023
          </p>
          <p className="pb-10 text-black text-justify">
            Amazing Early Winter Special Deal starts from BDT.{" "}
            <strong>17,999</strong> NET for two Persons/per night with KIDS STAY
            & MEAL FREE! This offer includes Buffet Dinner, Breakfast, Movie
            Show, Outdoor Sports & many more.
          </p>
          <Link to="/rooms">
            <button className="w-[112px] h-[40px] bg-green-500 text-white mb-10 ">More</button>
          </Link>
        </div>
      </div>
      <div className="flex">
        <div>
          <img
            src="https://i.ibb.co/SyQKJXk/early-winter-offer-small-2023.jpg"
            alt=""
          />
        </div>
        <div className="max-w-[600px]  px-10 right-24 flex flex-col justify-center">
          <h2 className="pt-10 mb-2 font-script text-4xl leading-[50px] text-black ">
            Early Winter Offer
          </h2>
          <p className="mb-7">
            Valid from 1st November 2023 to 30th November 2023
          </p>
          <p className="pb-10 text-black text-justify">
            Enjoy up to 55% discount on room rack rates this Early Winter and
            have a vacation to remember at 𝐆𝐫𝐚𝐧𝐝 𝐒𝐮𝐥𝐭𝐚𝐧 𝐓𝐞𝐚 𝐑𝐞𝐬𝐨𝐫𝐭 & 𝐆𝐨𝐥𝐟. This
            Offer also Includes Buffet Breakfast, Movie Show, Outdoor Sports &
            many more.
          </p>
          <Link to="/rooms">
            <button className="w-[112px] h-[40px] bg-green-500 text-white mb-10 ">More</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div>
          <img
            src="https://i.ibb.co/s2yJsr1/grand-honeymoon-package-small-2023.jpg"
            alt=""
          />
        </div>
        <div className="max-w-[600px]  px-10 right-24 flex flex-col justify-center">
          <h2 className="pt-10 mb-2 font-script text-4xl leading-[50px] text-black ">
            Grand Honeymoon Package
          </h2>
          <p className="mb-7">
            Valid from 1st November 2023 to 30th November 2023
          </p>
          <p className="pb-10 text-black text-justify">
            Enjoy Grand Honeymoon Package @ BDT <strong>20,500</strong> NET per night for a
            couple. Package includes Candle Light/ Buffet Dinner, Honeymoon
            Cake, Movie Show & many more.
          </p>
          <Link to="/rooms">
            <button className="w-[112px] h-[40px] bg-green-500 text-white mb-10 ">More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
