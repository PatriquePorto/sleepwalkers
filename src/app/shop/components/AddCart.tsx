'use client'

import { useCartStore } from "../store"
import { ProductType } from "../types/ProductType"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  const handleAddToCart = () => {
    addProduct(product);
    toast.success('Item adicionado no carrinho', {
      position: 'bottom-right'
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center hover:bg-teal-800"
    >
      Adicionar no Carrinho
    </button>
  );
}