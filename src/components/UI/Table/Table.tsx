type TableType = {
    data: any;
    headers: any;
}

const Table = ({ data, headers }: TableType) => {
  return (
    <table className="w-full bg-white -z-50">
      <thead className="text-left">
        <tr>
          { headers && headers.map((h: any) => (
            <th className="py-2 px-4">{ h }</th>
            )) }
          {/* <th className="py-2 px-4">Location</th> */}
          {/* <th className="py-2 px-4">Consultant</th>
          <th className="py-2 px-4">Number of Agents</th> */}
        </tr>
      </thead>
      <tbody className="text-left">
        {data.map((item: any, index: any) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-white" : "bg-[#E8E8E8] rounded-md"}`}
          >
            <td className="py-2 px-4">{item._id}</td>
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4">{item.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
