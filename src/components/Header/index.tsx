import logo from "../../assets/images/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  HeaderContainer,
  HeaderActions,
  CartButton,
  Counter
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} />

      <HeaderActions>
        <div>
          <MapPin weight="fill" />
          <span>Vila Nova de Gaia, PT</span>
        </div>

        <CartButton>
          <Counter>3</Counter>
          <ShoppingCart weight="fill" />
        </CartButton>

      </HeaderActions>

    </HeaderContainer>
  );
}
