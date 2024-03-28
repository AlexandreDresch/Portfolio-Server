import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectRepository } from '../project.repository';
import { CreateProjectDto } from 'src/project/dto/create-project.dto';
import { Project } from '@prisma/client';

export class PrismaProjectRepository implements ProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProjectDto): Promise<Project> {
    const project = await this.prisma.project.create({ data: data });
    return project;
  }

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async findByName(name: string): Promise<Project> {
    return await this.prisma.project.findFirst({ where: { name: name } });
  }
}
