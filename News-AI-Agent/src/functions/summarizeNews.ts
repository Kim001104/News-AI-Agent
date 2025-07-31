// 본문 요약 기능 수행(GPT 사용)
import typia from "typia";
import { askGPT } from "../services/gptService";

export interface SummarizeInput {
  content: string;
}

export const summarizeNews = {
  name: "summarizeNews",
  metadata: {
    description: "뉴스 본문을 요약합니다.",
    input: typia.createAssert<SummarizeInput>(),
  },
  async execute({ content }: SummarizeInput) {
    return {
      summary: await askGPT(`다음 뉴스 본문을 요약해줘:\n\n${content}`)
    };
  },
};
