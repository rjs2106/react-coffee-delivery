import axios from 'axios';
import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CoffeeType } from "../../../../types/coffees";

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
} from "./CoffeeItem.styles";

interface CoffeeItemProps {
  coffee: CoffeeType
}

const CoffeeItem = ({ coffee }: CoffeeItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(state => state + 1);
  }
  const handleDecreaseQuantity = () => {
    if (quantity !== 1) {
      setQuantity(state => state - 1);
    }
  }

  const handleAddToCart = async () => {
    axios.post("http://localhost:3000/api/addToCart", {
      id: coffee.id,
      quantity
    });
  }

  return (
    <CoffeeItemContainer>
      <img src={`./images/coffees/${coffee.image}.svg`} alt={coffee.title} />

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
          R$
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

        <CartButton type="button" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </CartButton>
      </CoffeeItemActions>
    </CoffeeItemContainer>
  )
}

export default CoffeeItem;