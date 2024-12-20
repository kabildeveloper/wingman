import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='w-full mx-auto max-w-[2560px]'>
        <Navbar/>
        <main className="mx-auto px-6 pb-6 w-full min-h-dvh">{children}</main>
      </div>
    </div>
  )
}