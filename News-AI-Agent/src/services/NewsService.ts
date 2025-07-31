// // src/services/NewsService.ts
// import { searchNews } from "./naverNewsService";
// import { extractNewsContent } from "./newsContentCrawler";
// import { askGPT } from "./gptService";

// export class NewsService {
//   async summarizeNews(query: string, count: number = 3) {
//     const newsItems = await searchNews(query);
//     const summaries = [];

//     for (const item of newsItems.slice(0, count)) {
//       const cleanTitle = item.title.replace(/<[^>]*>/g, "");
//       const pubDate = new Date(item.pubDate).toLocaleString("ko-KR", {
//         timeZone: "Asia/Seoul",
//       });
//       const url = item.link;
//       const content = await extractNewsContent(url);
//       const summary = await askGPT(
//         `다음 뉴스 내용을 한국어로 요약해줘:\n\n${content}`
//       );

//       summaries.push({
//         title: cleanTitle,
//         pubDate,
//         link: url,
//         summary,
//       });
//     }

//     return summaries;
//   }
// }
