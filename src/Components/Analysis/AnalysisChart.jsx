import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import PinDropIcon from '@mui/icons-material/PinDrop';
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

const AnalysisChart = ({ event }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = {
        labels: Array.from({ length: 22 }, (_, i) => 30 - i),
        datasets: [
            {
                label: 'Get In Price',
                data: [500, 450, 470, 465, 455, 445, 435, 425, 420, 415, 410, 405, 400, 395, 390, 385, 380, 375, 370, 365, 360, 355],
                borderColor: '#06A4FF',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                yAxisID: 'y',
            },
            {
                label: 'Event Supply',
                data: [1400, 950, 1000, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 25, 0],
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
                        if (tooltipItem.dataset.label === 'Get In Price') {
                            return `$${tooltipItem.raw}`;
                        } else {
                            return `${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    };

    return (
        <div className='analysisChartSection'>
            <div className='swiftContent'>
                <h2>{event.event_name}</h2>
                <p>
                    <span><PinDropIcon /></span> {event.venue_id}
                </p>
            </div>
            <div className='chartContainer pt-3'>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default AnalysisChart;
