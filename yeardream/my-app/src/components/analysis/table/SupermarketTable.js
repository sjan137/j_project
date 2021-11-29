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
            <td>9.6741</td>
            <td>4.833</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0175</td>
            <td>-3.924</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: -6.5561</td>
            <td>R-squared: 0.439</td>
            <td>F-statistic: 11.72</td>
            <td>Prob: 0.000174</td>
            </tr>
        </tbody>
        </Table>
    )
}