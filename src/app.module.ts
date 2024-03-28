import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProjectModule],
})
export class AppModule {}
