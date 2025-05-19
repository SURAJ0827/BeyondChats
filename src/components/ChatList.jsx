const dummyChats = [
  {
    id: 1,
    name: "Rohan",
    lastMessage: "Hi there!",
    time: "12:30 PM",
  },
  {
    id: 2,
    name: "Priya",
    lastMessage: "Let's talk tomorrow.",
    time: "1:15 PM",
  },
  {
    id: 2,
    name: "Suraj",
    lastMessage: "how are you.",
    time: "1:15 PM",
  },
];

export default function ChatList({ onSelect }) {
  return (
    <div className="w-full p-4 overflow-y-auto">
      {dummyChats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelect(chat)}
          className="p-3 border-b hover:bg-gray-100 cursor-pointer"
        >
          <h2 className="font-semibold">{chat.name}</h2>
          <p className="text-sm text-gray-600">{chat.lastMessage}</p>
          <p className="text-xs text-gray-400">{chat.time}</p>
        </div>
      ))}
    </div>
  );
}
