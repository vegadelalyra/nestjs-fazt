import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { UpdateTaskDTO, createTaskDTO } from './dto/task.dto'

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getALlTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: createTaskDTO) {
        return this.tasksService.createTask(newTask.title, newTask.description)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDTO) {
        return this.tasksService.updateTask(id, updatedFields)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: 'string') {
        return this.tasksService.deleteTask(id)
    }
}
