// import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import InputField from "./components/InputField";
import ResultPanel from "./components/ResultPanel";

function App() {

  return (
    <div className="calculator">
      <Header></Header>
      <main className='grid'>
        <InputField></InputField>
        <ResultPanel></ResultPanel>
      </main>
      <div class="buttons">
        <button id="resetBtn" class="btn-secondary">پاک کردن</button>
      </div>
    </div>
  );
}

export default App
