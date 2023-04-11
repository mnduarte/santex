import { formatCurrency } from "../../utils/currency";
import { HeaderContainer, Info } from "./styles";

interface HeaderProps {
  subtotal: number
}

export function Header({ subtotal }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>My Store</h1>
      <Info>Subtotal: {formatCurrency(subtotal)}</Info>
    </HeaderContainer>
  );
}
