import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as Products from "../service/product";

export const useProduct = () => {
  const queryClient = useQueryClient();

  const getProduct = useQuery({
    queryKey: ["product"],
    queryFn: Products.getProducts,
  });

  const createProduct = useMutation({
    mutationFn: Products.createProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
  const deleteProduct = useMutation({
    mutationFn: Products.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
  const updateProduct = useMutation({
    mutationFn: Products.updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  return { getProduct, createProduct, deleteProduct, updateProduct };
};
