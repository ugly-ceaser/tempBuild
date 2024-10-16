"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminJWTGuard = void 0;
const passport_1 = require("@nestjs/passport");
class AdminJWTGuard extends (0, passport_1.AuthGuard)('admin-jwt') {
    constructor() {
        super();
    }
}
exports.AdminJWTGuard = AdminJWTGuard;
//# sourceMappingURL=admin-jwt.guard.js.map