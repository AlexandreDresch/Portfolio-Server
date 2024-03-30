import { Project } from '@prisma/client';
import { CreateProjectDto } from 'src/project/dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

export abstract class ProjectRepository {
  abstract create(createProjectDto: CreateProjectDto): Promise<Project>;
  abstract findAll(): Promise<Project[]>;
  abstract findByName(name: string): Promise<Project>;
  abstract update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project>;
  abstract remove(id: number): Promise<void>;
}
