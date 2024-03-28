import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectRepository } from './repository/project.repository';
import { PrismaProjectRepository } from './repository/implementations/prismaProject.repository';

@Module({
  controllers: [ProjectController],
  providers: [
    ProjectService,
    { provide: ProjectRepository, useClass: PrismaProjectRepository },
  ],
})
export class ProjectModule {}
