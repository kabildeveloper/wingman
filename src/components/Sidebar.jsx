import { ChatTeardrop, UsersFour, House } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <aside className='w-fit px-[14px] min-w-[60px] bg-[#115E56] max-w-[60px]'>
      <img alt='Wingman' src='/wingmanLogo.png' className='w-full mt-6'/>
      <div className='border-[#134E48] border-b my-9'/>

      <div className='flex w-full items-center flex-col gap-8'>
        <div className='bg-white p-[10px] rounded-lg cursor-pointer'>
          <House width={20} height={20} weight="fill" color="#115E56"/>
        </div>
        <div className='bg-transparent hover:bg-white text-[#CCFBEF] hover:hover:text-[#115E56] p-[10px] rounded-lg cursor-pointer transition-all duration-300'>
          <ChatTeardrop width={20} height={20} weight="fill" className='text-inherit' />
        </div>
        <div className='bg-transparent hover:bg-white text-[#CCFBEF] hover:hover:text-[#115E56] p-[10px] rounded-lg cursor-pointer transition-all duration-300'>
          <UsersFour width={20} height={20} weight="fill" className='text-inherit'/>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;