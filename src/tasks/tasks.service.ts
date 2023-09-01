import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './task.entity'
import { v4 } from 'uuid'
import { UpdateTaskDTO } from './dto/task.dto'

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.PENDING,
        },
    ]

    getAllTasks() {
        console.log('Your server has been consulted!')
        return this.tasks
    }

    createTask(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING,
        }

        this.tasks.push(task)
        console.log(task, 'Client published a task!')
        return task
    }

    updateTask(id: string, updatedFields: UpdateTaskDTO): Task {
        const task = this.getTaskByID(id)
        const newTask = { ...task, ...updatedFields }
        this.tasks.map(task => (task.id === id ? newTask : task))
        console.log('TASK UPDATED FROM', task, 'TO', newTask)
        return newTask
    }

    deleteTask(id: string): string {
        console.log(this.tasks[Number(id) - 1], 'Client deleted this task!')
        this.tasks = this.tasks.filter(task => task.id !== id)
        return 'task ' + id + ' deleted!'
    }

    getTaskByID(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }
}
