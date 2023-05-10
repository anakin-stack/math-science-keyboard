// const [keys, setKeys] = useState([
//   { heading: "Functions", symbols: ["\\sin", "\\cos", "\\tan", "\\cot", "\\sec", "\\csc", "\\arcsin", "\\arccos", "\\arctan", "\\text{acot}", "\\text{asec}", "\\text{acsc}", "\\log", "\\ln", "\\exp"] },



//   { heading: "Roots", symbols: ["\\sqrt{}", "\\sqrt[3]{}", "\\sqrt[4]{}"] },

//   { heading: "Exponents", symbols: ["x^n", "x^2", "x^3"] },
//   { heading: "Calculus", symbols: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\\nabla", "\\Delta", "\\partial"] },

//    { heading: "Brackets", symbols: ["(", ")", "[", "]", "{{}", "}"] },
//    { heading: "Constants", symbols: ["\\pi", "\\text{e}"] },
//    { heading: "Greek Letters", symbols: ["\\varphi", "\\gamma", "\\phi", "\\theta", "\\lambda", "\\mu", "\\nu", "\\rho", "\\sigma", "\\tau", "\\omega"] },
//    { heading: "Comparison", symbols: ["<", ">", "=", "\\neq", "\\approx", "\\cong", "\\equiv", "\\not\\equiv", "\\prec", "\\succ", "\\preceq", "\\succeq", "\\in", "\\notin", "\\ni", "\\not\\ni", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\nsubseteq", "\\nsupseteq"] },
//    { heading: "Logical", symbols: ["\\forall", "\\exists", "\\nexists", "\\land", "\\lor", "\\neg", "\\implies", "\\iff"] },
//    { heading: "Arithmetic", symbols: ["+", "-", "*", "/", "%", "\\pm", "!", "^\\circ", "\\div", "\\times", "\\cdot", "\\mp"] },
//    { heading: "Geometry", symbols: ["\\rightangle", "\\angle", "\\measuredangle", "\\sphericalangle", "\\parallel", "\\nparallel", "\\mid", "\\perp"] },
//    { heading: "Trigonometry", symbols: ["\\sin", "\\cos", "\\tan", "\\cot", "\\sec", "\\csc"] },
//    { heading: "Infinity", symbols: ["\\infty"] },
//    { heading: "Sets", symbols: ["\\emptyset", "\\varnothing", "\\in", "\\not\\in", "\\subsetneq", "\\supsetneq", "\\cup", "\\cap"] },
//    { heading: "Arrows", symbols: ["\\leftrightarrow", "\\rightarrow", "\\leftarrow", "\\uparrow", "\\downarrow"] },
//    { heading: "Math Operators", symbols: ["\\sum", "\\prod", "\\coprod", "\\int", "\\oint"] },
//    { heading: "Algebra", symbols: ["\\in", "\\notin", "\\cup", "\\cap", "\\setminus", "\\mid", "\\not\\mid", "\\parallel", "\\nparallel", "\\cdot", "\\cdots", "\\vdots", "\\ddots"] },
//    { heading: "Symbols", symbols: ["\\pm", "\\mp", "\\times", "\\div", "\\cdot", "\\circ", "\\ast", "\\star", "\\dagger", "\\bullet", "\\oplus", "\\otimes", "\\oslash", "\\odot", "\\propto", "\\approx", "\\sim", "\\simeq", "\\cong", "\\equiv", "\\neq", "\\leq", "\\geq", "\\ll", "\\gg", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\in", "\\ni", "\\not\\in", "\\not\\subset", "\\not\\supset", "\\not\\subseteq", "\\not\\supseteq", "\\models", "\\perp", "\\parallel", "\\leftrightarrow", "\\leftarrow", "\\rightarrow", "\\Leftrightarrow", "\\Leftarrow", "\\Rightarrow", "\\uparrow", "\\downarrow", "\\updownarrow", "\\angle", "\\bot", "\\emptyset", "\\forall", "\\exists", "\\partial", "\\nabla", "\\infty", "\\aleph", "\\beth", "\\daleth", "\\gimel", "\\wp", "\\Re", "\\Im", "\\hbar", "\\ell", "\\circledS", "\\Bbbk"] },
//  ]);

import React, { useState } from "react";
import { Button, Grid, MenuItem, Select } from '@mui/material';
import katex from 'katex';

