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

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
