import { useState } from "react";

export function useForm(passosForm){
    const [passoAtual, setPassoAtual] = useState(0)

    function mudarPasso(passo, evento) {
        evento.preventDefault()
        
        // aqui vai a lógica da alteração do passo
        if(passo < 0 || passo >= passosForm.length) {
            return
        }
        setPassoAtual(passo)
    }

    return{
        passoAtual,
        componenteAtual: passosForm[passoAtual],
        mudarPasso,
        ehUltimoPasso: passoAtual + 1 == passosForm.length ? true : false,
    }
}