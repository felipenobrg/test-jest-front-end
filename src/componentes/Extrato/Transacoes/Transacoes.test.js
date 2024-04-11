import { render, screen } from '@testing-library/react'
import Transacoes from '.'
import estilos from '../Extrato.module.css'

test('Deve renderizar o mesmo compomente com props atualizadas', () => {
    const transacao = {
        transacao: 'Depósito',
        valor: 100
    }
    const {rerender} = render(<Transacoes estilos={estilos} transacao={transacao}/>)
    const tipoTransacao = screen.getByTestId('tipoTransacao')
    const valorTransacao = screen.getByTestId('valorTransacao')

    expect(tipoTransacao).toHaveTextContent('Depósito')
    expect(valorTransacao).toHaveTextContent('R$ 100')

    const novaTransacao = {
        transacao: 'Transferência',
        valor: 50
    }

    const novoTipoTransacao = screen.getByTestId('tipoTransacao')
    const novoTransacao = screen.getByTestId('valorTransacao')

    expect(novoTipoTransacao).toHaveTextContent('Transferência')
    expect(novoTransacao).toHaveTextContent('R$ -50')

})