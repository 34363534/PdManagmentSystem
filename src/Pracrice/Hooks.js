import { Table } from "react-bootstrap";

function Tb() {
  const user = [
    {
      name: "mukesh",
      email: "mukesh@gmail.com",
      mobile: 989778788,
      Address: [
        {
          city: "Gopalganj",
          hometown: "patna",
        },
      ],
    },
    {
      name: "Ramesh",
      email: "Ramesh@gmail.com",
      mobile: 909778780,
      Address: [
        {
          city: "Gaya",
          hometown: "patna",
        },
      ],
    },
    {
      name: "Nitesh",
      email: "nitesh@gmail.com",
      mobile: 9897787444,
      Address: [
        {
          city: "motihari",
          hometown: "patna",
        },
      ],
    },
    {
      name: "Sarabh",
      email: "sb@gmail.com",
      mobile: 9797784543,
      Address: [
        {
          city: "Bhagalpur",
          hometown: "patna",
        },
      ],
    },
  ];
  return (
    <div>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>mobile</th>
            <th>Address</th>
          </tr>

          {user.map((et, i) => (
            <tr key={i}>
              <td>{et.name}</td>
              <td>{et.email}</td>
              <td>{et.mobile}</td>
              <td>
                <Table striped variant="dark">
                  <tbody>
                    <tr>
                      <th>city</th>
                      <th>hometown</th>
                    </tr>
                    {et.Address.map((d) => (
                      <tr key={i}>
                        <td>{d.city}</td>
                        <td>{d.hometown}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Tb;
