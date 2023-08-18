import { ReactNode } from "react";
import classNamesUtil from "./classNamesUtil";

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>{
   children: ReactNode;
   className: string;
   onClick: () => void;
}

const Button = ({children, className, onClick, ...rest}: ButtonProps) => {

 return (
    <button 
      onClick={onClick}
      className={`bg-sky-600 rounded-md p-2 m-2 ${className}`} 
      {...rest}>
      {children}
   </button>
 )
}

export default Button;