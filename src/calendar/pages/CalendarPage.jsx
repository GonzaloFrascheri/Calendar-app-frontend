import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns'
import { CalendarEvent, CalendarModal, Navbar } from "../"
import { localizer, getMessagesEs } from '../../helpers';


const events = [{
  title: 'Cumpleanios del jefe',
  notes: 'Hay que comprar un pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user:{
    id: 123,
    name: 'Gonzalo',
  }
}]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lasView') || 'week');

  const eventStyleGetter = ( event, start, end, isSelected) => {    
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {

  }

  const onSelect = ( event ) => {

  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
    setLastView( event )
  }

  return (
   <>
    <Navbar />

    <Calendar
      culture='es'
      localizer={ localizer }
      events={ events }
      defaultView= { lastView }
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px )' }}
      messages={ getMessagesEs() }
      eventPropGetter={ eventStyleGetter }
      components={{
        event : CalendarEvent
      }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={ onSelect }
      onView={ onViewChanged }
    />

      <CalendarModal />
      
   </>
  )
}
