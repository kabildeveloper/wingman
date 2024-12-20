import Link from "next/link";
import {ChartPieSlice, Tag, ChatTeardropText} from "@phosphor-icons/react";

const NavBar = () => {


  return (
    <nav className='py-6 border-b border-[#DCDFE4]'>
      <span className='flex items-center gap-3 px-6 mx-auto w-full'>
        <span className='flex items-center text-h6 bg-success-light p-3 rounded-full'>
          <ChartPieSlice className="mr-2" weight="fill"/> Summary
        </span>
        <span className='flex items-center rounded-full text-h6 hover:bg-success-light hover:text-[#171717] text-[#8A94A6] p-3'>
          <Tag className="mr-2" weight="fill"/> Sales
        </span>
        <span className='flex items-center rounded-full text-h6 hover:bg-success-light hover:text-[#171717] text-[#8A94A6] p-3'>
          <ChatTeardropText className="mr-2" weight="fill"/> Chats
        </span>
      </span>

    </nav>
  )
}

export default NavBar;
