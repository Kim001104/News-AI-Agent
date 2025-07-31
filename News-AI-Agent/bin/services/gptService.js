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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askGPT = askGPT;
// GPT API 연동 모듈 
// src/services/gptService.ts
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
function askGPT(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const chat = yield openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
        });
        const choice = (_a = chat.choices) === null || _a === void 0 ? void 0 : _a[0];
        const content = (_c = (_b = choice === null || choice === void 0 ? void 0 : choice.message) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.trim();
        if (!content) {
            console.error("❗ GPT 응답에 content가 없습니다:", JSON.stringify(chat, null, 2));
            throw new Error("GPT 응답에 내용이 없습니다.");
        }
        return content;
    });
}
//# sourceMappingURL=gptService.js.map