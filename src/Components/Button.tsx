import { ReactNode } from "react";
import classNamesUtil from "./classNamesUtil";

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>{
   children: ReactNode;
   color: string;
   onClick: () => void;
}

const Button = ({children, color, onClick, ...rest}: ButtonProps) => {

   const colorVariants: { [key: string]: string } = {
      blue: 'bg-blue-600 hover:bg-blue-500 text-white',
      red: 'bg-red-500 hover:bg-red-400 text-white',
      yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }

 return (
    <button 
      onClick={onClick}
      className={`${colorVariants[color]}`} 
      {...rest}>
      {children}
   </button>
 )
}

export default Button;