import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import {
  HeaderContainer,
  HeaderActions,
  Link,
  Counter
} from "./styles";

export const Header = () => {

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo}  />
      </NavLink>

      <HeaderActions>
        <div>
          <MapPin weight="fill" />
          <span>Vila Nova de Gaia, PT</span>
        </div>

        <Link to="/checkout">
          <Counter>3</Counter>
          <ShoppingCart weight="fill" />
        </Link>

      </HeaderActions>

    </HeaderContainer>
  );
}
