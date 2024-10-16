"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadMiddleware = void 0;
const common_1 = require("@nestjs/common");
const multer = require("multer");
const multer_1 = require("multer");
const path_1 = require("path");
let UploadMiddleware = class UploadMiddleware {
    constructor() {
        this.multer = multer({
            storage: (0, multer_1.diskStorage)({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
                },
            }),
        }).array('files');
    }
    use(req, res, next) {
        this.multer(req, res, (err) => {
            if (err) {
                return res.status(500).json(err);
            }
            next();
        });
    }
};
exports.UploadMiddleware = UploadMiddleware;
exports.UploadMiddleware = UploadMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadMiddleware);
//# sourceMappingURL=upload.middleware.js.map