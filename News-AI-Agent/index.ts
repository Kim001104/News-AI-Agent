import dotenv from "dotenv";
dotenv.config();

import { searchEnglishNews } from "./src/services/englishNewsService";
import { extractNewsContent } from "./src/services/extractNewsContent";

async function main() {
  const query = process.argv[2] || "AI";
  const newsItems = await searchEnglishNews(query);

  console.log(`\n🔍 키워드 "${query}"에 대한 뉴스 본문 추출:\n`);

  for (const [idx, item] of newsItems.entries()) {
    console.log(`\n[${idx + 1}] ${item.title}`);
    console.log(`출처: ${item.source.name}`);
    console.log(`링크: ${item.url}`);
    console.log(`날짜: ${new Date(item.publishedAt).toLocaleString("ko-KR")}`);

    const content = await extractNewsContent(item.url);
    if (content) {
      console.log(`📄 본문 요약 미리보기:\n${content.slice(0, 500)}\n...`);
    } else {
      console.log("❌ 본문 추출 실패\n");
    }

    console.log("=".repeat(80));
  }
}

main().catch((err) => {
  console.error("실행 오류:", err);
});
