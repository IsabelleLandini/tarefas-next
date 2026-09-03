import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("renderiza as tarefas iniciais e o contador", () => {
    render(<Home />)

    expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();

    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();
}); 