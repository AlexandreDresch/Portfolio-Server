import { ProjectType } from '@prisma/client';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  done: boolean;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];

  deployment_url?: string;

  @IsString()
  @IsNotEmpty()
  github_url: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  type: ProjectType;
}
