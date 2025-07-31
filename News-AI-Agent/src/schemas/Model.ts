import type { ILlmSchema } from "@samchon/openapi";

export interface Model extends ILlmSchema.Model {
  fetchNews: {
    input: { keyword: string };
    output: any;
  };
  summarizeNews: {
    input: { content: string };
    output: { summary: string };
  };
  translateNews: {
    input: { content: string };
    output: { translation: string };
  };
}
