import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API;

if (!openaiApiKey) {
  console.log("OpenAI API key is not set");
  process.exit(1);
  //this closes the backend if the API key is not set.
}

const configuration = new Configuration({
  apikey: openaiApiKey,
});
//created the configuration for openai

const openai = new OpenAIApi(configuration);
//then we have created an instance and exported it.

export default openai;
