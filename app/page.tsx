
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
    concluida: true
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
        {tarefas.map((tarefa) => {
          return (
            <div key={tarefa.id}>
              <h3>{tarefa.nome}</h3>
              <p>{tarefa.descricao}</p>
              <p>{tarefa.concluida? "Concluída" : "Pendente"}</p>
            </div>
          );
        })}
      </main>
  );
}
