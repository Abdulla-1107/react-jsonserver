import { api } from "../..";

export const getProducts = () => api.get("/product");
export const createProducts = (body: any) => api.post("/product", body);
export const deleteProduct = (id: string) => api.delete(`/product/${id}`);
