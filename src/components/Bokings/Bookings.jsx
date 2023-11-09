import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContextProvider } from "../context/MyContex";
import { useState } from "react";
import Table from "./Table";

const Bookings = () => {
const {user}=useContext(MyContextProvider)
const [bookings, setBookings]= useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res=>setBookings(res.data))
    },[user])
console.log(bookings);
    return (
        <div>
            {
                bookings.map(products=><Table key={products?._id} products={products}></Table>)
            }

        </div>
    );
};

export default Bookings;