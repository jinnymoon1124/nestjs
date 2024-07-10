import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberToStudentLog } from "src/entity/regica/MemberToStudentLog";
import { RegicaController } from "src/controller/regi/regica.controller";
import { RegicaService } from "src/service/regi/regica.service";
import { RegicaRepository } from "src/repository/regi/regica.repository";


@Module({
    // imports: [TypeOrmModule.forFeature([MemberToStudentLog])],
    controllers: [RegicaController],
    providers: [RegicaService, RegicaRepository],
})

export class RegicaModule { }