import { FormEvent, useState, useEffect} from 'react'
import { Input } from "../../Components/Input";
import styles from "./cadastro.module.css"
import {db} from '../../services/firebaseConnection'
import{
  addDoc, 
  collection,
} from 'firebase/firestore'


export function Cadastro(){
  const [nomeInput, setNomeInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [academiaInput, setAcademiaInput] = useState("")
  const [senhaInput, setSenhaInput] = useState("")
  const [repetirsenhaInput, setRepetirSenhaInput] = useState("")




  function registro(e: FormEvent){
    e.preventDefault();
    if(nomeInput === " " || emailInput === " " ||academiaInput === " " || senhaInput === " " || repetirsenhaInput === " " ){
      alert("Preencha todos os campos")
      return
    }

    addDoc(collection(db,"dados"),{
      nome:nomeInput,
      email: emailInput,
      academia: academiaInput,
      senha: senhaInput,
      repetirsenha: repetirsenhaInput,
      created: new Date()

    })
    .then(()=>{
      setNomeInput("")
      setEmailInput("")
      setAcademiaInput("")
      setSenhaInput("")
      setRepetirSenhaInput("")
      console.log("CADASTRADO COM SUCESSO")

    })
    .catch((error)=>{
      console.log("ERRO AO CADASTRAR NO BANCO"+error)
    })
  }

  return(
    <div className={styles.body}>
    
      <form className={styles.form} onSubmit={registro}>
        <Input className={styles.formInput}
           placeholder="Nome:"
           value={nomeInput}
          onChange={ (e) => setNomeInput(e.target.value) }
        />

         <Input className={styles.formInput}
           placeholder="Email:"
           value={emailInput}
           onChange={ (e) => setEmailInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Academia:"
           value={academiaInput}
          onChange={ (e) => setAcademiaInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Senha:"
           value={senhaInput}
          onChange={ (e) => setSenhaInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Repetir senha:"
           value={repetirsenhaInput}
          onChange={ (e) => setRepetirSenhaInput(e.target.value) }
        />

        <button type='submit' className='button'>ENTRAR</button>
       

      </form>
      <footer>
      <p className="text">Possui login? <a href="../Logar/login.html" className="cadastrese">Fazer login</a></p>
        
    </footer>

    
    </div>
  )
}