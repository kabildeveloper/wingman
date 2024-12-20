import {TrendDown, TrendUp} from "@phosphor-icons/react";

const DashboardCard = ({IconComponent, heading, value, graph, graphValue}) => {
  return (
    <div className="bg-white rounded-[20px] cardShadow p-6 flex flex-col gap-2">
      <div className='flex items-center gap-2'>
        <div className='text-overline flex items-center'>
          <IconComponent className="mr-2" weight="fill"/>
          <p className='text-overline uppercase'>{heading}</p>
        </div>

      </div>
      <h4 className='text-h4'> {value} </h4>
      <p className='text-body2 text-[#667085] flex items-center'><span className={`flex items-center mr-1 ${graphValue>0 ? 'text-[#15B79F]': 'text-[#F04438]'}`}>
        {graphValue>0 ? <TrendUp weight='bold' width='20' height='20' className='mr-2'/> : <TrendDown weight='bold' width='20' height='20' className='mr-2'/>}
        {Math.abs(graphValue)}%</span> {graphValue>0 ? 'increase' : 'decrease'} </p>
    </div>
  )
}

export default DashboardCard;