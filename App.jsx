import React from "react";
import { Frase, HelloWorld, SayMyName, Pessoa } from "./components/index";
import "./App.css";

const App = () => {
    
    const name = "Alexandre";

    const newName = name.toUpperCase();

    function sum(a, b) { 
        return a + b;
    }

    const url = "https://via.placeholder.com/150";
    
    {/* Vc usa "{}" para escrever códigos em JS dentro do JSX, 
    ou para invocar variáveis e funções */}
    
    return (
        <div className="App">
            <h2>Alterando o JSX</h2> 
            <p>Olá, {name}!</p> 
            <p>Olá, {newName}!</p>
            <p>Soma: {2 + 2}</p>
            <p>Soma: {sum(1, 2)}</p>
            <img src={url} alt="Minha imagem" />
            <HelloWorld />
            <Frase />
            <SayMyName nome="Eduardo" num="1"/>
            <SayMyName nome="Edileuza" num="2"/>
            <SayMyName nome="Ariana" num="3"/>
            <SayMyName nome="Alexandre" num="4"/>
            <SayMyName nome="Alan" num="5"/>
            <SayMyName nome="Jonatha" num="6"/>
            <SayMyName nome={newName}/>
            <Pessoa 
                nome="Alexandre"
                idade="30"
                profissao="vagabundo"
                foto="https://via.placeholder.com/150"
            />
        </div>
    )
}

export default App;