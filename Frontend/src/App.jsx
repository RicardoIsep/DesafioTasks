import TaskComponent from './app/tasks/TaskComponent';

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-black mb-4">Task Manager</h1>
                <TaskComponent />
            </div>
        </div>
    );
}

export default App;
