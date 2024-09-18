    import React, { useState, useEffect, useCallback } from 'react';
    import { useNavigate } from 'react-router-dom';
    import SearchIcon from '../../assets/images/search-normal.svg';
    import SearchFilter from '../../assets/images/filter-search.svg';
    import { Button, Pagination, Stack } from '@mui/material';
    import debounce from 'lodash/debounce';
    import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

    const PreLoader1 = () => (
        <ReactLoading
            type={"bars"}
            color={"#06A4FF"}
            height={100}
            width={100}
            className="loaderSec"
        />
    );

    const EventList = () => {
        const [input, setInput] = useState("");
        const [currentPage, setCurrentPage] = useState(1);
        const [events, setEvents] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        

        const itemsPerPage = 15;
        const navigate = useNavigate();

        const fetchData = useCallback(async (query = "") => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/search-all/?q=${query}`);
                // const response = await fetch(`https://api.tictrends.com/api/search-all/?q=${query}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (data){
                    console.log(data,'data is here')
                }
                setEvents(data.events || []);
            } catch (error) {
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        }, []);

        const debouncedFetchData = useCallback(debounce((query) => fetchData(query), 300), [fetchData]);

        const handleInputChange = (e) => {
            setInput(e.target.value);
        };

        const handleSearchClick = () => {
            debouncedFetchData(input);
        };

        const handlePageChange = (event, value) => {
            setCurrentPage(value);
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                handleSearchClick();
            }
        };

        const handleCardClick = (event) => {
            navigate(`/analysis`, { state: { event } });
        };

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <div className="container event-list-container managewidth">
                <div className="searchInner">
                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                        className="search-icon"
                        onClick={handleSearchClick}
                    />
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Search by event name, URL, artist name, or venue name"
                        className="search-input"
                    />
                    <img src={SearchFilter} alt="Search Filter" className="search-filter" />
                </div>
                <div className="event-list">
                    {loading && (
                        <div className="overlay">
                            <PreLoader1 />
                        </div>
                    )}
                    {!loading && (
                        <>
                            {error && <p>{error}</p>}
                            {currentEvents.length > 0 ? (
        currentEvents.map(event => (
            <div 
                key={event.id} 
                className="event-item"
                onClick={() => handleCardClick(event)}
            >
               <div className="event-date">
                    <div className="event-month">
                        {new Date(event.date_of_event).toLocaleString('default', { month: 'short', timeZone: 'UTC' }) || 'N/A'}
                    </div>
                    <div className="event-day">
                        {new Date(event.date_of_event).toLocaleString('default', { day: 'numeric', timeZone: 'UTC' }) || 'N/A'}
                    </div>
                    <div className="event-month eventYear">
                        {new Date(event.date_of_event).toLocaleString('default', { year: 'numeric', timeZone: 'UTC' }) || 'N/A'}
                    </div>
                </div>

                <div className="event-details">
                    <div className='available-title'>{new Date(event.date_of_event) > Date.now() ? 'Available' : 'Not Available'}</div>
                    <div className="event-title">{event.event_name}</div>
                    <div className="event-venue">
                        <span>Time : {new Date(event.date_of_event).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </span> |
                        <span>Artist : {event.artist.artist_name}</span> |
                        <span>Venue : {event.venue.venue_name}</span>   
                    </div>          
                </div>
                <div className="event-price">
                    <Button variant='outlined' className="price-button">More ></Button>
                </div>
            </div>
        ))
    ) : (
        !loading && <div className='noDetail'> <p>No events found.</p></div>
    )}
                        </>
                    )}
                </div>
                <Stack spacing={2} className="pagination-container">
                    <Pagination
                        count={Math.ceil(events.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        sx={{
                            '& .Mui-selected': {
                                backgroundColor: '#06A4FF',
                                color: '#fff',
                            }
                        }}
                    />
                </Stack>
            </div>
        );
    };

    export default EventList;
