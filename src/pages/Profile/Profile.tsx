import Layout from "../../components/Layout/Layout";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils";

type Props = {};

const Profile = (props: Props) => {

  const navigate = useNavigate();

  return (
    <Layout>
      <h2 className="text-4xl hidden md:block px-7 pt-7 text-greenIsh">
        Profile
      </h2>

      <section className="p-7 h-screen">
        <Card classNames="p-10 divide-y">
          <section className="flex flex-col md:flex-row items-center justify-between pb-4">
            <div className="flex flex-col md:flex-row items-center">
              <div>
                <img
                  src="https://i.stack.imgur.com/l60Hf.png"
                  className="rounded-full w-28 h-28 object-cover mr-5"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <h2 className="text-4xl text-center md:text-left text-greenIsh">
                  Isaiah Daniel
                </h2>
                <div className="flex text-center justify-center md:justify-start items-center md:mt-2">
                  <TfiLocationPin />
                  <p>Nigeria</p>
                </div>
              </div>
            </div>

            {/*  */}
          </section>

          <div className="flex flex-col md:flex-row justify-between pt-4">
            <div className="flex items-center space-y-5">
              <AiOutlineClockCircle className="mr-4" />
              <div>
                <p>Member Since</p>
                {/* <p className="text-greenIsh">{formatDate(user.createdAt)}</p> */}
                <p className="text-greenIsh">3 Years Ago</p>
              </div>
            </div>

            <div className="flex items-center space-y-5">
              {/* <img src={WalletIcon} alt="" className="mr-4" /> */}
              <div>
                <p>User Balance</p>
                <p className="text-greenIsh">
                  {/* {user && user?.bitpoints?.readToEarn} */}
                </p>
              </div>
            </div>

            <div className="flex items-center space-y-5">
              {/* <img src={MiningProfileIcon} alt="" className="mr-4" /> */}
              <div>
                <p>Member Since</p>
                <p className="text-greenIsh">3 Years Ago</p>
              </div>
            </div>
          </div>

          {/* <hr /> */}
        </Card>
      </section>
    </Layout>
  );
};

export default Profile;
