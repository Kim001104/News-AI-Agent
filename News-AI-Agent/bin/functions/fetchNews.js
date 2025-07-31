"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchNews = void 0;
const FetchNewsInput_1 = require("../schemas/FetchNewsInput");
const naverNewsService_1 = require("../services/naverNewsService");
exports.fetchNews = {
    name: "fetchNews",
    metadata: {
        description: "키워드로 관련 뉴스를 검색합니다.",
        input: FetchNewsInput_1.FetchNewsInput,
    },
    execute: (_a) => __awaiter(void 0, [_a], void 0, function* ({ keyword }) {
        const newsItems = yield (0, naverNewsService_1.searchNews)(keyword);
        return newsItems.slice(0, 3); // 상위 3개만 반환
    }),
};
//# sourceMappingURL=fetchNews.js.map