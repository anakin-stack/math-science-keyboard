import React, { useState, useEffect } from "react";
import ScientificKeyboard from "./components/scientificKeyboard ";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { WindowSharp } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import katex from 'katex';
import "./App.css";




const App = () => {


  const [outputValue, setOutputValue] = useState('');
  const [error, setError] = useState('');
  const fetchData = async (value) => {
    try {

      setInput("");
      console.log(input, "this is the input of the ");
      let reqUrl = 'http://localhost:5000/keyboard'
      const keyValue = (input);

      console.log(keyValue, "this is the key value");

      await axios.post(reqUrl, { key: keyValue })
        .then(response => {
          console.log(response.data.value, "response from server ..................................")
          const latexResponse = katex.renderToString(`${response.data.value.replace(/\$/g, "  ")} `);
          console.log(latexResponse, "Latex response from server.............");
          setOutputValue(latexResponse.replace(/(\b\w+n\+\d+)/g, (match) => {
            return match.replace(/\+/g, ", ");
          })
          )
          if (!response.ok) {
            // throw new Error('Network response was not ok');


          }
        })
        // .then(data => setOutputValue(data.value))
        .catch(error => {
          console.log('Error:', error);
          setError('Error occurred while processing the request, Please try again...');
          setTimeout(function () {
            window.location.reload();
          }, 50000);
        });
    }
    catch (error) {
      console.error(error);
      setInput(false);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log("key pressed by the user ", input);

  };

  // const element =  document.createElementById('myElement');

  const [input, setInput] = useState("");
  const string = (input)
  // const latex = katex.render(string, element,{
  //       font: 'mathit' // or another font name
  //     });

  const handleInput = (value) => {
    setInput(input + value);
    console.log(value, "idu daan value........")
    console.log(typeof (input), ":", input)
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleLatex = {};
  const inputs = input.split(" "); // Split the input into an array of separate LaTeX strings
  const latex = inputs.map((input) => katex.renderToString(input, { throwOnError: false })).join(""); // Render each LaTeX string separately and join them into a single string

  // console.log(latex, "latex of  the user input///////");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    window.location.reload();

    setOpen(false);
  }
  const handleClick = () => {
    console.log('input field submit key pressed');
  }

  // Dark theme settings.......
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchData();
    }
  };
  return (

    <ThemeProvider theme={theme}>

      <div className="app">
        <h1 style={{
          backgroundColor: "Grey", float: "center", color: 'black',
          padding: '15px',
          border: '10px  grey',
          backgroundColor: 'grey',
          borderRadius: '10px', // Add a border radius of 10px
          boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
        }}>
          Scientific Keyboard</h1>
        <p>

        </p>
        <p>
          <Button variant="outlined" onClick={handleClickOpen} style={{
            backgroundColor: "Grey", float: "center", color: 'black',
            padding: '15px',
            border: '10px  grey',
            backgroundColor: 'grey',
            borderRadius: '10px', // Add a border radius of 10px
            boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
          }}>

            Click to Open Math Keyboard
          </Button>
          <Dialog
            fullScreen
            open={open}

          // TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: "grey" }}>
              <Toolbar>
                <IconButton
                  style={{ backgroundColor: "white", color: "grey", float: "right" }}
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} style={{
                  backgroundColor: "Grey", float: "center", color: 'black',
                  padding: '15px',
                  border: '10px  grey',
                  backgroundColor: 'grey',
                  borderRadius: '10px', // Add a border radius of 10px
                  boxShadow: '10px 10px 15px rgba(10, 50, 50, 250)'
                }} variant="h6" component="div">
                  Scientific Keyboard
                </Typography>
                {/* <Button autoFocus color="inherit" style={{ backgroundColor: "grey", border: "1px solid black", width: "60px" }} onClick={handleClose}>
                save
              </Button> */}
              </Toolbar>
            </AppBar>
            <List>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input onKeyDown={handleKeyDown} type="text" value={input.split(" . ")} onChange={handleChange} size="100" style={{ width: '1000px', height: '40px', border: "1px solid black", marginRight: '10px' }} />
                <button onClick={fetchData} size="150" style={{ height: '43px', backgroundColor: 'grey', width: '160px', color: 'white', border: '1px solid black', padding: '10px ', boxShadow: '5px 10px 10px rgba(10, 50, 50, 250)' }}>Submit</button>

                <p>{ }</p>
                <p>{ }</p>
              </div>
              <p></p>

              <ScientificKeyboard handleInput={handleInput} />
              {/* <h1 style={{ backgroundColor: "grey" }}>Output: {outputValue}</h1> */}
              {error && <p>Error: {error}</p>}
              {/* {outputValue && <p>Output: {outputValue}</p>} */}
              <li className="latexcontainer" dangerouslySetInnerHTML={{ __html: latex }}></li>
              <li className="container" style={{

                borderRadius: '10px', // Add a border radius of 10px
                boxShadow: '100px 100px 150px rgba(10, 40, 100, 250)',
                maxWidth: "600px",
                wordBreak: "break-word",
                minWidth: "20ch",


              }} dangerouslySetInnerHTML={{ __html: outputValue.split(", ."), justifyContent: "center" }} ></li>

              <Button autoFocus color="inherit" style={{
                float: " right",

                backgroundColor: "grey", border: "1px black", width: "10px"
              }} onClick={handleClose}>
                Close
              </Button>


            </List>
          </Dialog>
        </p>




      </div>
    </ThemeProvider>
  );
};

export default App;
