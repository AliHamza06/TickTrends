import { Button, IconButton } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const events = [
    {
        month: 'Oct',
        day: '18',
        name: 'Melanie Martinez',
        time: '7 PM',
        venue: 'Madison Square Garden',
        location: 'New York, NY',
        eventH : 'Hot Event',
        isHotEvent: true,
        price: '$448+',
    },
    {
        month: 'Nov',
        day: '11',
        name: 'Billy Joel',
        time: '9 PM',
        venue: 'Madison Square Garden',
        location: 'New York, NY',
        isHotEvent: true,
        price: '$448+',
        eventH : 'Hot Event',
    },
    {
        month: 'Nov',
        day: '20',
        name: 'Justin Timberlake',
        time: '7 PM',
        venue: 'Madison Square Garden',
        location: 'New York, NY',
        isHotEvent: true,
        price: '$448+',
    },
    {
        month: 'Dec',
        day: '9',
        name: 'Taylor Swift with Gracie Abrams',
        time: '9 PM',
        venue: 'Madison Square Garden',
        location: 'New York, NY',
        isHotEvent: true,
        price: '$448+',
    },
];

const EventCard = ({ event }) => {
    return (
        <div className='eventCard'>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-3">
                    <div className="date-container">
                        <div className="date">
                            <div className="month">{event.month}</div>
                            <div className="day">{event.day}</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-9">
                    <div className='evntContent'>
                        <h5>{event.name}</h5>
                        <p>{event.time} | {event.venue} | {event.location}</p>
                        {event.isHotEvent && <span className='hot-event'>{event.eventH}</span>}
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 fromBtn">
                    <Button variant='outlined' className="price-btn">From {event.price}</Button>
                    <span>
                        <ChevronRightIcon />
                    </span>
                </div>
            </div>
        </div>
    );
};

const CombinedComponent = () => {
    return (
        <div className="">
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

export default CombinedComponent;
