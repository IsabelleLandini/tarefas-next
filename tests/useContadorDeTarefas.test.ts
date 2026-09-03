import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

const tarefas = [
    {
    id: 1,
    nome: "Estudar Next.js",
    descricao: "Praticar Server Components",
    concluida: false
  },
  {
    id: 2,
    nome: "Estudar TypeScript",
    descricao: "Praticar tipos",
    concluida: false
  },
  {
    id: 3,
    nome: "Estudar Jest",
    descricao: "Praticar testes",
    concluida: false
  }
]

test("retorna a quantidade de tarefas", () => {
  // Executa o hook isoladamente para verificar o valor retornado.
    const {result} = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current).toBe(3)
});
