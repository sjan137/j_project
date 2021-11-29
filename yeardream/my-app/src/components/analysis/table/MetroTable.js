import React from 'react';
import Table from 'react-bootstrap/Table';

export default function MetroTable() {
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
            <td>-7.287e+05</td>
            <td>-10.463</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>502.6350</td>
            <td>2.899</td>
            <td>0.004</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 6.749e+06</td>
            <td>R-squared: 0.169</td>
            <td>F-statistic: 104.6</td>
            <td>Prob: 4.28e-42</td>
            </tr>
        </tbody>
        </Table>
    )
}