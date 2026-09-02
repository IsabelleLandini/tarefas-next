import type { Tarefa } from "@/types/tarefa";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
    return tarefas.length
}