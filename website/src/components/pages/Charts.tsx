import { Pie } from 'react-chartjs-2';
import { CiStar } from "react-icons/ci";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Doughnut,Line,Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Cards = () => {
  const data = {
  labels: ['Shirts', 'Shoes', 'Bags'],
  datasets: [
    {
      data: [33, 33, 34], 
      backgroundColor: [
        '#2563eb', // Blue for Shirts
        '#0d9488', // Teal for Shoes
        '#9333ea', // Purple for Bags
      ],
      hoverOffset: 4,
      borderWidth: 2,
      borderColor: '#111827', 
    },
  ],
};

const options = {
  cutout: '80%', // Makes the doughnut ring thinner
  plugins: {
    legend: {
      position: 'bottom', // Positions legend below the chart
      labels: {
        usePointStyle: true, // Use circular markers instead of boxes
        pointStyle: 'circle',
        padding: 20,
        color: '#9ca3af', // Light grey text for dark theme
      },
    },
  },
};

const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Organic',
      data: [42, 48, 40, 52, 65, 72, 70], 
      borderColor: '#0d9488', 
      backgroundColor: '#0d9488',
      tension: 0.4, 
      pointRadius: 4,
    },
    {
      label: 'Paid',
      data: [25, 50, 62, 75, 52, 50, 65], 
      borderColor: '#9333ea', 
      backgroundColor: '#9333ea',
      tension: 0.4,
      pointRadius: 4,
    },
  ],
};

const options1 = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        color: '#9ca3af',
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: 'rgba(156, 163, 175, 0.1)', 
      },
      ticks: { color: '#9ca3af' },
      min: 20,
      max: 80,
    },
    x: {
      grid: { display: false }, 
      ticks: { color: '#9ca3af' },
    },
  },
};
const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Shoes',
      data: [-3, 15, 52, 74, 33, 90, 70], 
      backgroundColor: '#0d9488',
      borderRadius: 4, 
    },
    {
      label: 'Bags',
      data: [66, 33, 43, 12, 54, 62, 84], 
      backgroundColor: '#9333ea',
      borderRadius: 4,
    },
  ],
};

const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        color: '#9ca3af',
      },
    },
  },
  scales: {
    y: {
      beginAtZero: false, 
      grid: {
        color: 'rgba(156, 163, 175, 0.1)',
      },
      ticks: { color: '#9ca3af' },
    },
    x: {
      grid: { display: false },
      ticks: { color: '#9ca3af' },
    },
  },
};

  return (<div>
        <h3 className="text-2xl font-bold mb-4">Charts</h3>
        <div style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',
                  padding: '10px', borderRadius: '5px', width: '100%', backgroundColor: 'purple', color: 'white'
                }}>
                  <CiStar />
                  <span>Star this project on GitHub</span>
                  <span style={{ marginLeft: "auto", cursor: "pointer" }}>View More</span>
        </div> 
        <div>
          Charts are provided by Chart.js . Note that the default legends are disabled and you should provide a description for your charts in HTML. See source code for examples.
        </div>
         <div className="flex flex-row mt-4 mb-4">
         <div className="w-1/2" style={{  height: '400px' }}>
            <span>Revenue</span> 
          <Doughnut data={data} options={options} />
          </div>
          <div className="w-1/2 " style={{  height: '400px' }}>
            <span>Trends</span> 
           <Line data={data1} options={options1} />
          </div>
         </div>
         

         
         
         <div className="mt-4 mb-4" style={{ width: '400px', height: '400px' }}>
           <span className="block mb-2 font-bold text-gray-400">Bars</span> 
          <Bar data={data2} options={options2} />
         </div> 
       </div>);
};

export default Cards;
