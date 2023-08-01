import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/UI/Button/Button";
import { HAULAGE_DATA } from "../../constants/data/haulageData";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createHaulage } from "../../features/logistics/logisticsSlice";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { toggleValue } from "../../features/UI/uiSlice";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Modal from "../../components/UI/Modal/Modal";
import ConfirmedIcon from "../../assets/confirmed.svg";
import { AiOutlineClose } from "react-icons/ai";

const Haulage = (): JSX.Element | null => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    address: "",
    state: "",
    country: "",
    dropOffLocation: "",
    haulage_truck: "",

    haulage_custom_option: "",
    trip_type: "",
    budget: "",
    item_type: "",
  });

  const {
    pickupLocation,
    address,
    state,
    country,
    dropOffLocation,
    haulage_truck,

    haulage_custom_option,
    trip_type,
    budget,
    item_type,
  } = formData;

  const [selectIndex, setSelectIndex] = useState(0);
  const [showCustomHaulage, setShowCustomHaulage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isSuccess, isLoading, isError } = useAppSelector(
    (state) => state.logistics
  );
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    }));
  };

  const handleSubmit = () => {
    console.log("formData", formData);
    dispatch(createHaulage(formData));
  };

  return (
    <Layout>
      <>
        {isSuccess && (
          <Backdrop
            show={isSuccess}
            // toggleBackDrop={() => setShowModal(false)}
          />
        )}
        {isSuccess && (
          <Modal>
            {/* <div onClick={() => setShowModal(false)}>
              <AiOutlineClose size={34} />
            </div> */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl text-primary mb-3">Order Confirmed</h2>
              <img src={ConfirmedIcon} className="w-44 h-44" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center mt-4 text-center">
              <p>We've Received your order</p>
              <p className="mt-4">
                We are processing, and would get back to you in the next 2hrs
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <Button text="See Orders" />
            </div>
          </Modal>
        )}
      </>
      <main>
        {selectIndex == 0 && (
          <form className="px-10 mt-10 space-y-5">
            <div>
              <label htmlFor="">Pickup Location</label>
              <Input
                inputType="text"
                id="pickupLocation"
                value={pickupLocation}
                onChange={handleChange}
                placeholder="Pickup Location"
              />
            </div>

            <div>
              <label htmlFor="">Address</label>
              <Input
                inputType="text"
                id="address"
                value={address}
                onChange={handleChange}
                placeholder="Pickup Location"
              />
            </div>

            <div>
              <label htmlFor="">Drop Off Location</label>
              <Input
                inputType="text"
                id="dropOffLocation"
                value={dropOffLocation}
                onChange={handleChange}
                placeholder="Pickup Location"
              />
            </div>

            <div>
              <label htmlFor="">state</label>
              <Input
                inputType="text"
                id="state"
                value={state}
                onChange={handleChange}
                placeholder="Pickup Location"
              />
            </div>

            <div>
              <label htmlFor="">country</label>
              <Input
                inputType="text"
                id="country"
                value={country}
                onChange={handleChange}
                placeholder="Pickup Location"
              />
            </div>

            <div className="flex items-end justify-end mt-4 mb-5">
              <Button
                text="Next"
                onClick={() => setSelectIndex(1)}
                classNames="px-10"
              />
            </div>
          </form>
        )}

        {selectIndex == 1 && (
          <form className="px-10 mt-10 space-y-5">
            <div>
              <label htmlFor="">Select Haulage Truck</label>
              <br />
              <select
                className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none text-[#272727]`}
                id="haulage_truck"
                value={haulage_truck}
                onChange={handleChange}
              >
                <>
                  <option value="">Select Haulage Truck</option>
                  {HAULAGE_DATA.map(({ item }) => (
                    <option value={item} key={item}>{item}</option>
                  ))}
                </>
              </select>
            </div>

            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowCustomHaulage(!showCustomHaulage)}
            >
              Custom Haulage truck
              <BsPlus className="mr-4" size={22} />
            </div>

            {showCustomHaulage && (
              <div>
                <label htmlFor="">Other Haulage Option (please Specify)</label>
                <Input
                  inputType="text"
                  id="haulage_custom_option"
                  value={haulage_custom_option}
                  onChange={handleChange}
                  placeholder="haulage option"
                />
              </div>
            )}

            <div>
              <label htmlFor="">Type of trip</label>
              <br />
              <select
                className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none text-[#272727]`}
                id="trip_type"
                value={trip_type}
                onChange={handleChange}
              >
                <option value="">Select Trip Type</option>
                <option value={"one-way"}>one Way</option>
                <option value={"two-way"}>Two Way</option>
              </select>
            </div>

            <div>
              <label htmlFor="">What's Your offer</label>
              <Input
                inputType="text"
                id="budget"
                value={budget}
                onChange={handleChange}
                placeholder="Budget"
              />
            </div>

            <div>
              <label htmlFor="">item Type/List</label>
              <Input
                inputType="text"
                id="item_type"
                value={item_type}
                onChange={handleChange}
                placeholder="Pickup Location"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Back"
                  onClick={() => setSelectIndex(0)}
                  classNames="px-10"
                />
              </div>

              <div className="flex items-end justify-end mt-4 mb-5">
                {isLoading ? (
                  <Button text="text" loader classNames="px-10" />
                ) : (
                  <Button
                    text="Submit"
                    onClick={handleSubmit}
                    classNames="px-10"
                  />
                )}
              </div>
            </div>
          </form>
        )}
      </main>
    </Layout>
  );
};

export default Haulage;
