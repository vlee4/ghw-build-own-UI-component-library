export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>{}

const Button = (props: ButtonProps) => {
 return (
    <button 
      className="text-sky-50 rounded-md bg-sky-400 hover:bg-sky-600 p-2 m-2 " {...props}>
      {props.children}
   </button>
 )
}

export default Button;