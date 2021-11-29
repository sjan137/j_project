import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const AppConsume = () => {
  let y = [];
  let x = [];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/consumption ")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y.push(parseInt(dataobj.MARKET_TOTAL));
          x.push(parseInt(dataobj.DATE));
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
    name: 'MARKET_TOTAL',
    data: y
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppConsume
