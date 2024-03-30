import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectRepository } from '../project.repository';
import { CreateProjectDto } from 'src/project/dto/create-project.dto';
import { Project } from '@prisma/client';
import { UpdateProjectDto } from 'src/project/dto/update-project.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProjectRepository implements ProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProjectDto): Promise<Project> {
    const project = await this.prisma.project.create({ data: data });
    return project;
  }

  async findAll(): Promise<Project[]> {
    return await this.prisma.project.findMany();
  }

  async findByName(name: string): Promise<Project> {
    return await this.prisma.project.findFirst({ where: { name: name } });
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return await this.prisma.project.update({
      where: { id: id },
      data: updateProjectDto,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.project.delete({ where: { id: id } });
  }
}
