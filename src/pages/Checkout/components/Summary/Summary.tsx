import {
  SummaryContainer,
  SummaryContent,
  SummaryTotal
} from "./Summary.styles";

import CoffeeSummaryItem from "../CoffeeSummaryItem";

const Summary = () => {
  return (
    <SummaryContainer>
      <h1>Cafés selecionados</h1>

     <SummaryContent>
        <CoffeeSummaryItem />
        <CoffeeSummaryItem />
        <CoffeeSummaryItem />

        <SummaryTotal>
          <div>
            <p>Total de Itens</p>
            <span>R$ 29,70</span>
          </div>

          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <div>
            <h2>Total</h2>
            <h2>R$ 33,20</h2>
          </div>

          <button type="button">Confirmar Pedido</button>
        </SummaryTotal>

     </SummaryContent>

     
    </SummaryContainer>
  );
}

export default Summary;