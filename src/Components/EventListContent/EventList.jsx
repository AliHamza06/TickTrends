import React, { useState, useEffect, useCallback } from 'react';
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

    // Fetch data with updated query
    const fetchData = useCallback(async (query = "") => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/search-all/?q=${query}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setEvents(data.events || []);
        } catch (error) {
            setError('Error fetching data. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    // Use debounce to delay fetchData calls
    const debouncedFetchData = useCallback(debounce((query) => fetchData(query), 300), [fetchData]);

    // Handle input change
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Trigger search when clicking the search icon or pressing Enter
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

    // Calculate pagination
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
                                <div key={event.id} className="event-item">
                                    <div className="event-date">
                                        <div className="event-month">{new Date(event.date_of_event).toLocaleString('default', { month: 'short' }) || 'N/A'}</div>
                                        <div className="event-day">{new Date(event.date_of_event).getDate() || 'N/A'}</div>
                                    </div>
                                    <div className="event-details">
                                        <div className='available-title'>{event.available || 'Available'}</div>
                                        <div className="event-title">{event.event_name}</div>
                                        <div className="event-venue">
                                            <span>Time : {event.time}</span> |
                                            <span>Artist : {event.artist_id}</span>
                                            <span>Venue ID : {event.venue_id}</span>
                                        </div>
                                    </div>
                                    <div className="event-price">
                                        <Button variant='outlined' className="price-button">From {event.price || '$0'}</Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            !loading && <p>No events found.</p>
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
