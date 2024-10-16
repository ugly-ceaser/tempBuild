"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const not_found_filter_1 = require("./not-found.filter");
class JwtIoAdapter extends platform_socket_io_1.IoAdapter {
    constructor(jwtService, configService) {
        super();
        this.jwtService = jwtService;
        this.configService = configService;
    }
    createIOServer(port, options) {
        const server = super.createIOServer(port, options);
        server.use(async (socket, next) => {
            const token = socket.handshake.query.token;
            if (token) {
                try {
                    const payload = this.jwtService.verify(token, {
                        secret: this.configService.get('JWT_SECRET'),
                    });
                    socket.data.user = payload;
                    next();
                }
                catch (err) {
                    next(new Error('Authentication error'));
                }
            }
            else {
                next(new Error('Authentication error'));
            }
        });
        return server;
    }
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const jwtService = app.get(jwt_1.JwtService);
    app.useWebSocketAdapter(new JwtIoAdapter(jwtService, configService));
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.useGlobalFilters(new not_found_filter_1.NotFoundFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map