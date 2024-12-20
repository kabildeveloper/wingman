import DashboardCard from "@/components/DashboardCard";
import WeeklyChart from "@/components/WeeklyChart";
import BarChartExample from "@/components/ComparisionChart";
import ForecastsCard from "@/components/ForecastsCard";
import { ChatTeardrop, Tag } from "@phosphor-icons/react";
import OrdersTable from "@/components/OrdersTable";

export default function Home() {
  return (
    <section>
      <div className="w-full px-6 py-1 mx-auto cardShadow mt-9 rounded-[20px] pb-8">
        <section>

          <h4 className='my-12 text-h4'>At a glance</h4>

          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <DashboardCard value={24} graphValue={15} IconComponent={ChatTeardrop} heading="Consultations"/>
            <DashboardCard value={12} graphValue={-15} IconComponent={Tag} heading="ORDERS PLACED"/>
            <DashboardCard value={"50%"} graphValue={-15} IconComponent={Tag} heading="CONVERSION"/>
            <DashboardCard value={"$2,400"} graphValue={15} IconComponent={Tag} heading="TOTAL SALES VALUE"/>
            <DashboardCard value={"$240"} graphValue={15} IconComponent={Tag} heading="CONVERSION"/>
            <DashboardCard value={"$240"} graphValue={15} IconComponent={Tag} heading="CONVERSION"/>
            {/*<DashboardCard/>
            <DashboardCard/>

            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>*/}
          </div>
        </section>

        <section>
          <div className='flex items-center justify-between'>
            <h4 className='text-h4 my-12'>Insights</h4>
          </div>
          <div className='w-full flex gap-6 graph-col'>
            <div className='w-full lg:min-w-[684px] max-w-[900px] card cardShadow'>
              <p className='uppercase text-overline mb-6 '>
               <ChatTeardrop className='inline mb-[2px] mr-1' weight='fill'/> Consultations
              </p>
              <WeeklyChart/>
            </div>
            <div className='flex-grow flex flex-col sm:flex-row gap-6'>
              <div className='card pl-0 cardShadow sm:w-1/2  sm:min-w-[260px] h-full'>
                <p className='uppercase text-overline mb-6'>
                  VS PAST PERIOD
                </p>
                <BarChartExample/>
              </div>

              <ForecastsCard/>
            </div>
          </div>
        </section>

        <OrdersTable/>

      </div>
    </section>
  );
}


//box-shadow: 0px 5px 22px 0px #0000000A;

//box-shadow: 0px 0px 0px 1px #0000000F;


