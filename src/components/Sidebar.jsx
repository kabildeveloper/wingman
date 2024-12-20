import { ChatTeardrop, UsersFour, House } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <aside className='w-fit px-[14px] min-w-[60px] bg-[#115E56] max-w-[60px]'>
      <img alt='Wingman' src='/wingmanLogo.png' className='w-full mt-6'/>
      <div className='border-[#134E48] border-b my-9'/>

      <div className='flex w-full items-center flex-col gap-8'>
        <div className='bg-white p-[10px] rounded-lg'>
          <House width={20} height={20} weight="fill" color="#115E56"/>
        </div>
        <div className='bg-transparent p-[10px] rounded-lg'>
          <ChatTeardrop width={20} height={20} weight="fill" color="#CCFBEF"/>
        </div>
        <div className='bg-transparent p-[10px] rounded-lg'>
          <UsersFour width={20} height={20} weight="fill" color="#CCFBEF"/>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;