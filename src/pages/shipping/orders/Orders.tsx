import { Link } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import Table from "../../../components/UI/Table/Table";

type Props = {};

const Orders = (props: Props) => {

  const ORDERS = [
    { id: "wh-eygsbb", customer: "john doe" , order: "bags", deliveryDate: "24th-august-2023", status: "complete", pricing: "1000"},
    { id: "wh-eygsbb", customer: "john doe" , order: "bags", deliveryDate: "24th-august-2023", status: "complete", pricing: "complete"},
    { id: "wh-eygsbb", customer: "john doe" , order: "bags", deliveryDate: "24th-august-2023", status: "complete", pricing: "complete"},
    { id: "wh-eygsbb", customer: "john doe" , order: "bags", deliveryDate: "24th-august-2023", status: "complete", pricing: "complete"}
  ];

  return (
    <Layout>
      <main className="py-10">
        <div>
          <h2 className="text-3xl font-bold mb-3">Order Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            dicta mollitia natus fugit quas fuga temporibus, sit accusantium
            nulla deleniti.
          </p>
        </div>


        <section>
        <table className="w-full bg-white -z-50 mt-10">
            <thead className="text-left">
              <tr>
                <th className="py-2 px-4 text-xl">Order Id</th>
                <th className="py-2 px-4 text-xl">Customer</th>
                <th className="py-2 px-4 text-xl">Order</th>
                <th className="py-2 px-4 text-xl">Delivery Date</th>
                <th className="py-2 px-4 text-xl">Pricing</th>
                <th className="py-2 px-4 text-xl">status</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {ORDERS &&
                ORDERS.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-[#E8E8E8] rounded-md"
                    }`}
                  >
                    <td className="py-2 px-4">
                      <Link to={`/orders/${item.id}`}>{item.id}</Link>
                    </td>
                    <td className="py-2 px-4">
                      <Link to={`/orders/${item.id}`}>{item.customer}</Link>
                    </td>
                    <td className="py-2 px-4">
                      <Link to={`/orders/${item.id}`}>{item.order}</Link>
                    </td>
                    <td className="py-2 px-4">
                      <Link to={`/orders/${item.id}`}>{item.deliveryDate}</Link>
                    </td>
                    <td className="py-2 px-4">
                      <Link to={`/orders/${item.id}`}>{item.pricing}</Link>
                    </td>
                    <td className="py-2 px-4">
                      <Link to={`/orders/${item.id}`}>{item.status}</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  );
};

export default Orders;
