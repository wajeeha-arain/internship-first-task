import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='h-[310px] w-[100%]  bg-stone-100 mt-20'>
                <ul className='flex items-center justify-center gap-4 pt-20'>
                    <il>Home</il>
                    <il className='pl-10 pr-10' >About us</il>
                    <il className='pl-40 pr-40 text-orange-500'> <i>logo</i> </il>
                    <il className='pl-10 pr-10'>Service</il>
                    <il>Bolgs</il>
                </ul>
                <hr className='mt-10 ml-40 mr-40 '  />
                
                <div className='flex items-start justify-center mt-10 gap-7'>
                <BsFacebook  style={{fontSize:"25px"}} />
                <AiFillTwitterCircle style={{fontSize:"25px"}}/>
                <FaCameraRetro style={{fontSize:"25px"}} />
                <IoLogoYoutube style={{fontSize:"25px"}} />
                <FaPinterest style={{fontSize:"25px"}}/>
                </div>
                <div className=' text-[15px] pt-10 pb-10 flex justify-center items-center '>
                ⓒ 2010-2020 <p className='pl-4'>  Privacy-Trems</p>

                </div>

            </div>
        </div>
    )
}

export default Footer
