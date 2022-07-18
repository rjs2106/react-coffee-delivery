import { useTheme } from 'styled-components';
import { ThemeType } from '../../../../styles/themes/default';

import {
  ShoppingCartSimple,
  Package,
  Timer,
  Coffee
} from 'phosphor-react';

import {
  IntroContainer,
  LeftContainer,
  RightContainer,
  Descriptions,
  Item
} from "./styles";

import coffeeImage from '../../../../assets/images/coffee.svg';

export const Intro = () => {
  const theme = useTheme() as ThemeType;

  return (
    <IntroContainer>
      <LeftContainer>
        <h1>
          Encontre o café perfeito para qualquer hora do dia
        </h1>

        <p>
          Com o Coffee Delivery você recebe
          seu café onde estiver, a qualquer hora.
        </p>

        <Descriptions>
          <Item background={theme.yellow_700} >
            <ShoppingCartSimple weight="fill" />
            <span>Compra simples e segura</span>
          </Item>

          <Item background={theme.grey_700} >
            <Package weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </Item>

          <Item background={theme.yellow_500} >
            <Timer weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </Item>

          <Item background={theme.purple_700} >
            <Coffee weight="fill" />
            <span>O café chega fresquinho até você</span>
          </Item>
        </Descriptions>
      </LeftContainer>

      <RightContainer>
        <img src={coffeeImage} alt="Copo de café" />
      </RightContainer>
    </IntroContainer>
  );
}
