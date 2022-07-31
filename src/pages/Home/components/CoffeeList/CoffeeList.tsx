import axios from 'axios';
import { useEffect, useState } from 'react';
import { CoffeeType } from "../../../../types/coffees";
import CoffeeItem from "../CoffeeItem";
import { CoffeeListContainer, Loading } from "./CoffeeList.styles";

const CoffeeList = () => {

  const [coffees, setCoffees] = useState<CoffeeType[]>([]);

  const getCoffees = async () => {
    const { data: CoffeesResponse } = await axios.get("http://localhost:3000/api/coffees");
    setCoffees(CoffeesResponse);
  }

  useEffect(() => {
    getCoffees();
  }, [])

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      { coffees.length === 0 && <Loading>Carregando cafés disponíveis...</Loading> }

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