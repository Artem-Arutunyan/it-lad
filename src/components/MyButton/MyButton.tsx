import { FC, ReactNode } from "react";
import classes from "./MyButton.module.scss";

interface ButtonProps {
  children: ReactNode;
  color: "red" | "green" | "blue";
  onBuy: () => void;
}

const MyButton: FC<ButtonProps> = ({ children, onBuy, color = "red" }) => {
  //prettier-ignore
  const { buy_btn, 
          buy_btnred,   //стиль для красной кнопки
          buy_btngreen, //стиль для зеленой кнопки
          buy_btnblue   //стиль для синей кнопки
                        } = classes;

  return (
    <button
      className={`${buy_btn} ${color == "blue" ? buy_btnblue : color == "green" ? buy_btngreen : buy_btnred}`}
      onClick={onBuy}
    >
      {children}
    </button>
  );
};

export default MyButton;
