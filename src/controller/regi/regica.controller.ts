import { Controller, Get } from "@nestjs/common";
import { RegicaService } from "src/service/regi/regica.service";

@Controller('regica')
export class RegicaController {
    constructor(private regicaService: RegicaService) {}

    @Get()
    async findAll() {
        return this.regicaService.getAll();
    }

    @Get(':MemberIdx')
    async findOne(MemberIdx: number) {
        return this.regicaService.getBtId(MemberIdx);
    }

}