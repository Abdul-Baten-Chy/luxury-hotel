import { useLoaderData } from "react-router-dom";
import Header from "../Home/Header";
import RoomWellcome from "./RoomWellcome";
import Rooms from "./Rooms";


const RoomsContainer = () => {

        const rooms = useLoaderData();

    return (
        <div className="max-w-[1480px] mx-auto px-[40px]">
            <Header></Header>
            <RoomWellcome></RoomWellcome>
            {
                rooms.map(room=><Rooms key={room._id} room={room}></Rooms>)
            }
        </div>
    );
};

export default RoomsContainer;