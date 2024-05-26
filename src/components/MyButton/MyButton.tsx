import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  color?: "red" | "green" | "blue";
  onClick: () => void;
}

const MyButton: FC<ButtonProps> = ({ children, onClick, color = "red" }) => {
  //prettier-ignore
  return (
    <button
      className={classNames({
            "text-white uppercase px-5 py-2 rounded-lg":true, 
            'bg-red-500': color === 'red',  
            'bg-green-500': color === 'green',
            'bg-blue-500': color === 'blue',
                              }
                )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
