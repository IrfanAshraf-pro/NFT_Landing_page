import React from 'react'
import Monkey1 from "../../../assests/monkey1.png";
import Monkey2 from "../../../assests/monkey2.png";
import Monkey3 from "../../../assests/monkey3.png";
import Monkey4 from "../../../assests/monkey4.png";
import Monkey5 from "../../../assests/monkey5.png";

const MonkeyCard = () => {
  return (
    <>
        <img src={Monkey1} className='monkey monkey__1'/>
        <img src={Monkey2} className='monkey monkey__2'/>
        <img src={Monkey3} className='monkey monkey__3'/>
        <img src={Monkey4} className='monkey monkey__4'/>
        <img src={Monkey5} className='monkey monkey__5'/>
    </>
  )
}

export default MonkeyCard