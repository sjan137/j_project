import React, { useState, useEffect} from 'react';
import CovidData from '../../components/_dashboard/app/CovidData';
import { Button } from '@mui/material';
import MetroAnalysis from '../../components/analysis/MetroAnalysis';
import BusAnalysis from '../../components/analysis/BusAnalysis';


function Analysis() {
    const [condition, setCondition] = useState(false);
    const [pageCond, setPageCond] = useState("");
    const toggle = () => {
        if (pageCond === '') {
            setCondition(false);
            alert('항목을 선택해주세요.');
        } else {setCondition(!condition);}
    }
    useEffect(() => {
        console.log('c', condition);
    }, [condition])
    function showAnalysis(pageCond) {
        switch (pageCond) {
            case '':
                setCondition(false)
                return null;
            case '지하철': return <MetroAnalysis />;
            case '버스': return <BusAnalysis />;
        }
    }
    const renderCondition = condition
        ? showAnalysis(pageCond)
        : null
    const renderBtn = condition
        ? '분석창 닫기'
        : '분석창 열기'
        
    return (
        <>
            <br/>
            <Button
            variant="contained"
            // component={RouterLink}
            onClick={toggle}
            to="#"
            // startIcon={<Icon icon={plusFill} />}
            >
                {renderBtn}
            </Button>
            <select
                onChange={(e) => {
                    const selectedPage = e.target.value;
                    setPageCond(selectedPage);
                }}
            >
                <option value="">없음</option>
                <option value="지하철">지하철</option>
                <option value="버스">버스</option>
            </select>
            {renderCondition}
        </>
    )
}

export default Analysis;