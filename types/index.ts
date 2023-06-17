import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TileProps {
    name: string;
    type: string;
    color: string;
    src: string;
    size: string;
    material: string;
    usage: string;
    feature: string;
    detail: string;
}
export interface CarpetProps {
    name: string;
    origin: string;
    type: string;
    color: string;
    src: string;
    size: string;
    material: string;
    year: string;
    structure: string;
    floor_grip: string;
}
