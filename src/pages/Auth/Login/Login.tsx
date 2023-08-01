import { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import Card from '../../../components/UI/Card/Card'
import Input from '../../../components/UI/Input/Input';

import {
  AiFillEye,
  AiOutlineEyeInvisible,
} from "../../../constants/icons/icons";
import { Logo } from '../../../constants/images/images';

type Props = {}

const Login = (props: Props) => {

  const [togglePassword, setTogglePassword] = useState(false);
  const [formData, setFormData] = useState<any>({
    email: "",
    password: ""
  });

  const handleChange = (e: React.FormEvent) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    }));
  };

  const {  email, password } = formData;

  return (
    <div className='flex flex-col items-center justify-center h-screen mx-10  '>
        <Card classNames='px-10 py-6 w-full md:w-1/2'>
          <div className="flex flex-col items-center justify-center mb-10">
            <img src={Logo} alt='Logo' className='w-56' />
          </div>
          <h2 className='text-2xl text-center font-bold'>Welcome back</h2>
          <form action="">
            <div className='py-2'>
              <label htmlFor="">Email</label>
              <Input placeholder='Email' inputType='email' />
            </div>

            <div className='py-2'>
              <label htmlFor="">Password</label>
              <Input
                placeholder="Password"
                id="password"
                withIcon
                iconStyles={{ color: "green", size: 23 }}
                iconClick={() => setTogglePassword(!togglePassword)}
                Icon={togglePassword ? AiOutlineEyeInvisible : AiFillEye}
                value={password}
                onChange={(e: React.FormEvent) => {
                  handleChange(e);                  
                }}
                type={togglePassword ? "text" : "password"}
              />
            </div>

            <div className='w-full mt-4'>
              <Button text='Login'  classNames='rounded-md w-full'/>
            </div>
          </form>
        </Card>
    </div>
  )
}

export default Login