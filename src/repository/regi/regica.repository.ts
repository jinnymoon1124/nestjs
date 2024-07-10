// member-to-student-log.repository.ts
import { DataSource, Repository } from 'typeorm';
import { MemberToStudentLog } from '../../entity/regica/MemberToStudentLog';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegicaRepository extends Repository<MemberToStudentLog> {
    constructor(private dataSource: DataSource) {
        super(MemberToStudentLog, dataSource.createEntityManager());
    }

    async getAll(): Promise<MemberToStudentLog[]> {
        return await this.find();
    }

    async findOneByMemberIdx(MemberIdx: number): Promise<MemberToStudentLog> {
        return await this.findOneBy({MemberIdx});
    }
}