import { fireEvent, render, screen } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

test("renderiza o formulário de nova tarefa", () => {
    const onAdicionarTarefa = jest.fn();

    render(<NovaTarefa onAdicionarTarefa={onAdicionarTarefa} />);

    expect(screen.getByRole("button", {name: "Adicionar"})).toBeInTheDocument();
});

test("não adiciona tarefa com nome vazio", () => {
    const onAdicionarTarefa = jest.fn();

    render(<NovaTarefa onAdicionarTarefa={onAdicionarTarefa} />);

    fireEvent.submit(document.querySelector("form")!);

    expect(onAdicionarTarefa).not.toHaveBeenCalled();
});

test("adiciona uma tarefa com nome válido", () => {
    const onAdicionarTarefa = jest.fn();

    render(<NovaTarefa onAdicionarTarefa={onAdicionarTarefa} />);

    const input = screen.getByRole("textbox", {name: "Nome da tarefa"});

    fireEvent.change(input, {target: {value: "Estudar React"}});

    fireEvent.submit(document.querySelector("form")!);

    expect(onAdicionarTarefa).toHaveBeenCalledWith("Estudar React");
});