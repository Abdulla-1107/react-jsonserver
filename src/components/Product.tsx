import { Button } from "antd";
import { useProduct } from "../api/features/hooks/useProduct";
import { useState } from "react";
import AddProductModal from "./ProductModal";
import { Card } from "./Card";

const Product = () => {
  const { getProduct, createProduct } = useProduct();
  const { data } = getProduct;
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleCreateProduct = (values: any) => {
    console.log("product", values);
    const price = Number(values.price);
    createProduct.mutate({ ...values, price });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Button onClick={() => setOpen(true)} type="primary">
          Add product
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.data.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <AddProductModal
        open={open}
        setOpen={setOpen}
        onCreate={handleCreateProduct}
      />
    </div>
  );
};

export default Product;
