// import { CiStar } from "react-icons/ci";
// import StatCard from "../CardComponent/StatCard"
// const Dashboard = () => {

//   return (
//    <div>   
//     <div>
//        <h1>Dashboard</h1>
//        <div style={{
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center', // Aligns items vertically
//     gap: '10px',          // Space between icon and text
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     width: 'full',
//     backgroundColor:'purple'
//   }}>
//       <CiStar /> {/* Start Icon */}
//       <span>Star this project on GitHub</span> {/* Text */}
//       <span style={{marginLeft:"auto"}}>View More </span>
//     </div>

//     {/* <div className="dashboard-container">
//       {stats.map((stat, index) => (
//         <StatCard key={index} {...stat} />
//       ))}
//     </div> */}
//     <div>
//      <StatCard/>
//     </div>
//    </div>
//          </div>);
// };

// export default Dashboard;
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
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
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows chart to fill container
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
      <div style={{ width: '400px', height: '400px' }}>
       <span>Revenue</span> 
      <Pie data={data} options={options} />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <span>Revenue</span> 
      <Doughnut data={data} options={options} />
      </div>
      </div>
      </div>
   
  );
};

export default Dashboard;
