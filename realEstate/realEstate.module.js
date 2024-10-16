"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateModule = void 0;
const common_1 = require("@nestjs/common");
const realEstate_service_1 = require("./realEstate.service");
const realEstate_controller_1 = require("./realEstate.controller");
let RealEstateModule = class RealEstateModule {
};
exports.RealEstateModule = RealEstateModule;
exports.RealEstateModule = RealEstateModule = __decorate([
    (0, common_1.Module)({
        providers: [realEstate_service_1.RealEstateService],
        controllers: [realEstate_controller_1.RealEstateController]
    })
], RealEstateModule);
//# sourceMappingURL=realEstate.module.js.map