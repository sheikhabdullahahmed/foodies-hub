import React from 'react'
import Apps from '../../assets/assets/app_store.png'
import  Play from '../../assets/assets/play_store.png'
import Mobile from '../../assets/assets/mobile_bike.gif'




function Appstore() {
  return (
    <div>
        <div className='bg-gray-100 dark:bg-gray-800 py-14'>
            <div className='container'>
                <div className='grid grid-cols-1  sm:grid-cols-2 items-center gap-4 ' >
                    <div className='space-y-6  max-w-xl mx-auto'>
                        <h1 className='text-4xl font-semibold  dark:text-gray-400 text-gray-700'>Foodly is Avaiable for Andriod and IOS  </h1>
                    
                    <div className='flex flex-wrap justify-center sm:justify-start items-center '>
                        <a href="#"><img  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={Play} alt="" /></a>
                        <a href="#"><img  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={Apps} alt="" /></a>
                    </div>
                    </div>
                    <div>
                        <img className='max-w-[300px] mx-auto' src={Mobile} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Appstore