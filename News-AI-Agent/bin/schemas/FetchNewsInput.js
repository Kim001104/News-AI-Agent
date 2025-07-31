"use strict";
// fetchNews의 파라미터 정의 
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchNewsInput = void 0;
const zod_1 = require("zod");
exports.FetchNewsInput = zod_1.z.object({
    keyword: zod_1.z.string().describe("검색할 뉴스 키워드")
});
//# sourceMappingURL=FetchNewsInput.js.map