import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberToStudentLog } from './entity/regica/MemberToStudentLog';
import { RegicaModule } from './module/regi/regica.module';
import { ConfigModule } from '@nestjs/config';
// import { myDataSource } from './config/orm.config';


// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: false,
//       envFilePath: `.env.${process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'}`,
//     }),
//     TypeOrmModule.forRootAsync({
//       useFactory: async () => ({
//         ...myDataSource.options,
//       }),
//     }),
//     RegicaModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      envFilePath: `.env.${process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'}`,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_REGI_HOST,
      port: parseInt(process.env.DB_REGI_PORT),
      username: process.env.DB_REGICA_USER,
      password: process.env.DB_REGICA_PASSWORD,
      database: process.env.DB_REGICA_DATABASE,
      logging: true,
      synchronize: false,
      entities: [MemberToStudentLog],
    }),
    RegicaModule,
  ],
})

export class AppModule {}
