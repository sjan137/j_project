import React, { useState, useEffect} from 'react';
import CovidData from '../../components/_dashboard/app/CovidData';
import { Button } from '@mui/material';
import MetroAnalysis from '../../components/analysis/MetroAnalysis';
import BusAnalysis from '../../components/analysis/BusAnalysis';


function Analysis() {
    const [condition, setCondition] = useState(false);
    const [pageCond, setPageCond] = useState("");
    const toggle = () => setCondition(!condition);
    useEffect(() => {
        console.log('c', condition);
    }, [condition])
    function showAnalysis(pageCond) {
        switch (pageCond) {
            case '': return alert('항목을 선택해주세요.');
            case '국내 매출액': return <p>국내 매출액</p>;
            case '국내 관객수': return '국내 관객수';
            case '해외 판매액': return '해외 판매액';
            case '해외 관객수': return '해외 관객수';
            case '전체 매출액': return '전체 매출액';
            case '전체 관객수': return '전체 관객수';
            case '상연 횟수': return <BusAnalysis />;
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
                <option value="국내 매출액">국내 매출액</option>
                <option value="국내 관객수">국내 관객수</option>
                <option value="해외 판매액">해외 판매액</option>
                <option value="해외 관객수">해외 관객수</option>
                <option value="전체 매출액">전체 매출액</option>
                <option value="전체 관객수">전체 관객수</option>
                <option value="상연 횟수">상연 횟수</option>
            </select>
            {renderCondition}
        </>
    )
}

export default Analysis;