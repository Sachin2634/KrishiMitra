import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ProductPerformance = () => {
  const data = {
    labels: ['20%', '30%', '30%', '45%'],
    datasets: [
      {
        data: [20, 30, 30, 45],
        backgroundColor: ['#28a7', '#006A', '#28a', '#28a790'],
        borderColor: ['#fff', '#fff', '#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#000',
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          size: 13,
        },
      },
    },
  };

  return (
    <div className="flex flex-col pl-[12px] pt-[15px] w-[380px] ml-[108px] mt-[16px] shadow-xl border border-black/10">
      <h2 className="text-[#006A30] text-[22px] jomolhari-regular mb-4">Product Performance</h2>
      <div className="flex">
      <div className="mt-[38px] ml-[17px] w-[108px] h-[108px]">
        <Pie data={data} options={options} style = {{width:"108px", height:"108px"}}/>
      </div>
      <div className="ml-[46px] mb-[15px]">
          <p className="text-black text-[19px] joan-regular leading-loose whitespace-pre">Wheat            45%</p>
          <p className="text-black text-[19px] joan-regular leading-loose whitespace-pre">Rice               30%</p>
          <p className="text-black text-[19px] joan-regular leading-loose whitespace-pre">Pulses            30%</p>
          <p className="text-black text-[19px] joan-regular leading-loose whitespace-pre">Fruits             20%</p>
        </div>
    </div>
    </div>
  );
};

export default ProductPerformance;