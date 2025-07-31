// GPT API 연결 및 function 등록

// OPENAI_API_KEY=sk-...
// NAVER_CLIENT_ID=...
// NAVER_CLIENT_SECRET=...

import { IAgenticaProps } from "@agentica/core";
import { fetchNews } from "./src/functions/fetchNews";
import { summarizeText } from "./src/functions/summarizeText";
import { translateText } from "./src/functions/translateText";

const config: IAgenticaProps = {
  llm: {
    provider: "openai",
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4", // 또는 gpt-4o
  },
  functions: [fetchNews, translateText, summarizeText],
  autoTyping: true,
};

export default config;
