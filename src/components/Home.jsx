export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-black-600">
        Welcome to BeyondChats!
      </h1>
      <p className="text-gray-600 text-lg mb-4">
        Your smart customer support assistant powered by AI.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition">
        Get Started
      </button>
    </div>
  );
}
