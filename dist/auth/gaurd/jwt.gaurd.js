"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTGaurd = void 0;
const passport_1 = require("@nestjs/passport");
class JWTGaurd extends (0, passport_1.AuthGuard)('Userjwt') {
    constructor() {
        super();
    }
}
exports.JWTGaurd = JWTGaurd;
//# sourceMappingURL=jwt.gaurd.js.map