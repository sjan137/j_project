import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import s from './loading.css'
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';
import { truncate } from 'lodash-es';

const AppMetro = () => {
  let y = [];
  let x = [];
  const [loading, setLoading] = useState(true);
  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/metro")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y.push(parseInt(dataobj.get_on));
          x.push(parseInt(dataobj.date_day));
        }
        
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y)
    setLoading(false);
    

  }

  
  useEffect(() => {
    setLoading(true);
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    
    xaxis: {
      // type: 'datetime',
      categories: x
    }
  })
  const [series, setseries] = useState([{
    name: '일일 지하철 탑승객',
    data: y
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
    
  );
};




export default AppMetro
