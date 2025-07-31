import { Agentica } from "@agentica/core";
import typia from "typia";
import OpenAI from "openai";

import { NewsService } from "../services/NewsService"; // ← class로 통합된 서비스

const agent = new Agentica({
  vendor: {
    api: new OpenAI({ apiKey: process.env.OPENAI_API_KEY! }),
    model: "gpt-4o",
  },
  controllers: [
    typia.llm.controller<NewsService, "chatgpt">("news", new NewsService()),
  ],
});

export const NewsAgent = agent;
