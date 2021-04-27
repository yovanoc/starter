import { styled } from "./stitches.config";

const MyButton = styled("button", {
  background: "$aGold",
});

export interface ButtonProps {
  /**
   * Button title
   */
  title: string;
}

/**
 * Button component
 */
const Button: React.FC<ButtonProps> = ({ title }) => (
  <MyButton>{title}</MyButton>
);

export default Button;
