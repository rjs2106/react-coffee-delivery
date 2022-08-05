import { CoffeeType } from "../../../../types/coffees";
import CoffeeItem from "../CoffeeItem";
import { CoffeeListContainer, Loading } from "./CoffeeList.styles";
import { coffees } from "../../../../constants/coffees";

const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      {coffees.length === 0 && <Loading>Carregando cafés disponíveis...</Loading>}

      <div>
        {
          coffees && coffees.map((coffee: CoffeeType) => {
            return (
              <CoffeeItem
                key={coffee.id}
                coffee={coffee}
              />
            )
          })
        }
      </div>

    </CoffeeListContainer>
  );
}

export default CoffeeList;