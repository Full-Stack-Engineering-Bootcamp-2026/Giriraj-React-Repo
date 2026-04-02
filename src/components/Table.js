function Table({ data }) {
  const renderdata = data.map((options) => {
    return (
      <tr key={data.name}>
        <tdata>{data.name}</tdata>
        <tdata>{data.color}</tdata>
        <tdata>{data.score}</tdata>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Score</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>{renderdata}</tbody>
    </table>
  );
}

export default Table;
