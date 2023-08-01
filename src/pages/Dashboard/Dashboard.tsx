import Layout from "../../components/Layout/Layout";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center mt-10">
        <h3 className="text-2xl mb-4">Hello Isaiah Daniel</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card classNames="flex items-center justify-between p-10">
            <div>
              <h3 className="text-2xl mb-3">
                HAULAGE
              </h3>
              <p className="text-sm">
                Complete Delivery For trucks and haulage
              </p>
            </div>

            <Button text="Select" to="/haulage" classNames="rounded-md" />
          </Card>

          <Card classNames="flex items-center justify-between p-10">
            <div>
              <h3 className="text-2xl mb-3">INTERNATIONAL SHIPPING</h3>
              <p className="text-sm">
                Complete identity verification to avoid restriction on shipments
              </p>
            </div>

            <Button text="Select" to="/international" classNames="rounded-md" />
          </Card>

          <Card classNames="flex items-center justify-between p-10">
            <div>
              <h3 className="text-2xl mb-3">INTERSTATE SELECTION</h3>
              <p className="text-sm">
                Complete identity verification to avoid restriction on shipments
              </p>
            </div>

            <Button text="Select" to="/inter-state" classNames="rounded-md" />
          </Card>

          <Card classNames="flex items-center justify-between p-10">
            <div>
              <h3 className="text-2xl mb-3">Shipment Calculator</h3>
              <p className="text-sm">
                Complete identity verification to avoid restriction on shipments
              </p>
            </div>

            <Button text="Select" to="/shipping-calulator" classNames="rounded-md" />
          </Card>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;
