import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import MetroTable from './table/MetroTable';

export default function MetroAnalysis() {
    return (
        <Card>
            <CardHeader title="지하철 데이터 분석 결과" subheader="지하철 데이터와 코로나 사이의 연관성을 분석한 결과입니다." />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <CardHeader title="1. 다중회귀 분석 차트" />
                <img src='https://miro.medium.com/max/1120/0*AqzOn7p--nveVULA.png' alt='다중회귀' width='80%' height='auto' />
                <br/>
                <CardHeader title="2. 다중회귀 분석 요약" />
                <MetroTable />
                <br/>
                <CardHeader title="3. 다중회귀 분석 결과 설명" subheader="설명" />
            </Box>
        </Card>
    )
}