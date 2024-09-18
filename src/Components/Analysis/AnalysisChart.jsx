    import React, { useEffect, useState } from 'react';
    import { Line } from 'react-chartjs-2';
    import PinDropIcon from '@mui/icons-material/PinDrop';
    import axios from 'axios';
    import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    } from 'chart.js';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const PreLoader1 = () => (
        <ReactLoading
            type={"bars"}
            color={"#06A4FF"}
            height={100}
            width={100}
            className="loaderSec"
        />
    );

    const AnalysisChart = ({ event, sections, setSections, sectionsapi, quantities, setCallApi, callApi, setSupplyChanges, setPriceChanges }) => {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
        const [myarry, setMyarry] = useState({ graph_data: { get_in_price: [], event_supply: [], days_to_event: [] } });
        const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        const postEventId = async (eventId) => {
            setLoading(true);
            try {
                const response = await axios.post('https://api.tictrends.com/api/event-ticket-graph/', {
                    event_id: eventId,
                    ticket_quantity: quantities, // The selected quantities
                    sections: sectionsapi, // The selected sections
                });
    
                if (response) {
                    // Update the state with the new data format
                    setMyarry(response.data);
                    setSections(response.data.available_sections || []);
                    setSupplyChanges(response.data.supply_changes || []);
                    setPriceChanges(response.data.price_changes || []);
                }
            } catch (error) {
                console.error('Error posting event ID:', error);
            } finally {
                setLoading(false);
                setCallApi(false); // Reset API call flag
            }
        };
    
        useEffect(() => {
            if (event && event.id && callApi === true) {
                postEventId(event.id);
            }
        }, [event, callApi]);
    
        const reversedDaysToEvent = (myarry.graph_data?.days_to_event || []).slice().reverse();
        const getInPrice = (myarry.graph_data?.get_in_price || []).slice().reverse();
        const eventSupply = (myarry.graph_data?.event_supply || []).slice().reverse();
    
        // Extract price and date for tooltips
        const getInPriceValues = getInPrice.map(item => item.price);
        const getInPriceDates = getInPrice.map(item => item.date);
        const eventSupplyValues = eventSupply.map(item => item.supply);
        const eventSupplyDates = eventSupply.map(item => item.date);
    
        const data = {
            labels: reversedDaysToEvent, // X-axis labels (days to event)
            datasets: [
                {
                    label: 'Get In Price',
                    data: getInPriceValues, // Get-in prices for each day
                    borderColor: '#06A4FF',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    yAxisID: 'y',
                },
                {
                    label: 'Event Supply',
                    data: eventSupplyValues, // Ticket supply for each day
                    borderColor: '#FA9600',
                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                    yAxisID: 'y1',
                },
            ],
        };
    
        const options = {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Days To Event',
                        color: '#07070780',
                        padding: {
                            top: 10,
                        },
                        font: {
                            family: 'Helvetica',
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                        align: 'start'
                    },
                    ticks: {
                        color: '#07070780',
                        font: {
                            family: 'Helvetica',
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                    },
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Get In Price for Section 102',
                        color: '#07070780',
                        padding: {
                            bottom: 10,
                        },
                        font: {
                            family: 'Helvetica',
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                    },
                    ticks: {
                        color: '#07070780',
                        beginAtZero: true,
                        font: {
                            family: 'Helvetica',
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                        callback: function (value) { return `$${value}`; }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Supply of Tickets',
                        color: '#07070780',
                        padding: {
                            bottom: 10,
                        },
                        font: {
                            family: 'Helvetica',
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        color: '#07070780',
                        beginAtZero: true,
                        font: {
                            family: 'Helvetica',
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                        callback: function (value) { return `${value}`; }
                    }
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        color: '#07070780 !important',
                        font: {
                            size: isMobile ? 10 : 16,
                            weight: 500,
                        },
                        boxWidth: 15,
                        boxHeight: 15,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const index = tooltipItem.dataIndex;
                            const date = tooltipItem.dataset.label === 'Get In Price' ? getInPriceDates[index] : eventSupplyDates[index];
                            const value = tooltipItem.raw;
    
                            if (tooltipItem.dataset.label === 'Get In Price') {
                                return `Price: $${value}, Date: ${date}`;
                            } else {
                                return `Supply: ${value}, Date: ${date}`;
                            }
                        }
                    }
                }
            }
        };
    
        return (
            <div className='analysisChartSection'>
                <div className='swiftContent'>
                    <h2 className='mb-0'>{event.event_name}</h2>
                    <p>
                        {new Date(event.date_of_event).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            timeZone: 'UTC' // Ensure the date is displayed in UTC
                        }) || 'N/A'}{' '}
                        at {new Date(event.date_of_event).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }) || 'N/A'}
                    </p>
                    <p>
                        <span><PinDropIcon /></span> {event.venue?.address || 'Address not available'}{' '}
                        {event.venue?.city || 'City not available'}{' '}
                        {event.venue?.state || 'State not available'}{' '}
                        {event.venue?.zipcode || 'Zipcode not available'}
                    </p>
                </div>
                <div className='chartContainer pt-3'>
                    {loading ? (
                        <div className="overlay">
                            <PreLoader1 />
                        </div>
                    ) : (
                        <Line data={data} options={options} />
                    )}
                </div>
            </div>
        );
    };
    
    export default AnalysisChart;
    
