import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { CoffeType } from "../../../../types/coffees";

import {
  CoffeeItemContainer,
  Badges,
  Title,
  Description,
  CoffeeItemActions,
  InputNumber,
  ButtonDecrease,
  ButtonIncrease,
  CartButton
} from "./styles";


interface CoffeeItemProps {
  coffee: CoffeType
}

// Constants
const currency = "R$";
const extension = ".svg";
const imagesPath = "../../../../../public/images/coffees/";

export const CoffeeItem = ({ coffee }: CoffeeItemProps) => {

  const image = imagesPath + coffee.image + extension;

  return (
    <CoffeeItemContainer>
      <img src={image} alt={coffee.title} />

      <Badges>
        <span>{coffee.label}</span>
      </Badges>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>


      <CoffeeItemActions>
        <span>
          {currency}
          <strong>
            {coffee.price.toFixed(2)}
          </strong>
        </span>

        <InputNumber>
          <ButtonDecrease type="button">
            <Minus />
          </ButtonDecrease>

          <input type="number" min="1" max="20" step="1" value="1" />

          <ButtonIncrease type="button">
            <Plus />
          </ButtonIncrease>
        </InputNumber>

        <CartButton type="button">
          <ShoppingCart  weight="fill"/>
        </CartButton>
      </CoffeeItemActions>

    </CoffeeItemContainer>
  )
}