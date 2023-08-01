import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Card from "../../../components/UI/Card/Card";
import { COUNTRIES } from "../../../constants/data/countries";
import Input from "../../../components/UI/Input/Input";
import { useAppSelector } from "../../../app/hooks";
import Button from "../../../components/UI/Button/Button";
import { BiArrowBack } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

const ShippingCalculatorInternational = (props: Props) => {
  const [formData, setFormData] = useState({
    country: "",
    item_weight: "",
  });

  const { country, item_weight } = formData;

  const { isSuccess, isLoading, isError } = useAppSelector(
    (state) => state.logistics
  );

  const handleChange = (e: React.FormEvent) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    }));
  };

  const handleSubmit = () => {
    console.log("formData", formData);
    // dispatch(createHaulage(formData));
  };

  const navigate = useNavigate();

  return (
    <Layout>
      <main className="mt-10">
        <div
          className="flex items-center cursor-pointer mb-4"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack size={22} className="mr-1" />
          <p>Back</p>
        </div>
        <h2 className="text-2xl mb-3">Calulate International Shipping Cost</h2>
        <Card classNames="p-5 py-10">
          <h2>Select Country</h2>
          <select
            className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none text-[#272727]`}
            id="country"
            value={country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {COUNTRIES.map((c) => (
              <option value={c.country}>{c.country}</option>
            ))}
          </select>

          <div className="mt-5">
            <label htmlFor="">Item Weight</label>
            <Input
              inputType="text"
              id="haulage_custom_option"
              value={item_weight}
              onChange={handleChange}
              placeholder="item weight"
            />
          </div>

          <div className="mt-4 mb-5">
            {isLoading ? (
              <Button text="text" loader classNames="px-10 w-full" />
            ) : (
              <Button
                text="Submit"
                onClick={handleSubmit}
                classNames="px-10 w-full"
              />
            )}
          </div>

          {/* <p>{dropoff_type === "pickup" && <p className="p-5 bg-yellow-200 rounded-md mt-3">Drop with pickup cost extra</p>}</p>   */}
        </Card>
      </main>
    </Layout>
  );
};

export default ShippingCalculatorInternational;
