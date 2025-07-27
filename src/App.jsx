import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-black overflow-hidden text-white font-sans flex items-center justify-center p-4">
      
      {/* Bubbles Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glass Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl border border-white/20 ">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-300 drop-shadow">To-Do App</h1>
        
        <div className="flex flex-col xs:flex-row gap-2 mb-4 w-full responsive-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white outline-none"
            placeholder="Add a task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-white font-semibold"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-white/10 px-4 py-2 rounded-lg flex justify-between items-center text-white backdrop-blur-sm border border-white/10"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-400 hover:text-red-600 font-bold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="mt-6 text-sm text-center text-gray-300">
          Made with <span className="text-red-500">❤️</span> by <strong><a href="https://github.com/Anticoder03" target="_blank">Anticoder03</a></strong>
        </footer>
      </div>

      {/* Custom Bubble Animation */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 9999px;
          background-color: rgba(96, 165, 250, 0.2);
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-1000px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
