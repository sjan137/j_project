import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const AppClothes = () => {
  let y = [];
  let x = [];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/clothes")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y.push(parseInt(dataobj.total));
          x.push(parseInt(dataobj.date_time));
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
    name: '일별 지하철 탑승객_사람',
    data: y
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppClothes
