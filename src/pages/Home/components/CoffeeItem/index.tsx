import { CoffeType } from "../../../../types/coffees";

import {
  CoffeeItemContainer,
  Badges,
  Title,
  Description
} from "./styles";

import expressoTradicional from '../../../../assets/images/expresso-tradicional.svg';

interface CoffeeItemProps {
  coffee: CoffeType
}

export const CoffeeItem = ({ coffee }: CoffeeItemProps) => {
  return (
    <CoffeeItemContainer>

      <img src={expressoTradicional} alt="Expresso Tradicional" />

      <Badges>
        <span>{coffee.labels[0]}</span>
      </Badges>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

    </CoffeeItemContainer>
  )
}