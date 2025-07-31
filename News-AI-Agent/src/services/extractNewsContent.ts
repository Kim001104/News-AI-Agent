import fetch from "node-fetch";
import { load } from "cheerio";

export async function extractNewsContent(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`페이지 로드 실패: ${res.statusText}`);
    const html = await res.text();
    const $ = load(html);

    // ✅ 콘텐츠 본문만 골라서 추출 (Geeky Gadgets 전용 구조)
    const article = $("div.entry-content");

    if (!article.length) throw new Error("본문 요소를 찾을 수 없습니다.");

    // ✅ <p>, <h2> 태그만 추출 (텍스트 위주)
    const contentParts: string[] = [];

    article.find("p, h2").each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 0 && !text.startsWith("freestar.config")) {
        contentParts.push(text);
      }
    });

    const content = contentParts.join("\n\n");

    if (content.length < 200) throw new Error("본문 내용이 너무 짧습니다.");
    return content;
  } catch (error) {
    const err = error as Error;
    console.error(`❌ ${url} 본문 추출 실패:`, err.message);
    return "";
  }
}


// 🔽 실행 테스트 코드
if (require.main === module) {
  (async () => {
    const url = "https://www.geeky-gadgets.com/samsung-galaxy-s26-ultra-13/";
    console.log(`🌐 뉴스 URL: ${url}`);

    const content = await extractNewsContent(url);
    console.log("\n📄 기사 본문 미리보기 (500자):\n");
    console.log(content.slice(0, 500));
  })();
}