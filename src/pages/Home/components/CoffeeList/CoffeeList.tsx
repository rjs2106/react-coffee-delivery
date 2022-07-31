import { CoffeeType } from "../../../../types/coffees";
import CoffeeItem from "../CoffeeItem";
import { CoffeeListContainer } from "./CoffeeList.styles";

const coffees: CoffeeType[] = [
  {
    id: 1,
    image: "expresso-tradicional",
    label: 'Tradicional',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com agua quente e grãos moídos',
    price: 9.90
  },
  {
    id: 2,
    image: 'expresso-americano',
    label: 'Tradicional',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90
  },
  {
    id: 3,
    image: 'expresso-cremoso',
    label: 'Tradicional',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90
  },
  {
    id: 4,
    image: 'expresso-gelado',
    label: 'Gelado',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: 5,
    image: 'cafe-com-leite',
    label: 'Com Leite',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90
  },
  {
    id: 6,
    image: 'latte',
    label: 'Com Leite',
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90
  },
  {
    id: 7,
    image: 'capuccino',
    label: 'Com Leite',
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90
  },
  {
    id: 8,
    image: 'machiato',
    label: 'Com Leite',
    title: 'Machiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90
  },
  {
    id: 9,
    image: 'mocaccino',
    label: 'Com Leite',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90
  },
  {
    id: 10,
    image: 'chocolate-quente',
    label: 'Especial',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90
  },
  {
    id: 11,
    image: 'cubano',
    label: 'Alcoólico',
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90
  },
  {
    id: 12,
    image: 'havaiano',
    label: 'Especial',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90
  },
  {
    id: 13,
    image: 'arabe',
    label: 'Especial',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90
  },
  {
    id: 14,
    image: 'irlandes',
    label: 'Alcoólico',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90
  }
]

const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

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