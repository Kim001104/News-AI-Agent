"use strict";
// NaverNews API 연동 모듈 
// src/services/naverNewsService.ts
// src/services/naverNewsService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchNews = searchNews;
const axios_1 = __importDefault(require("axios"));
function searchNews(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const clientId = process.env.NAVER_CLIENT_ID;
        const clientSecret = process.env.NAVER_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
            throw new Error("NAVER API 키가 누락되었습니다.");
        }
        const response = yield axios_1.default.get("https://openapi.naver.com/v1/search/news.json", {
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
    });
}
//# sourceMappingURL=naverNewsService.js.map