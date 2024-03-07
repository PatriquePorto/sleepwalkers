'use client'
import { useCartStore } from "../store"
import CartDrawer from "./CartDrawer"
export default function Cart() {
    const useStore = useCartStore()
    return (
        <>
        <div 
           onClick={() => useStore.toggleCart()}
           className='flex items-center cursor-pointer relative'
           >
                
            <svg 
                width="30px" 
                height="30px" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
            <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}

            d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z" fill="#fff"/>
        </svg>
      <span
            className='
            bg-teal-600
            text-sm
            font-bold
            rounded-full
            h-5 w-5
            flex items-center justify-center
            absolute
            left-4
            bottom-4
          '
      >
        {useStore.cart?.length}
      </span>
   </div>
    {useStore.isOpen && <CartDrawer />} 
   </>
  )
}