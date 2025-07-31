import typia from "typia";
import { askGPT } from "../services/gptService";

export interface TranslateInput {
  content: string;
}

export const translateNews = {
  name: "translateNews",
  metadata: {
    description: "영어 뉴스를 한국어로 번역합니다.",
    input: typia.createAssert<TranslateInput>(),
  },
  async execute({ content }: TranslateInput) {
    return {
      translation: await askGPT(`다음 영어 뉴스를 한국어로 자연스럽게 번역해줘:\n\n${content}`)
    };
  },
};
