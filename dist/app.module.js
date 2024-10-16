"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const chat_module_1 = require("./chat/chat.module");
const contact_module_1 = require("./contact/contact.module");
const hot_deal_module_1 = require("./hot-deal/hot-deal.module");
const job_module_1 = require("./job/job.module");
const market_module_1 = require("./market/market.module");
const realEstate_module_1 = require("./realEstate/realEstate.module");
const reminder_module_1 = require("./reminder/reminder.module");
const review_module_1 = require("./review/review.module");
const search_module_1 = require("./search/search.module");
const verification_module_1 = require("./verification/verification.module");
const report_module_1 = require("./report/report.module");
const notification_module_1 = require("./notification/notification.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma/prisma.service");
const middleware_service_1 = require("./middleware/middleware.service");
const otp_service_1 = require("./otp/otp.service");
const mail_service_1 = require("./maileServices/mail.service");
const otp_controller_1 = require("./otp/otp.controller");
const utils_service_1 = require("./utils/utils.service");
const chat_service_1 = require("./chat/chat.service");
const sms_service_1 = require("./sms/sms.service");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middleware_service_1.MiddlewareService).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            schedule_1.ScheduleModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            chat_module_1.ChatModule,
            contact_module_1.ContactModule,
            hot_deal_module_1.HotDealModule,
            job_module_1.JobMarketModule,
            market_module_1.MarketModule,
            realEstate_module_1.RealEstateModule,
            reminder_module_1.ReminderModule,
            review_module_1.ReviewModule,
            search_module_1.SearchModule,
            verification_module_1.VerificationModule,
            report_module_1.ReportModule,
            notification_module_1.NotificationModule,
            prisma_module_1.PrismaModule,
            admin_module_1.AdminAuthModule
        ],
        providers: [prisma_service_1.PrismaService, middleware_service_1.MiddlewareService, otp_service_1.OtpService, mail_service_1.MailService, utils_service_1.UtilsService, chat_service_1.ChatService, sms_service_1.SmsService],
        controllers: [otp_controller_1.OtpController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map