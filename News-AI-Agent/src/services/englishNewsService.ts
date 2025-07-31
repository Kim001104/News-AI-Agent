import fetch from "node-fetch";

export type NewsItem = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: { name: string };
};

type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: NewsItem[];
};

export async function searchEnglishNews(query: string): Promise<NewsItem[]> {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=5&apiKey=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`NewsAPI 요청 실패: ${res.statusText}`);
  }

  const data = (await res.json()) as NewsApiResponse;
  return data.articles;
}

// 테스트 실행 코드
// 실행: npx ts-node src/services/englishNewsService.ts "OpenAI"

if (require.main === module) {
  require("dotenv").config();

  const query = process.argv[2] || "AI";

  (async () => {
    try {
      const news = await searchEnglishNews(query);
      console.log(`🔍 검색 키워드: "${query}"\n`);
      news.forEach((item, idx) => {
        console.log(`\n[${idx + 1}] ${item.title}`);
        console.log(`출처: ${item.source.name}`);
        console.log(`설명: ${item.description}`);
        console.log(`링크: ${item.url}`);
        console.log(`날짜: ${new Date(item.publishedAt).toLocaleString("ko-KR")}`);
      });
    } catch (err) {
      console.error("실행 오류:", err);
    }
  })();
}
