import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepository } from './repository/project.repository';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}
  async create(data: CreateProjectDto) {
    const project = await this.projectRepository.findByName(data.name);

    if (project) {
      throw new HttpException(
        'Project already exists.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    await this.projectRepository.create(data);
  }

  async findAll() {
    return await this.projectRepository.findAll();
  }

  async findOne(name: string) {
    return await this.projectRepository.findByName(name);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    await this.projectRepository.remove(id);
  }
}
