
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import StatCard from "../CardComponent/StatCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Doughnut,Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, [page]);

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
  cutout: '80%', 
  plugins: {
    legend: {
      position: 'bottom', 
      labels: {
        usePointStyle: true, 
        pointStyle: 'circle',
        padding: 20,
        color: '#9ca3af', 
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



  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
        {/* Banner Section */}
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',
          padding: '10px', borderRadius: '5px', width: '100%', backgroundColor: 'purple', color: 'white'
        }}>
          <CiStar />
          <span>Star this project on GitHub</span>
          <span style={{ marginLeft: "auto", cursor: "pointer" }}>View More</span>
        </div>

        <div className="mt-4">
          <StatCard />
        </div>
      </div>

      {/* Characters Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CLIENT</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>SPECIES</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={4} className="text-center">Loading...</TableCell></TableRow>
            ) : (
              characters.map((char) => (
                <TableRow key={char.id}>
                  <TableCell>
                    <img src={char.image} alt={char.name} className="w-10 h-10 rounded-full" />
                  </TableCell>
                  <TableCell className="font-medium">{char.name}</TableCell>
                  <TableCell>{char.status}</TableCell>
                  <TableCell>{char.species}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 text-sm">Page {page} of {totalPages}</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
      <div className="flex flex-row">
      <div  className="w-1/2" style={{height: '400px' }}>
        <span>Revenue</span> 
      <Doughnut data={data} options={options} />
      </div>
      <div className="w-1/2" style={{height: '400px' }}>
        <span>Trends</span> 
       <Line data={data1} options={options1} />
      </div>
      </div>
    </div>
   
  );
};

export default Dashboard;
