import React from 'react';
import { Counter } from './features/counter/Counter';
import Input from './features/text/Input';
import Output from './features/text/Output';
import {Blogs} from "./features/blogs/Blogs";
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
      <Output />
      <Blogs />
    </div>
  );
}

export default App;
