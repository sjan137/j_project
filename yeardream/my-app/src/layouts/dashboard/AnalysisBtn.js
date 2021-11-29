import React, { useState, useEffect} from 'react';
import CovidData from '../../components/_dashboard/app/CovidData';
import { Button } from '@mui/material';


function Analysis() {
    const [condition, setCondition] = useState(false);
    const toggle = () => setCondition(!condition);
    useEffect(() => {
        console.log('c', condition);
    }, [condition])
    const renderCondition = condition
        ? <CovidData />
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
            {renderCondition}
        </>
    )
}

export default Analysis;