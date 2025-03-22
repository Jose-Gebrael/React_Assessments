class TaskManager {
    private tasks: { id: number; name: string; status: "Pending" | "Completed" }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
        if (typeof name !== "string") {
            throw new Error("Task name must be a string.");
        }

        const newTask = {
            id: this.currentId++,
            name: name,
            status: "Pending" as const
        };

        this.tasks.push(newTask);
    }

    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id);

        if (!task) {
            throw new Error(`Task with ID ${id} not found.`);
        }

        task.status = "Completed";
    }

    displayTasks(): void {
        for (const task of this.tasks) {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        }
    }
}

const taskManager = new TaskManager();

taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build an app");
taskManager.completeTask(1);
taskManager.displayTasks();

// Output:
// Task ID: 1, Name: "Learn TypeScript", Status: Completed
// Task ID: 2, Name: "Build an app", Status: Pending