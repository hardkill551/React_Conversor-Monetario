import { useState } from "react";

export default function Conversor() {
    const [valor, setValor] = useState(null)
    const [moeda, setMoeda] = useState({ name: "Dólar Americano", code: "USD", price: 5.39 })
    const [valorConvertido, setValorConvertido] = useState(null)
  return (
    <div className="box">
      <h1>Conversor Monetário</h1>
      <input placeholder="Valor em real" value={valor} onChange={e => setValor(e.target.value)}></input>
      <select id="cars" name="cars" onChange={Converter}>
        <option value="Dolar">Dólar Americano</option>
        <option value="Euro">Euro</option>
        <option value="Iene">Iene</option>
        <option value="Ethereum">Ethereum</option>
      </select>
      <button onClick={Conversao}>Converter</button>
      <p>{valorConvertido}</p>
    </div>
  );

  function Converter(e){
    if(e.target.value === "Dolar"){
        setMoeda({name: e.target.value, code: "$", price: 5.39})
    }
    if(e.target.value === "Iene"){
        setMoeda({name: e.target.value, code: "¥", price: 0.038})
    }
    if(e.target.value === "Euro"){
        setMoeda({name: e.target.value, code: "€", price: 5.46})
    }
    if(e.target.value === "Ethereum"){
        setMoeda({name: e.target.value, code: "Ξ", price: 8484.30})
        
    }
    
  }
  function Conversao(){
    const valorPonto = valor.replace(",",".")
    if(valorPonto>0){
    setValorConvertido(moeda.code+(valorPonto*(1/moeda.price)).toFixed(2))
}
  }
}
