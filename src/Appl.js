import './Appl.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import holidays from 'date-holidays';

const locales= {
  "en-US": require("date-fns/locale/en-US")
}

const localizer= dateFnsLocalizer({
  format,parse,startOfWeek,getDay,locales
})

const events=[]

function Appl() {

const [newEvent, setNewEvent]= useState({title:"", start:"", end:""})
const [allEvents,setAllEvents]=useState(events)

function handleAddEvent(){
 
    setAllEvents([...allEvents, newEvent])
    alert("New Event added")
  }

  useEffect(() => 
{
  for (var i=2015;i<=2023;i++){

    // holidays fetched from 2015 to 2023

    const hd = new holidays('US');

    const holiday = hd.getHolidays(i)
  
    holiday.map((j=>{
    events.push({
      title: j["name"],
      start: j["start"],
      end: j["end"]
    })
  }))
  }

},[0]);


return (
  
    <div className='App'>

      <div className='header'>
      <img className='cal_icon1' src="https://ionicframework.com/docs/icons/logo-react-icon.png"/>
        <h1 className='heading_calendar'>REACT CALENDAR</h1>
        <img className='cal_icon2' src="https://cdn-icons-png.flaticon.com/512/3515/3515402.png"/>
       </div>
      
      <h2 className='heading_event'>Add Holiday/Event</h2>
      
      <div className='add_event'>

        <input className='event_title' type="text" placeholder='Enter a holiday/Event' 
        value={newEvent.title} onChange={(e)=>setNewEvent({...newEvent,title:e.target.value})}
        />
        
        <div>
        <DatePicker className='datepicker' PlaceholderText="start Date" 
        selected={newEvent.start} onChange={(start)=>{setNewEvent({...newEvent,start})}}/>
        </div>

        <div>
        <DatePicker className='datepicker' PlaceholderText="End Date" 
        selected={newEvent.end} onChange={(end)=>{setNewEvent({...newEvent,end})}}/>
        </div>

        <button className='button' onClick={handleAddEvent} >Submit</button>

        <a className='list_button' href='/Holidays'>Holidays List</a>
        
          <div>
        
      </div>
      
      </div>

    <Calendar localizer={localizer} events={allEvents} startAccessor="start"
    endAccessor="end" style={{height:500,margin:"50px"}}/>

    </div>
  );
}

export default Appl;