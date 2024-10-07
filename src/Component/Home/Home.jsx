import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdArrowDropright } from "react-icons/io";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex h-[480px]  bg-stone-100 '>
       
          <div className='mt-20 ml-40 mr-60'>
          <p className='text-[39px] font-semibold '>Find a gift for</p>
              <p className='text-[39px] font-semibold leading-[30px]'>your wife or</p>
              <p className='text-[39px] font-semibold leading-0'> girlfriend</p>
            <p className='pt-6'>Struggling to find a gift for  wife or girlfriend ? No problem! </p>
            <div>
            <button className=' bg-amber-500 text-white  rounded-[4px] h-[40px] text-[13px] w-[140px]  mr-3 mt-9'>FIND GIFT NOW</button>
          </div>
          </div>
       
         <div> <img  src='https://cdn2.momjunction.com/wp-content/uploads/2022/10/Things-to-say-to-your-girlfriend.jpg.webp' height={"970px"} width={"1050px"} />
         </div>
      </div>
      <div className='flex h-[480px]  bg-stone-100 mt-[-28px] '>
      <div> <img  src='https://i.etsystatic.com/10252263/r/il/a42646/2405315704/il_570xN.2405315704_qlaw.jpg' height={"970px"} width={"670px"} />
      </div>
          <div className='mt-20 ml-40 mr-40 mb-60'>
          <p className='text-[39px] font-semibold '>How we work</p>
             
            <p className='pt-6'>We've actually already asked hundrad of women <br/>
                
             what they want, and made a database with the <br/> result  . all you have to do is take our short survey<br/>
                
              that only takes seconds, and  our propritary <br/> algorithm,  will match you with  a few prefect  <br/> gift option.  </p>
            <div>
            <button className='border-2 border-amber-500 text-amber-500 text-[13px] rounded-[4px] h-[40px] w-[140px] mr-3 mt-9 hover:bg-amber-500 hover:text-white'>LEARN MORE</button>
          </div>
          </div>
       
         {/* <div> <img  src='https://cdn2.momjunction.com/wp-content/uploads/2022/10/Things-to-say-to-your-girlfriend.jpg.webp' height={"770px"} />
         </div> */}
      </div>

      {/* 2nd */}
      <div className='h-[600px] w-[100%] mb-20'>
        <div className='pt-20 text-center'>
          <h1 className='text-3xl font-bold'>Gift for all Occasions</h1>
          <p className='pt-4 text-1xl'>"By our web app to free the best gift for all occasions."</p>
        </div>
 
        <div className='flex items-center justify-center gap-3 mt-20'>
        <Card style={{ width: '18rem', border:'none',boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px"}}>
      <Card.Img variant="top" src="https://cdn.happybirthdaywisher.com/images/birthday-wishes-for-best-friend.jpg"   />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text className='ml-3 font-bold'>
        Birthday
        </Card.Text>
        <Button variant="primary"  className='flex mt-8 text-black bg-white border-white'  >See more<IoMdArrowDropright className='mt-[6px]'/></Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem', border:'none',boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px" }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61VRL+cF3EL._AC_UF1000,1000_QL80_.jpg" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text className='ml-3 font-bold'>
        Anniversary
        </Card.Text>
        <Button variant="primary"  className='flex mt-8 text-black bg-white border-white'  >See more<IoMdArrowDropright className='mt-[6px]'/></Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem', border:'none',boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px" }}>
      <Card.Img variant="top" src="https://i.etsystatic.com/8544411/r/il/ae103a/3686503415/il_570xN.3686503415_grj4.jpg" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text className='ml-3 font-bold'>
        Valentine's Day
        </Card.Text>
        <Button variant="primary"  className='flex mt-8 text-black bg-white border-white'  >See more<IoMdArrowDropright className='mt-[6px]'/></Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem', border:'none',boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px" }}>
      <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-88449081,width-400,resizemode-4/88449081.jpg" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text className='ml-3 font-bold'>
        Christmas 
        </Card.Text>
        <Button variant="primary"  className='flex mt-8 text-black bg-white border-white'  >See more<IoMdArrowDropright className='mt-[6px]'/></Button>
      </Card.Body>
    </Card>
    </div>
      </div>

      {/* 3rd */}
      <div className='bg-amber-600 h-[200px] w-[100%] flex justify-around items-center'>
        <div className='pl-20'>
          <h1 className='pt-2 text-3xl font-bold'>Ready to get sterted ?</h1>
          <p className='text-3xl leading-2'> Sign up or Contact us</p>
        </div>
        <div className='flex mr-[-20]'>
          <div>
            <button className=' bg-black text-white rounded-2 h-[40px] w-[190px] mr-3 hover:bg-white hover:border-2 hover:border-black'>FIND GIFT NOW</button>
          </div>
          <div>
            <button className='border-2 border-black rounded-2 h-[40px] w-[190px] mr-6 hover:bg-black hover:text-white '>HOW IT WORKS</button>
          </div>
        </div>
      </div>
{/* 4th */}

<div>
        <div className='pt-20 text-center'>
          <h1 className='text-3xl font-bold'>Our Best Bolgs Ever</h1>
          <p className='pt-4 text-1xl'>"Try our bolgs to free the best tips and tricks to salect your gift."</p>
        </div>
        <div>
          <div className=' h-[290px] w-[1000px] ml-40 mt-16 flex bg-[#0a0703] text-white '>
            <img src='https://cdn.shopify.com/s/files/1/0300/7401/files/Kennedy-Blue-Wedding-Getting-Ready_2_600x600.jpg?v=1698346030' height={"300px"} width={"383px"} />
             <div className='mt-10 ml-20'>
             <p>Mr. John Doe</p>
             <h2 className='text-[37px] font-semibold  pt-4' > The best way to wish <br/> your wife</h2>
             <p className='pt-[60px]'>Read More</p>
             </div>
          </div>
        </div>
           
    </div>
            {/* 5th */}
            <div className='flex items-center mt-10 ml-40 mr-40 '>
          <div className='border-black  h-[230px] w-[450px] ml-8' style={{boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px"}}>
            <p className='pt-4 pl-6 font-extrabold text-1xl leading-2 pr-7 '>Database to find the gift for your <br /> girlfriend</p>
            <p className='pt-3 pl-6 text-[14px] leading-2 pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Quaerat vel similique dolorem alias ab modi consequuntur....</p>
            <p className='pt-6 pl-6 text-[15px]'>See more</p>
          </div>
          <div className='border-black  h-[230px] w-[450px] ml-9' style={{boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px"}}>
            <p className='pt-4 pl-6 font-extrabold text-1xl leading-2 pr-7'>How  Artifical  Intelligance read your mind<br />to find the best gift  </p>
            <p className='pt-3 pl-6 text-[14px] leading-2 pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Quaerat vel similique dolorem alias ab modi consequuntur....</p>
            <p className='pt-6 pl-6 text-[15px]'>See more</p>
          </div>
        </div>
       
      






      <Footer/>
    </div>
  )
}

export default Home
