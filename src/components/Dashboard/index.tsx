import { Summary } from "../Summary/intex";
import { TransactionsTable } from "../TransactionTable/intex";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary /> 
      <TransactionsTable /> 
    </Container>
  )
}