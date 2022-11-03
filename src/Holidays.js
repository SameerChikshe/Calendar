import React from 'react'
import holidays from 'date-holidays';
import './Appl.css';

export default function Holidays() {

const hd = new holidays('US');
const holiday = hd.getHolidays()
console.log(holiday)

return (
    <div>
      <div className='hol_header'>
      <h2>Date</h2>
      <h2>Holiday Title</h2>
      </div>
      
        {
        holiday.map((holiday,i)=>{
          return (      
            <div className='holiday_list'>    
               <div>
              {holiday.date}
              </div>
              <div style={{marginLeft:'20px'}}>
               {holiday.name}
               </div>
               </div>
          )
         })
      }

      </div>
  )
}
