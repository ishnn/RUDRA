/* eslint-disable react/prop-types */



export default function Table ({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Commander</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.commander}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



