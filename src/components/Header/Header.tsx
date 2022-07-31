import axios from 'axios';
import { MapPin, ShoppingCart } from "phosphor-react";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import {
  HeaderContainer,
  HeaderActions,
  Link,
  Counter
} from "./Header.styles";

const Header = () => {

  const getCart = async () => {
    const { data } = await axios.get('http://localhost:3000/api/cart');
  }

  useEffect(() => {
    getCart();
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} />
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

export default Header;
