import React from "react";
import Layout from "../../../components/Layout/Layout";
import Button from "../../../components/UI/Button/Button";
import Card from "../../../components/UI/Card/Card";

type Props = {};

const ShippingCalculator = (props: Props) => {
  return (
    <Layout>
      <main>
        <h2 className="text-2xl font-bold py-4">Shipment Calculator, please choose from Below</h2>
        <Card classNames="flex items-center justify-between p-10">
          <div>
            <h3 className="text-2xl mb-3">Interstate Shipment</h3>
            <p className="text-sm">
              Complete identity verification to avoid restriction on shipments
            </p>
          </div>

          <Button
            text="Select"
            to="/shipping-calulator/inter-state"
            classNames="rounded-md"
          />
        </Card>
        <Card classNames="flex items-center justify-between p-10">
          <div>
            <h3 className="text-2xl mb-3">International Shipment</h3>
            <p className="text-sm">
              Complete identity verification to avoid restriction on shipments
            </p>
          </div>

          <Button
            text="Select"
            to="/shipping-calulator/international"
            classNames="rounded-md"
          />
        </Card>
      </main>
    </Layout>
  );
};

export default ShippingCalculator;
