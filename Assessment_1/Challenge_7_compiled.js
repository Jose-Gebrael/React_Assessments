var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        if (typeof name !== "string") {
            throw new Error("Task name must be a string.");
        }
        var newTask = {
            id: this.currentId++,
            name: name,
            status: "Pending"
        };
        this.tasks.push(newTask);
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (!task) {
            throw new Error("Task with ID ".concat(id, " not found."));
        }
        task.status = "Completed";
    };
    TaskManager.prototype.displayTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        }
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build an app");
taskManager.completeTask(1);
taskManager.displayTasks();
// Output:
// Task ID: 1, Name: "Learn TypeScript", Status: Completed
// Task ID: 2, Name: "Build an app", Status: Pending
