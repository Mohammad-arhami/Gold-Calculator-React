// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Header from "./components/Header";
import InputField from "./components/InputField";
import ResultPanel from "./components/ResultPanel";

function App() {

  const percentOptions = Array.from({ length: 30 }, (_, i) => i + 1);

  const [goldPrice, setGoldPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [wage, setWage] = useState('');
  const [profit, setProfit] = useState('7 %');
  const [tax, setTax] = useState('10 %');

  const price = parseFloat(goldPrice.replace(/,/g, '')) || 0;
  const w = parseFloat(weight) || 0;
  const wagePercent = parseFloat(wage) || 0;
  const profitPercent = parseFloat(profit) || 7;
  const taxPercent = parseFloat(tax) || 10;

  const goldTotal = price * w;
  const wageAmount = goldTotal * (wagePercent / 100);
  const profitAmount = (goldTotal + wageAmount) * (profitPercent / 100);
  const taxAmount = (profitAmount + wageAmount) * (taxPercent / 100);
  const total = goldTotal + wageAmount + profitAmount + taxAmount;

  const result = {
    goldPrice: goldTotal,
    wage: wageAmount,
    profit: profitAmount,
    tax: taxAmount,
    total: total,
  };

  const handleReset = () => {
    setGoldPrice('');
    setWeight('');
    setWage('');
    setProfit('7 %');
    setTax('10 %');
  };



  return (
    <div className="calculator">
      <Header></Header>
      <main className='grid'>
        <div className='card form-card'>
          <InputField
            label="نرخ روز طلا (هر گرم-تومان)"
            value={goldPrice}
            onChange={setGoldPrice}
            isPrice
          />
          <InputField
            label="وزن طلا (گرم)"
            value={weight}
            onChange={setWeight}
          />
          <InputField
            label="اجرت ساخت"
            value={wage}
            onChange={setWage}
            isCombo
            options={percentOptions}
          />
          <InputField
            label="سود فروشنده "
            value={profit}
            onChange={setProfit}
          />
          <InputField
            label="مالیات بر ارزش افزوده "
            value={tax}
            onChange={setTax}
          />
        </div>
        <ResultPanel result={result}></ResultPanel>
      </main>
      <div className="buttons">
        <button id="resetBtn" className="btn-secondary" onClick={handleReset}>پاک کردن</button>
      </div>
    </div>
  );
}

export default App
