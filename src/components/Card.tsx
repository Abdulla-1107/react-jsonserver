import { useState } from "react";
import { useProduct } from "../api/features/hooks/useProduct";
import card from "../assets/car.jpg";
import AddProductModal from "./ProductModal";

export const Card = ({ item }: { item: any }) => {
  const { deleteProduct, updateProduct } = useProduct();
  const [open, setOpen] = useState(false);

  const handleDelete = (id: string) => {
    deleteProduct.mutate(id);
  };

  const handleUpdateProduct = (values: any) => {
    const price = Number(values.price);
    const body = { ...values, price };

    updateProduct.mutate({ id: item.id, body });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col justify-between">
      <img
        src={card}
        alt={item.title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5 flex flex-col gap-2 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 truncate">
          {item.title}
        </h2>
        <p className="text-sm text-gray-500">Color: {item.color}</p>
        <p className="text-lg text-green-600 font-semibold">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="p-5 pt-0 flex justify-between items-center">
        <button
          type="button"
          onClick={() => handleDelete(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
        >
          Delete
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
        >
          Update
        </button>
      </div>
      <AddProductModal
        open={open}
        setOpen={setOpen}
        onCreate={handleUpdateProduct}
        initialValues={item}
      />
    </div>
  );
};
