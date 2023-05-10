const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: "G:\reacttest\server\app.js" }));
app.use(bodyParser.json());


app.get('/api/data', (req, res) => {
  const data = { value: 'Hello from the server!', req };
  res.json(data);
  console.log("got response", data)
});

app.listen(5000, () => console.log('Server listening on port 5000'));

app.post('/keyboard', (req, res) => {
  key = req.body.key
  query = key.toString();
  console.log('query: this is the converted string of the user input ', typeof (query), query);
  userQuery = { "query": query };

  console.log(userQuery, "user query sent  to server................................................................");

  const configuration = new Configuration({
    apiKey: "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",
  });
  console.log("set the configuration  properties................................................................")
  
  const openai = new OpenAIApi(configuration);
  console.log("new  configuration  properties set for the api................................................................")
  
  // const latexQuery = "$\int\limits_{x\in C}dx$";
  const response =  openai.createCompletion({
    model: "text-davinci-003",
    prompt: query,
    max_tokens: 3000,
    temperature: 0.7,
  });
  response.then((result) => {
    console.log(result.data.choices[0].text);
    const responseData = { value: result.data.choices[0].text };
    res.json(responseData);
  }).catch((error) => {
    console.log(error);
  });
  
});
  // console.log("response: ", response.text);

//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
//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
