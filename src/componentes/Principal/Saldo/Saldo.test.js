import { render, screen } from "@testing-library/react";
import Saldo from './index'

describe("Component <Saldo />", () => {
    test('Deve renderizar o saldo com valor monetário', () => {
        render(<Saldo saldo={1000} />)
        const saldo = screen.getByTestId('saldo')
        expect(saldo).toHaveTextContent('R$ 1000')
    })
})

function iniciarODia() {
    const café = prepararCafé();
    const desafios = enfrentarDesafios();
    const sucesso = combinar(café, desafios);
  
    function exibirMensagem() {
      console.log('🌟 Inspire-se com uma xícara de café e enfrente os desafios com determinação! 🌟');
      if (sucesso) {
        console.log('Lembre-se: o café é a chave para um dia bem-humorado! 😄☕️');
      } else {
        console.log('Parece que alguém esqueceu do café... 🤔☕️');
      }
    }
  
    exibirMensagem();
}

iniciarODia();
