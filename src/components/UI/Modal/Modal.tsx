import { AiOutlineClose } from "react-icons/ai";
import Card from "../Card/Card";

type ModalType = {
    children: any;
    props?: [x: string];
}

const Modal = ({ children, ...props }: ModalType) => {
  return (
    <Card classNames="z-20 px-10 py-5 xl:w-[800px] md:w-[700px] w-[80%] h-auto absolute shadow-2xl bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" { ...props }> 
        { children }
    </Card>
  )
}

export default Modal;