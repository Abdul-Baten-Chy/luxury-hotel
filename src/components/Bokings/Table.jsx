import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ products }) => {
  // const [bookings, setBookings]= useState([products])
  const { _id, user, userInfo, checkInDate, checkOutDate } = products;
  const { price, roomTitle } = userInfo;
  const [remaining, setRemaing] = useState([]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast("deleted successful");
          const remainingPro = products.filter(
            (product) => product._id !== _id
          );
          // setBookings(remaining);
          setRemaing(remainingPro);
        }
      });
  };

  return (
    <div className="overflow-x-auto mt-10">
      <h2 className="text-center text-3xl">User:{user}</h2>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Room Title</th>
            <th>price</th>
            <th>check In</th>
            <th>check Out</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{_id}</th>
            <td>{roomTitle}</td>
            <td>{price}</td>
            <td>{checkInDate}</td>
            <td>{checkOutDate}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
        <ToastContainer />
      </table>
    </div>
  );
};

export default Table;
