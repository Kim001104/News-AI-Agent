import typia from "typia";
import { searchNews } from "../services/naverNewsService";

export const fetchNews = {
  name: "fetchNews",
  metadata: {
    description: "키워드로 뉴스를 검색합니다.",
    input: typia.createAssert<{ keyword: string }>(),
  },
  async execute({ keyword }: { keyword: string }) {
    return await searchNews(keyword);
  },
};
