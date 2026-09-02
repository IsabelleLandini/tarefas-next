import ListaTarefas from "@/components/ListaTarefas";

const tarefas = [
  {
    id: 1,
    nome: "Estudar Next.js",
    descricao: "Praticar Server Components",
    concluida: false
  },
  {
    id: 2,
    nome: "Fazer exercícios de TypeScript",
    descricao: "Praticar tipos, interfaces e generics",
    concluida: false
  },
  {
    id: 3,
    nome: "Estudar testes unitários",
    descricao: "Aprender Jest e Testing Library",
    concluida: false
  }
]

export default function Home() {
  return (
      <main>
        <ListaTarefas tarefas={tarefas} />
      </main>
  );
}
