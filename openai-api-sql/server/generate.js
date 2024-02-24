//here we will generate our sql

import openaiClient from "./api.js";

const generateSql = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert the following natural language description into a SQL Query: \n\n${queryDescription}.`,
    max_tokens: 100,
    temperature: 0, //same completion every single time if set to 0, if 10 then the prompt becomes creative.
  });
  return response.data.choices[0].text;
};

export default generateSql;
