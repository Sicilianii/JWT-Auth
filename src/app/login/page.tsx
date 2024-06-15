import React from 'react';
import {mulish} from "@/app/fonts";


function Page() {
    return (
        <form action="" className={`${mulish.className} w-fit h-fit flex flex-col items-center justify-center bg-[#E0E5EC] p-[40px] rounded-2xl gap-[20px] shadow-form`}>
            <span className={'text-[#4d5a63] font-semibold text-lg'}>Welcome</span>
            <input type="email" name="email" placeholder="Email"
            className={`box-border px-[20px] py-[10px] rounded-2xl w-full text-[#86959c] shadow-inpt`}/>
            <input type="password" name="password" placeholder="Password"
                   className={`box-border px-[20px] py-[10px] rounded-2xl w-full text-[#86959c] shadow-inpt`}/>
            <button type="submit" className={'bg-[#9673d1] rounded-2xl py-[10px] px-[20px] text-[#fce2ff] shadow-btn'}>Sing In</button>
        </form>
    );
}

export default Page;