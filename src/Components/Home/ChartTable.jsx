import React from 'react';

const data = [
    {
        label: 'Change in Get in Price',
        values: ['$7.40', '($1.50)', '($3.70)', '$4.50', '$4.50']
    },
    {
        label: 'Change in Supply',
        values: ['-100.00', '-200.00', '-600.00', '-1,100.00', '-1,100.00']
    }
];

const ChartTable = () => {
    return (
        <div className="table-wrapper">
            <table className="table summary-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Last 3 days</th>
                        <th>Last 7 days</th>
                        <th>Last 14 days</th>
                        <th>Last 30 days</th>
                        <th>Since Event was Created</th>
                    </tr>
                </thead>
                <tbody className='tbodyRow'>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className='labelTd'>{row.label}</td>
                            {row.values.map((value, idx) => (
                                <td
                                    key={idx}
                                    className={
                                        value.includes('($') || value.includes('-') ? 'red-text' : 'green-text'
                                    }
                                >
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChartTable;
