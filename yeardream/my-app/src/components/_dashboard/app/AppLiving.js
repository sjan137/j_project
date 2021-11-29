import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import s from './loading.css'
const AppLiving = () => {
  let y = [];
  let x = [];
  const [loading, setLoading] = useState(true);
  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/naver_data ")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y.push(parseInt(dataobj.living_health));
          x.push(parseInt(dataobj.date_day));
        }
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y)
    

  }

  
  useEffect(() => {
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
    name: 'living_health',
    data: y
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppLiving
