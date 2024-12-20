const ForecastsCard = () => {
  return (
    <div className='w-full md:w-1/2 relative p-0 cardShadow card overflow-clip md:min-w-[260px]'>
      <img className='absolute left-0 top-0 w-full h-full object-cover' src='/img.png'/>
      <p className='uppercase text-overline mb-6 z-10 relative !text-[#CCFBEF]'>
        FORECASTS
      </p>
      <div className='z-10 relative text-white'>
        <h1 className='text-[52px]'>+15%</h1>
        <p className='text-[14px]'>forecasted increase in your sales closed by the end of the current month</p>
      </div>

      <div className='z-10 relative text-white'>
        <h1 className='text-[52px]'>+20%</h1>
        <p className='text-[14px]'>forecasted increase in your sales closed by the end of the current month</p>
      </div>
    </div>
  )
}

export default ForecastsCard;