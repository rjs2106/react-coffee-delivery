import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CoffeType } from "../../../../types/coffees";

// Styles
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

// Constants
const currency = "R$";
const extension = ".svg";
const imagesPath = "../../../../../public/images/coffees/";

interface CoffeeItemProps {
  coffee: CoffeType
}

export const CoffeeItem = ({ coffee }: CoffeeItemProps) => {

  const image = imagesPath + coffee.image + extension;

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(state => state + 1);
  }
  const handleDecreaseQuantity = () => {
    if (quantity !== 1) {
      setQuantity(state => state - 1);
    }
  }

  return (
    <CoffeeItemContainer>
      <img src={image} alt={coffee.title} />

      <Badges>
        <span>
          {coffee.label}
        </span>
      </Badges>

      <Title>
        {coffee.title}
      </Title>

      <Description>
        {coffee.description}
      </Description>

      <CoffeeItemActions>
        <span>
          {currency}
          <strong>
            {coffee.price.toFixed(2)}
          </strong>
        </span>

        <InputNumber>
          <ButtonDecrease type="button" onClick={handleDecreaseQuantity}>
            <Minus />
          </ButtonDecrease>

          <input
            type="number"
            min="1"
            max="100"
            step="1"
            value={quantity}
            onChange={() => { }}
          />

          <ButtonIncrease type="button" onClick={handleIncreaseQuantity}>
            <Plus />
          </ButtonIncrease>
        </InputNumber>

        <CartButton type="button">
          <ShoppingCart weight="fill" />
        </CartButton>
      </CoffeeItemActions>
    </CoffeeItemContainer>
  )
}