import { Agentica } from "@agentica/core";
import OpenAI from "openai";
import typia from "typia";
import { MobileFileSystem } from "./services/MobileFileSystem";

async function main() {
  const agent = new Agentica({
    model: "chatgpt", // ✅ 최상위 model
    vendor: {
      api: new OpenAI({ apiKey: "your-openai-key" }),
    },
    controllers: [
      typia.llm.controller<MobileFileSystem, "chatgpt">(
        "filesystem",
        new MobileFileSystem()
      )
    ]
  });

  const result = await agent.conversate("Hello!");
  console.log(result);
}

main();
