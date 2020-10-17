import React from 'react';
import './App.css';
import withTaxes from './hoc/withTaxes';

function App(props) {
  const {nominal, aguinaldo, calculoAguinaldo} = props;
  return (
    <div className="App">
      <div className="App-body">
      <header>
          <h1>Hoc pattern example <br/>(calculadora de aguinaldo uruguayo)</h1>
      </header>
      <main>
            <label>Salario mensual nominal</label><br/>
            <input type="number" onChange={(e)=>{calculoAguinaldo(e.target.value)}} />
        <p>{"Salario nominal: $" + nominal}</p>
        <p>{"Aguinaldo: $" + aguinaldo}</p>
      </main>
      </div>
    </div>
  );
}

export default withTaxes(App)({
  nominal:0,
  aguinaldo:0
});
