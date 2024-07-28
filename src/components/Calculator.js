import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { calculate } from '../utils/calculate';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    setInput(calculate(input));
  };

  return (
    <div className="w-64 mx-auto mt-10 p-4 bg-green-200 rounded-lg shadow-lg">
      <Display value={input} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map((value) => (
          <Button key={value} value={value.toString()} onClick={handleButtonClick} />
        ))}
        <Button value="C" onClick={handleClear} />
        <Button value="=" onClick={handleCalculate} />
      </div>
    </div>
  );
};

export default Calculator;
