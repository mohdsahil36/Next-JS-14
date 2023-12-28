"use client";

export default function ErrorBoundary({error, reset}:{error:Error; reset:()=>void}){
    // const tryAgainHandler=()=>{

    // }
    return (
    <div>
        {error.message}
        <button onClick={reset}>Try again</button>
    </div>  
    )
}