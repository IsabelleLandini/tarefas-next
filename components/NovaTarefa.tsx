"use client"; 

import { useState, type FormEvent } from "react";

type NovaTarefaProps = {
    onAdicionarTarefa: (nome: string) => void
}

export default function NovaTarefa(props: NovaTarefaProps) {
    const [nome, setNome] = useState("")

    function adicionarTarefa(e: FormEvent) {
        e.preventDefault()

        if (nome.trim() === "") { 
            return
        }
        
        props.onAdicionarTarefa(nome)
    }
    return (
        <form onSubmit={adicionarTarefa}>
            <input 
                value={nome} 
                onChange={(e) =>
                   setNome(e.target.value)
                }
            />
            <button>Adicionar</button>
        </form>
    )
}
