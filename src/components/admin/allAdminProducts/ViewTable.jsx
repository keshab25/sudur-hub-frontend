import React, { useEffect } from "react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearError,
  deleteAdminProduct,
} from "../../../redux/features/adminSlice";
import { toast } from "react-toastify";

const ViewTable = ({ item }) => {
  const { loading, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteAdminProduct({ id, toast }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item.productName}
      </th>

      <td className="px-6 py-4">
        <img
          src={item?.productImg?.url}
          alt={item.productName}
          className="w-24 h-24 object-cover"
        />
      </td>
      <td className="px-6 py-4">{item.category}</td>
      <td className="px-6 py-4">{item.price}</td>
      <td className="px-6 py-4">{item.isInstock}</td>
      <td className="px-6 py-4">{item.manufacture}</td>
      <td className="px-6 py-4">{item.SKU}</td>
      <td className="px-6 py-4">{item.ratings}</td>
      <td className="px-6 py-4">
        <div className="flex space-x-2">
          <Link>
            <FaEye />
          </Link>
          <Link to="" className="font-medium text-yellow-600  hover:underline">
            <FaPencilAlt />
          </Link>
          <Link className="text-red-500" onClick={() => handleDelete(item._id)}>
            <FaTrash />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ViewTable;
