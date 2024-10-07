import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='bg-[#fff] h-[100px] text-black flex justify-between items-center pl-[60px]'>
        {/* <div>logo</div> */}
        <div><img src='data:image/png;base64,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' height={"40px"} width={"120px"}/></div>
        <div>
          <ul className='flex gap-4 pt-1'>
            <il>Home</il>
            <il>About us</il>
            <il>Service</il>
            <il>Bolgs</il>
          </ul>
        </div>
        <div>
          <button className='border-2 border-amber-500 hover:bg-amber-500 text-amber-500 hover:text-white rounded-[3px] h-[40px] w-[120px] mr-6'>GIFT FINDER</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