const ScientificKeyboard = ({ handleInput }) => {
  const [keys, setKeys] = useState([
    { heading: "Functions", symbols: ["\\sin", "\\cos", "\\tan", "\\cot", "\\sec", "\\csc", "\\arcsin", "\\arccos", "\\arctan", "\\text{acot}", "\\text{asec}", "\\text{acsc}", "\\log", "\\ln", "\\exp"] },
    { heading: "Roots", symbols: ["\\sqrt{}", "\\sqrt[3]{}", "\\sqrt[4]{}"] },

    { heading: "Exponents", symbols: ["x^n", "x^2", "x^3"] },
    { heading: "Calculus", symbols: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\\nabla", "\\Delta", "\\partial"] },

    { heading: "Brackets", symbols: ["(", ")", "[", "]", "{{}", "}"] },
    { heading: "Constants", symbols: ["\\pi", "\\text{e}"] },
    { heading: "Greek Letters", symbols: ["\\varphi", "\\gamma", "\\phi", "\\theta", "\\lambda", "\\mu", "\\nu", "\\rho", "\\sigma", "\\tau", "\\omega"] },
    { heading: "Comparison", symbols: ["<", ">", "=", "\\neq", "\\approx", "\\cong", "\\equiv", "\\not\\equiv", "\\prec", "\\succ", "\\preceq", "\\succeq", "\\in", "\\notin", "\\ni", "\\not\\ni", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\nsubseteq", "\\nsupseteq"] },
    { heading: "Logical", symbols: ["\\forall", "\\exists", "\\nexists", "\\land", "\\lor", "\\neg", "\\implies", "\\iff"] },

    { heading: "Arithmetic", symbols: ["+", "-", "*", "/", "%", "\\pm", "!", "^\\circ", "\\div", "\\times", "\\cdot", "\\mp"] },
    { heading: "Geometry", symbols: [ "\\square\\mkern-10mu\\raisebox{0.3ex}{\\small{$\\scriptstyle\\langle$}}" , "\\angle", "\\measuredangle", "\\sphericalangle", "\\parallel", "\\nparallel", "\\mid", "\\perp"] },
    { heading: "Trigonometry", symbols: ["\\sin", "\\cos", "\\tan", "\\cot", "\\sec", "\\csc"] },
    { heading: "Infinity", symbols: ["\\infty"] },
    { heading: "Sets", symbols: ["\\emptyset", "\\varnothing", "\\in", "\\not\\in", "\\subsetneq", "\\supsetneq", "\\cup", "\\cap"] },
    { heading: "Arrows", symbols: ["\\leftrightarrow", "\\rightarrow", "\\leftarrow", "\\uparrow", "\\downarrow"] },
    { heading: "Math Operators", symbols: ["\\sum", "\\prod", "\\coprod", "\\int", "\\oint"] },
    { heading: "Algebra", symbols: ["\\in", "\\notin", "\\cup", "\\cap", "\\setminus", "\\mid", "\\not\\mid", "\\parallel", "\\nparallel", "\\cdot", "\\cdots", "\\vdots", "\\ddots"] },
    { heading: "Symbols", symbols: ["\\pm", "\\mp", "\\times", "\\div", "\\cdot", "\\circ", "\\ast", "\\star", "\\dagger", "\\bullet", "\\oplus", "\\otimes", "\\oslash", "\\odot", "\\propto", "\\approx", "\\sim", "\\simeq", "\\cong", "\\equiv", "\\neq", "\\leq", "\\geq", "\\ll", "\\gg", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\in", "\\ni", "\\not\\in", "\\not\\subset", "\\not\\supset", "\\not\\subseteq", "\\not\\supseteq", "\\models", "\\perp", "\\parallel", "\\leftrightarrow", "\\leftarrow", "\\rightarrow", "\\Leftrightarrow", "\\Leftarrow", "\\Rightarrow", "\\uparrow", "\\downarrow", "\\updownarrow", "\\angle", "\\bot", "\\emptyset", "\\forall", "\\exists", "\\partial", "\\nabla", "\\infty", "\\aleph", "\\beth", "\\daleth", "\\gimel", "\\wp", "\\Re", "\\Im", "\\hbar", "\\ell", "\\circledS", "\\Bbbk"] }
  ]);

  const [selectedHeading, setSelectedHeading] = useState(keys[0].heading);
  const [selectedSymbol, setSelectedSymbol] = useState(keys[0].symbols[0]);

  const handleChangeHeading = (event) => {
    setSelectedHeading(event.target.value);
    setSelectedSymbol(keys.find(key => key.heading === event.target.value).symbols[0]);
  };

  const handleChangeSymbol = (event) => {
    setSelectedSymbol(event.target.value);
    //console.log(selectedSymbol);
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Select style={{
            backgroundColor: "Grey", float: "center", color: 'black',
            padding: '15px',
            border: '10px',
            backgroundColor: "rgb(107, 77, 89)",
            borderRadius: '10px', // Add a border radius of 10px
            boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
          }} value={selectedHeading} onChange={handleChangeHeading}>
            {keys.map((key, index) => (
              <MenuItem style={{
                backgroundColor: "Grey", float: "center", color: 'black',
                padding: '15px',
                border: '10px  grey',
                backgroundColor: 'grey',
                borderRadius: '10px', // Add a border radius of 10px
                boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
              }} key={index} value={key.heading}>{key.heading}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <Select style={{
            backgroundColor: "Grey", float: "center", color: 'black',
            padding: '11px',
            border: '10px  grey',
            backgroundColor: 'grey',
            borderRadius: '10px', // Add a border radius of 10px
            boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
          }} value={selectedSymbol} onChange={handleChangeSymbol}>
            {keys.find(key => key.heading === selectedHeading).symbols.map((symbol, index) => (
              <MenuItem style={{
                backgroundColor: "Grey", float: "center", color: 'black',
                padding: '15px',
                border: '10px  grey',
                backgroundColor: 'grey',
                borderRadius: '10px', // Add a border radius of 10px
                boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
              }} onClick={() => handleInput(selectedSymbol)} key={index} value={symbol}>
                <span dangerouslySetInnerHTML={{ __html: katex.renderToString(symbol) }} />
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          {/* <Button variant="contained" onClick={() => handleInput(selectedSymbol)}>Insert</Button> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default ScientificKeyboard;
