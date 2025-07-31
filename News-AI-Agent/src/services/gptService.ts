import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function askGPT(prompt: string): Promise<string> {
  const res = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-3.5-turbo", // 여기 변경,
    messages: [{ role: "user", content: prompt }],
  });

  const content = res.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error("GPT 응답에 content가 없습니다.");
  return content;
}
