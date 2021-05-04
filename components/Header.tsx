import { Logo } from "./Logo";
import { styled, config } from "./stitches.config";
import { ThemeChanger } from "./ThemeChanger";

const MyDiv = styled("div", {
  background: "$blue100",
});

const Header: React.FC<{ title: string }> = ({ title }) => (
  <MyDiv>
    <Logo
      height="50"
      width="50"
      style={{ fill: config.theme.colors.blue300 }}
    />
    <ThemeChanger />
    <h2>
      Starter
      <hr />
    </h2>
    <h1>{title}</h1>
  </MyDiv>
);

export default Header;
