export default function ChatWindow({ selectedChat }) {
  if (!selectedChat) {
    return <div className="flex-1 p-4">click anyone! and start the chat.</div>;
  }

  return (
    <div className="flex-1 p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-xl mb-2">
          Chat with {selectedChat.name}
        </h2>
        <div className="space-y-2">
          <div className="bg-blue-100 p-2 rounded w-fit">Hello!</div>
          <div className="bg-green-100 p-2 rounded w-fit self-end ml-auto">
            Hi there!
          </div>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border p-2 rounded"
        />
      </div>
    </div>
  );
}
