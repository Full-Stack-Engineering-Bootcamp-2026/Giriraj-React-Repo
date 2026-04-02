import Table from '../components/Table';

function TablePage() {
  const data=[{name:"Red",color:"bg-red-500",score:"5"},
              {name:"Yellow",color:"bg-yellow-500",score:"4"},
              {name:"Orange",color:"bg-orange-500",score:"5"},
              {name:"pink",color:"bg-pink-500",score:"5"}



  ]
  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
