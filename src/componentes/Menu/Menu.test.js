import { render, screen } from "@testing-library/react";
import Menu from ".";

test("Deve renderizar um link para a página inicial", () => {
    render(<Menu />)
    const linkInitialPage = screen.getByText('Inicial')
    expect(linkInitialPage).toBeInTheDocument()
})

test("Deve renderizar uma lista de links", () => {
    render(<Menu />)
    const linkList = screen.getAllByRole('link')
    expect(linkList).toHaveLength(4)
})

test("Não deve renderizar uma link para Extrato", () => {
    render(<Menu />)
    const linkExtrato = screen.queryByText('Extrato')
    expect(linkExtrato).not.toBeInTheDocument()
})

test("Deve renderizar uma lista de links com a classe link", () => {
    render(<Menu />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => expect(link).toHaveClss('links'))
    expect(links).toMatchSnapshot()
})