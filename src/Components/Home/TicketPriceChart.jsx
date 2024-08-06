import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

const TicketPriceChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
            gradient.addColorStop(0, 'rgba(46, 133, 209, 0.3)');
            gradient.addColorStop(1, 'rgba(46, 133, 209, 0)');

            chart.data.datasets[0].backgroundColor = gradient;
            chart.update();
        }
    }, []);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: '',
                data: [10, 20, 15, 25, 30, 20, 25],
                borderColor: '#06A4FF',
                borderWidth: 2,
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // This will be overridden by the gradient
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className='priceChartSec'>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default TicketPriceChart;
