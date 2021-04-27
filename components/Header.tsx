import { Logo } from "./Logo";
import { styled, config } from "./stitches.config";

const MyDiv = styled("div", {
  background: "$aDarkBlue",
});

const Header: React.FC<{ title: string }> = ({ title }) => (
  <MyDiv>
    <Logo height="50" width="50" style={{ fill: config.theme.colors.aGold }} />
    <h2>
      Allympian
      <hr />
    </h2>
    <h1>{title}</h1>
  </MyDiv>
);

export default Header;
