import {
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUppercase,
    MinLength,
} from 'class-validator'
import { TaskStatus } from '../task.entity'

export class createTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status?: TaskStatus
}
