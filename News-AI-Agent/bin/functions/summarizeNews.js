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
exports.summarizeNews = void 0;
const SummarizeInput_1 = require("../schemas/SummarizeInput");
const gptService_1 = require("../services/gptService");
exports.summarizeNews = {
    name: "summarizeNews",
    metadata: {
        description: "뉴스 본문을 요약합니다.",
        input: SummarizeInput_1.SummarizeInput,
    },
    execute: (_a) => __awaiter(void 0, [_a], void 0, function* ({ content }) {
        const summary = yield (0, gptService_1.askGPT)(`다음 뉴스 본문을 요약해줘:\n\n${content}`);
        return { summary };
    }),
};
//# sourceMappingURL=summarizeNews.js.map