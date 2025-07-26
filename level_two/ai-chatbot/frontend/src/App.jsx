import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-center text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        🧠 AI Chatbot
      </h1>
      <ChatBox />
    </div>
  );
}

export default App;
