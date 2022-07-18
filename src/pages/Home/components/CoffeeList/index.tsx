import { CoffeType } from "../../../../types/coffees";
import { CoffeeItem } from "../CoffeeItem";
import { CoffeeListContainer } from "./styles";

const coffees: CoffeType[] = [
  {
    id: 1,
    image: 'expresso-tradicional',
    labels: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com agua quente e grãos moídos',
    price: 9.90
  },
  {
    id: 2,
    image: 'expresso-tradicional',
    labels: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90
  },
  {
    id: 3,
    image: 'expresso-tradicional',
    labels: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90
  },
  {
    id: 4,
    image: 'expresso-tradicional',
    labels: ['Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: 5,
    image: 'expresso-tradicional',
    labels: ['Com Leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90
  },
  {
    id: 6,
    image: 'expresso-tradicional',
    labels: ['Com Leite'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90
  },
  {
    id: 7,
    image: 'expresso-tradicional',
    labels: ['Com Leite'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90
  },
  {
    id: 8,
    image: 'expresso-tradicional',
    labels: ['Com Leite'],
    title: 'Machiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90
  }
]

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <div>
        {
          coffees && coffees.map((coffee: CoffeType) => {
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