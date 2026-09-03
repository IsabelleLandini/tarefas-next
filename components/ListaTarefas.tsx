"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import type { Tarefa } from "@/types/tarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

type ListaTarefasProps = {
    tarefas: Tarefa[]
}

export default function ListaTarefas(props: ListaTarefasProps) {
    const [tarefas, setTarefas] = useState(props.tarefas) 

    const quantidade = useContadorDeTarefas(tarefas)

    function adicionarTarefa(nome: string) {
       const novaTarefa: Tarefa = {
        id: Date.now(),
        nome,
        descricao: "",
        concluida: false
       }
       setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa])
    }

    return (
        <div>
            <NovaTarefa onAdicionarTarefa={adicionarTarefa} />
            <p>Total de tarefas: {quantidade}</p>
            

            {tarefas.map((tarefa) => {
                return (
                    <div key={tarefa.id}>
                        <h3>{tarefa.nome}</h3>
                        <p>{tarefa.descricao}</p>
                        <p>{tarefa.concluida? "Concluída" : "Pendente"}</p>
                    </div>
            )})}
        </div>   
    ) 
}