import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const AppConcert = () => {
  let y1 = [];
  let y2 = [];
  let y3 = [];
  let x = [];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/concert")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y1.push(parseInt(dataobj.opening_num));
          y1.push(parseInt(dataobj.perform_num));
          y1.push(parseInt(dataobj.showing_num));
          x.push(dataobj.date_mon);
        }
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y1,y2,y3)
    

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
    name: '일별 지하철 탑승객_사람',
    data: y1
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppConcert
