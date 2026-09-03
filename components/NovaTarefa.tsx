"use client"; 

import { useState, type FormEvent } from "react";

type NovaTarefaProps = {
    onAdicionarTarefa: (nome: string) => void
}

export default function NovaTarefa(props: NovaTarefaProps) {
    const [nome, setNome] = useState("")
    const [erro, setErro] = useState("")

    function adicionarTarefa(e: FormEvent) {
        e.preventDefault()

        if (nome.trim() === "") { 
            setErro("Digite o nome da tarefa.")
            return
        }
        
        props.onAdicionarTarefa(nome)
    }
    return (
        <form onSubmit={adicionarTarefa}>
            <label htmlFor="nome-tarefa">Nome da tarefa</label>
            <input 
                id="nome-tarefa"
                value={nome} 
                onChange={(e) => {
                   setNome(e.target.value)
                   setErro("")
                }}
            />
            {erro && <p>{erro}</p>}
            <button>Adicionar</button>
        </form>
    )
}
