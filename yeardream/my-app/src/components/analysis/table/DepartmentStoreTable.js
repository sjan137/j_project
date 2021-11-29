import React from 'react';
import Table from 'react-bootstrap/Table';

export default function SupermarketTable() {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th></th>
            <th>coef</th>
            <th>t</th>
            <th>P&gt;|t|</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>단계</td>
            <td>10.7617</td>
            <td>4.012</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0137</td>
            <td>-2.285</td>
            <td>0.030</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 6.4224</td>
            <td>R-squared: 0.373</td>
            <td>F-statistic: 8.918</td>
            <td>Prob: 0.000913</td>
            </tr>
        </tbody>
        </Table>
    )
}