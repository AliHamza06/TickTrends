import React from 'react';

const AnalysisTable = ({ supplyChanges, priceChanges ,sectionsapi ,quantities }) => {

    console.log(priceChanges,'priceChanges')
    const data = [
        {
            label: 'Change in Get in Price',
            quantity: `(Quantity ${quantities? quantities : "2"}, ${sectionsapi})`,
            values: [
                priceChanges?.last_3_days?.value || "$0.00",
                priceChanges?.last_7_days?.value || "$0.00",
                priceChanges?.last_14_days?.value || "$0.00",
                priceChanges?.last_30_days?.value || "$0.00",
                priceChanges?.since_created?.value || "$0.00"
            ]
        },
        {
            label: 'Change in Supply',
            quantity: `(Quantity ${quantities? quantities : "2"}, ${sectionsapi})`,
            values: [
                supplyChanges?.last_3_days?.value || "$0.00",
                supplyChanges?.last_7_days?.value || "$0.00",
                supplyChanges?.last_14_days?.value || "$0.00",
                supplyChanges?.last_30_days?.value || "$0.00",
                supplyChanges?.since_created?.value || "$0.00"
            ]
        }
    ];

    return (
        <div className="table-wrapper">
            <table className="table summary-table summary-table2">
                <thead>
                    <tr>
                        <th></th>
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
                            <td className='labelTd'><span className='quantitySpan'>{row.quantity}</span></td>
                            {row?.values?.map((value, idx) => (
                                <td
                                    key={idx}
                                    className={
                                        value?.includes('($') || value?.includes('-') ? 'red-text' : 'green-text'
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

export default AnalysisTable;
