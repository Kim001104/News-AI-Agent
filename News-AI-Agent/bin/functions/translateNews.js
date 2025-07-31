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
exports.translateNews = void 0;
const TranslateInput_1 = require("../schemas/TranslateInput");
const gptService_1 = require("../services/gptService");
exports.translateNews = {
    name: "translateNews",
    metadata: {
        description: "영어 뉴스를 한국어로 번역합니다.",
        input: TranslateInput_1.TranslateInput,
    },
    execute: (_a) => __awaiter(void 0, [_a], void 0, function* ({ content }) {
        const translation = yield (0, gptService_1.askGPT)(`다음 영어 뉴스를 한국어로 번역해줘:\n\n${content}`);
        return { translation };
    }),
};
//# sourceMappingURL=translateNews.js.map