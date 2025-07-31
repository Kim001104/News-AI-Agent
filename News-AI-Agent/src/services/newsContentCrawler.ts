// src/services/newsContentCrawler.ts
// 본문 크롤러 

import axios from "axios";
import * as cheerio from "cheerio";

/**
 * 네이버 뉴스 기사 URL에서 본문을 추출하는 함수
 */
export async function extractNewsContent(url: string): Promise<string> {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/117.0.0.0 Safari/537.36",
      },
    });

    const $ = cheerio.load(html);

    // 다양한 뉴스 사이트의 본문 영역을 시도
    const candidates = [
      "#dic_area",                  // 네이버
      "#articleBodyContents",       // 다음
      "#article-view-content-div",  // 서울경제, 조선일보
      ".article-body",              // 이데일리 등
      "#articleBody",               // 한국경제 등
      "#contents",                  // 기타
      "article",                    // HTML5 시맨틱 태그
    ];

    let content = "";
    for (const selector of candidates) {
      content = $(selector).text().trim();
      if (content.length > 100) break; // 너무 짧으면 무시
    }

    if (!content) throw new Error("본문을 찾을 수 없음");

    return content;
  } catch (err) {
    console.warn(`⚠️ 본문 크롤링 실패 (${url})`);
    return "";
  }
}
