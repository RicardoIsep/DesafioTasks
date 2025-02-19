import TaskComponent from './app/tasks/TaskComponent';

function App() {
    return (
        <div className="flex flex-col items-center justify-start h-screen bg-gray-100 pt-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-black mb-4">Tarefas</h1>
                <TaskComponent />
            </div>
        </div>
    );
}

export default App;