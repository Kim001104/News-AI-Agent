// NaverNews API 호출 함수 
// src/services/naverNewsService.ts


import axios from "axios";

export async function searchNews(query: string): Promise<any[]> {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("NAVER API 키가 누락되었습니다.");
  }

  const response = await axios.get("https://openapi.naver.com/v1/search/news.json", {
    params: {
      query,
      display: 5,
      sort: "date",
    },
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
  });

  return response.data.items;
}
