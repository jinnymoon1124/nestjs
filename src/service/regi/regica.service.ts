import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MemberToStudentLog } from "src/entity/regica/MemberToStudentLog";
import { RegicaRepository } from "src/repository/regi/regica.repository";


@Injectable()
export class RegicaService {
    constructor(private readonly regicaRepository: RegicaRepository) { }

    async getAll(): Promise<MemberToStudentLog[]> {
        return this.regicaRepository.getAll();
    }

    async getBtId(MemberIdx: number): Promise<MemberToStudentLog> {
        const found = await this.regicaRepository.findOneByMemberIdx(MemberIdx);

        if (!found) {
            throw new Error(`MemberToStudentLog with id ${MemberIdx} not found`);
        }
        return found;
    }

}


