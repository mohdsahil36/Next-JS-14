'use client';

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router=useRouter();
    const handleClick=()=>{
        alert('Placing your order!');
        router.push('/');
    }
    return (
        
        <>
            <h1 className="mt-2 ms-2">Order product</h1>
            <button onClick={handleClick} className="bg-black text-white p-2 mt-3 ms-2">Place order</button>
        </>
    )
}