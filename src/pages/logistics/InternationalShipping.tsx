import React, { useState } from "react";

import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Logo } from "../../constants/images/images";
import ConfirmedIcon from "../../assets/confirmed.svg";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Modal from "../../components/UI/Modal/Modal";

const InternationalShipping = () => {
  const [formData, setFormData] = useState<any>({
    sender_firstName: "",
    sender_lastName: "",
    sender_address: "",
    sender_country: "",
    sender_city: "",
    sender_postal_code: "",
    sender_phone_number: "",
    sender_email: "",

    receiver_firstName: "",
    receiver_lastName: "",
    receiver_address: "",
    receiver_country: "",
    receiver_city: "",
    receiver_postal_code: "",
    receiver_phone_number: "",
    receiver_email: "",

    item_category: "",
    item_weight: "",
    item_value: "",
    quantity: "",
    description: "",
    dropoff_type: ""
  });

  const {
    sender_firstName,
    sender_lastName,
    sender_address,
    sender_country,
    sender_city,
    sender_postal_code,
    sender_phone_number,
    sender_email,

    receiver_firstName,
    receiver_lastName,
    receiver_address,
    receiver_country,
    receiver_city,
    receiver_postal_code,
    receiver_phone_number,
    receiver_email,

    item_category,
    item_weight,
    item_value,
    description,
    quantity,
    dropoff_type
  } = formData;

  const [selectIndex, setSelectIndex] = useState<any>(0);
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
    // dispatch(createHaulage(formData));
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
            <h2 className="text-3xl">Sender Details</h2>

            <div>
              <label htmlFor="">sender firstname</label>
              <Input
                inputType="text"
                id="sender_firstName"
                value={sender_firstName}
                onChange={handleChange}
                placeholder="sender_firstName"
              />
            </div>

            <div>
              <label htmlFor="">sender lastname</label>
              <Input
                inputType="text"
                id="sender_lastName"
                value={sender_lastName}
                onChange={handleChange}
                placeholder="sender last Name"
              />
            </div>

            <div>
              <label htmlFor="">sender phone number</label>
              <Input
                inputType="text"
                id="sender_phone_number"
                value={sender_phone_number}
                onChange={handleChange}
                placeholder="Sender Phone Number"
              />
            </div>

            <div>
              <label htmlFor="">Sender Country</label>
              <Input
                inputType="text"
                id="sender_country"
                value={sender_country}
                onChange={handleChange}
                placeholder="Sender Phone Number"
              />
            </div>

            <div>
              <label htmlFor="sender_email">sender email</label>
              <Input
                inputType="text"
                id="sender_email"
                value={sender_email}
                onChange={handleChange}
                placeholder="sender_email"
              />
            </div>

            <div>
              <label htmlFor="">State</label>
              <Input
                inputType="text"
                id="sender_address"
                value={sender_address}
                onChange={handleChange}
                placeholder="State"
              />
            </div>

            <div>
              <label htmlFor="">sender address</label>
              <Input
                inputType="text"
                id="sender_city"
                value={sender_city}
                onChange={handleChange}
                placeholder="sender address"
              />
            </div>

            <div>
              <label htmlFor="">sender postal code</label>
              <Input
                inputType="text"
                id="sender_postal_code"
                value={sender_postal_code}
                onChange={handleChange}
                placeholder="sender postal code"
              />
            </div>

            <div className="flex items-end justify-end mt-4 mb-10">
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
            <h2 className="text-3xl">Receiver Details</h2>
            <div>
              <label htmlFor="">receiver firstName</label>
              <Input
                inputType="text"
                id="receiver_firstName"
                value={receiver_firstName}
                onChange={handleChange}
                placeholder="Sender Phone Number"
              />
            </div>

            <div>
              <label htmlFor="sender_email">receiver lastName</label>
              <Input
                inputType="text"
                id="receiver_lastName"
                value={receiver_lastName}
                onChange={handleChange}
                placeholder="receiver lastName"
              />
            </div>

            <div>
              <label htmlFor="sender_email">Receiver phonenumber</label>
              <Input
                inputType="text"
                id="receiver_phone_number"
                value={receiver_phone_number}
                onChange={handleChange}
                placeholder="receiver lastName"
              />
            </div>

            <div>
              <label htmlFor="receiver_email">Receiver Email</label>
              <Input
                inputType="text"
                id="receiver_email"
                value={receiver_email}
                onChange={handleChange}
                placeholder="receiver_email"
              />
            </div>

            <div>
              <label htmlFor="">Receiver Country</label>
              <Input
                inputType="text"
                id="receiver_country"
                value={receiver_country}
                onChange={handleChange}
                placeholder="Receiver Country"
              />
            </div>

            <div>
              <label htmlFor="">Receiver Address</label>
              <Input
                inputType="text"
                id="receiver_address"
                value={receiver_address}
                onChange={handleChange}
                placeholder="receiver address"
              />
            </div>

            <div>
              <label htmlFor="">receiver_city</label>
              <Input
                inputType="text"
                id="receiver_city"
                value={receiver_city}
                onChange={handleChange}
                placeholder="Receiver City"
              />
            </div>

            <div>
              <label htmlFor="">receiver_postal_code</label>
              <Input
                inputType="text"
                id="receiver_postal_code"
                value={receiver_postal_code}
                onChange={handleChange}
                placeholder="Receiver Postal Code"
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
                <Button
                  text="Next"
                  onClick={() => setSelectIndex(2)}
                  classNames="px-10"
                />
              </div>
            </div>
          </form>
        )}

        {selectIndex == 2 && (
          <form className="px-10 mt-10 space-y-5">
            <h2 className="text-3xl">Add Item</h2>
            <div>
              <label htmlFor="">Category of Item</label>
              <br />
              <select
                className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none text-[#272727]`}
                id="item_category"
                value={item_category}
                onChange={handleChange}
              >
                <option value="">Item category</option>
                <option value={"one-way"}>Games</option>
                <option value={"two-way"}>Dry Foods and suppliments</option>
              </select>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Input
                inputType="text"
                id="description"
                value={description}
                onChange={handleChange}
                placeholder="description"
              />
            </div>

            <div>
              <label htmlFor="">Item Correct weight</label>
              <Input
                inputType="text"
                id="item_weight"
                value={item_weight}
                onChange={handleChange}
                placeholder="Item Weight"
              />
            </div>

            <div>
              <label htmlFor="">Total Value</label>
              <Input
                inputType="text"
                id="item_value"
                value={item_value}
                onChange={handleChange}
                placeholder="Item Weight"
              />
            </div>

            <div>
              <label htmlFor="">Quantity</label>
              <Input
                inputType="text"
                id="quantity"
                value={quantity}
                onChange={handleChange}
                placeholder="quantity"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Back"
                  onClick={() => setSelectIndex(1)}
                  classNames="px-10"
                />
              </div>

              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Next"
                  onClick={() => setSelectIndex(3)}
                  classNames="px-10"
                />
              </div>
            </div>
          </form>
        )}

        {selectIndex == 3 && (
          <form className="px-10 mt-10 space-y-5">
            <h2 className="text-3xl">Items Summary</h2>

            <Card classNames="p-5 space-y-10">
              <div>
                <h2 className="text-primary text-2xl mb-4">Sender Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  <div>
                    <h3 className="font-bold">Sender Firstname</h3>
                    <p>{sender_firstName}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Sender Lastname</h3>
                    <p>{sender_lastName}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Sender City</h3>
                    <p>{sender_city}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Sender Country</h3>
                    <p>{sender_country}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Sender Email</h3>
                    <p>{sender_email}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Sender Phone Number</h3>
                    <p>{sender_phone_number}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Sender Postal Code</h3>
                    <p>{sender_postal_code}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-primary text-2xl mb-4">Receiver Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  <div>
                    <h3 className="font-bold">Receiver Firstname</h3>
                    <p>{receiver_firstName}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Receiver Lastname</h3>
                    <p>{receiver_lastName}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Receiver City</h3>
                    <p>{receiver_city}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Receiver Country</h3>
                    <p>{receiver_country}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Receiver Email</h3>
                    <p>{receiver_email}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Receiver Phone Number</h3>
                    <p>{receiver_phone_number}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Receiver Postal Code</h3>
                    <p>{receiver_postal_code}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">Item Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div>
                    <h3 className="font-bold">Category Of Item</h3>
                    <p>{item_category}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Description</h3>
                    <p>{description}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Total Value</h3>
                    <p>{item_value}</p>
                  </div>

                  <div>
                    <h3 className="font-bold">Quantity</h3>
                    <p>{quantity}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-between">
              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Back"
                  onClick={() => setSelectIndex(2)}
                  classNames="px-10"
                />
              </div>

              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Next"
                  onClick={() => setSelectIndex(4)}
                  classNames="px-10"
                />
              </div>
            </div>
          </form>
        )}

        {selectIndex == 4 && (
          <form className="px-10 mt-10 space-y-5">
            <h2 className="text-3xl">Shipment Rates</h2>

            <Card classNames="p-5">
              <h2 className="text-xl mb-4">
                Select Your most Preferred shipment
              </h2>

              <div className="flex items-center justify-between px-10 mb-10">
                <div>
                  <img src={Logo} alt="" className="w-28" />
                </div>

                <div>
                  <h3 className="text-xl">Whoosh Diamond</h3>
                  <span className="text-xs">25 july, 2023</span>
                </div>

                <input type="radio" />
              </div>

              <div className="flex items-center justify-between px-10">
                <div>
                  <img src={Logo} alt="" className="w-28" />
                </div>

                <div>
                  <h3 className="text-xl">Whoosh Diamond</h3>
                  <span className="text-xs">25 july, 2023</span>
                </div>

                <input type="radio" />
              </div>
            </Card>

            <div className="flex items-center justify-between">
              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Back"
                  onClick={() => setSelectIndex(3)}
                  classNames="px-10"
                />
              </div>

              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Next"
                  onClick={() => setSelectIndex(5)}
                  classNames="px-10"
                />
              </div>
            </div>
          </form>
        )}

        {selectIndex == 5 && (
          <form className="px-10 mt-10 space-y-5">
            <h2 className="text-3xl">Drop Off</h2>

            <Card classNames="p-5">
              <h2>Select Dropoff Location</h2>
              <select
                className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none text-[#272727]`}
                id="dropoff_type"
                value={dropoff_type}
                onChange={handleChange}
              >
                <option value="">Select Dropoff Type</option>
                <option value={"pickup"}>Pickup</option>
                <option value={"office-drop"}>Drop at office</option>
              </select>
              
              <p>{dropoff_type === "pickup" && <p className="p-5 bg-yellow-200 rounded-md mt-3">Drop with pickup cost extra</p>}</p>  
            
            </Card>

            <div className="flex items-center justify-between">
              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Back"
                  onClick={() => setSelectIndex(4)}
                  classNames="px-10"
                />
              </div>

              <div className="flex items-end justify-end mt-4 mb-5">
                <Button
                  text="Next"
                  onClick={() => setSelectIndex(5)}
                  classNames="px-10"
                />
              </div>
            </div>
          </form>
        )}
      </main>
    </Layout>
  );
};

export default InternationalShipping;
