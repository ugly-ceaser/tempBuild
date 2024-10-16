import { ReportService } from './report.service';
import { CreateReportDto } from '../dto/reportDto/';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    createReport(userId: string, reportDto: CreateReportDto): any;
}
