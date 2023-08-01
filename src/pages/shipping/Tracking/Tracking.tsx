import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Card from "../../../components/UI/Card/Card";
import Badge from "../../../components/shared/Badge/Badge";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Tracking = (props: Props) => {

  const [trackingNumber, setTrackingNumber] = useState("");
  const [tracked, setTracked] = useState<any>(false);

  const handleSubmit = (e: React.FormEvent) => {

    console.log("submitted..", tracked, trackingNumber);
    e.preventDefault();

    setTracked(true);

  };

  const toggleClose = () => {
    setTracked(false);
  }

  return (
    <Layout>
      <main className="mx-auto md:w-[70%] mt-10 px-3">
        <Card classNames="mt-5 flex flex-col justify-center p-5">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl md:text-4xl font-bold text-darkBrown">Track Your Order</h1>
            <div className="flex mt-7 items-center justify-between">
              <div className="flex-1 mr-2 md:mr-4">
                <Input
                  onChange={(e: React.FormEvent) =>
                    setTrackingNumber((e.target as HTMLInputElement).value)
                  }
                  placeholder="Enter Tracking Number"
                />
              </div>
              {tracked ? (
                <AiOutlineClose onClick={toggleClose} />
              ) : (
                <div className="">
                  <Button text="Track" classNames="px-6" buttonType="submit" />
                </div>
              )}
            </div>
          </form>
          
          { tracked && (
            <div className="mt-10 slideup">
              <div>
                <div className="flex items-center mb-3">
                  <h3 className="font-bold mr-2">Initiated By: </h3>
                  <p>Jane Doe</p>
                </div>

                <div className="flex items-center mb-3">
                  <h3 className="font-bold mr-2">Order ID: </h3>
                  <p>Jane Doe</p>
                </div>

                <div className="flex items-center mb-3">
                  <h3 className="font-bold mr-2">Order ID: </h3>
                  <p>kz346000lo8</p>
                </div>

                <div className="flex items-center mb-3">
                  <h3 className="font-bold mr-2">Item Name:</h3>
                  <p>Summer Liner</p>
                </div>

                <div className="flex items-center mb-3">
                  <h3 className="font-bold mr-2">Category:</h3>
                  <p>Yatches</p>
                </div>

                <div className="flex items-center mb-3">
                  <h3 className="font-bold mr-2">Status:</h3>
                  <p>
                    <Badge text="Active" />
                  </p>
                </div>
              </div>
            </div>
          ) }
        </Card>
      </main>
    </Layout>
  );
};

export default Tracking;
