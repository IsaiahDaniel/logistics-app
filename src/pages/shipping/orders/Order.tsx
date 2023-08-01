import React from "react";
import Layout from "../../../components/Layout/Layout";
import Card from "../../../components/UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Badge from "../../../components/shared/Badge/Badge";

type Props = {};

const Order = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <main className="mt-10">
        <div
          className="flex items-center cursor-pointer mb-4"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack size={22} />
          <p>Back</p>
        </div>
        <Card classNames="p-10 divide-y">
          <div className="flex items-center justify-between py-5">
            <h3 className="text-3xl">Order Details</h3>
            <Badge text="Active" />
          </div>
          <section className="flex flex-col justify-between py-3 pb-4">
            <h2>Sender Details</h2>

            {/* <h2 className="text-primary text-2xl mb-4">Sender Details</h2> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
              <div>
                <h3 className="font-bold">Sender Firstname</h3>
                <p>sender_firstName</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Lastname</h3>
                <p>sender_lastName</p>
              </div>

              <div>
                <h3 className="font-bold">Sender City</h3>
                <p>sender_city</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Country</h3>
                <p>sender_country</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Email</h3>
                <p>sender_email</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Phone Number</h3>
                <p>sender_phone_number</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Postal Code</h3>
                <p>sender_postal_code</p>
              </div>
            </div>
          </section>

          <div className="py-4 mt-10">
            <h2>Receiver Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
              <div>
                <h3 className="font-bold">Sender Firstname</h3>
                <p>sender_firstName</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Lastname</h3>
                <p>sender_lastName</p>
              </div>

              <div>
                <h3 className="font-bold">Sender City</h3>
                <p>sender_city</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Country</h3>
                <p>sender_country</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Email</h3>
                <p>sender_email</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Phone Number</h3>
                <p>sender_phone_number</p>
              </div>

              <div>
                <h3 className="font-bold">Sender Postal Code</h3>
                <p>sender_postal_code</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between py-4 mt-10">
            <h2>Item Details</h2>
          </div>
        </Card>
      </main>
    </Layout>
  );
};

export default Order;
