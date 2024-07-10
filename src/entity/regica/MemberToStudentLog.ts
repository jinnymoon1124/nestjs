import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'MemberToStudentLog' })
export class MemberToStudentLog {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  MemberIdx: number;

  @Column({ type: 'int' })
  StudentNo: number;

  @Column({ type: 'int', unsigned: true })
  site_code: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  RegDatetime: Date;
}
