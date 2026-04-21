import { CiStar } from "react-icons/ci";
const Dashboard = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Aligns items vertically
    gap: '10px',          // Space between icon and text
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: 'full'
  };
  return (<div>
       <h1>Tables</h1>
       <div style={containerStyle}>
      <CiStar /> {/* Start Icon */}
      <span>Star this project on GitHub</span> {/* Text */}
      <span style={{textAlign:"end"}}>View More </span>
    </div>
         
         
         
         
         
         
         
         
         
         
         </div>);
};

export default Dashboard;
