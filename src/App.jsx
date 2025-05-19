import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Settings from "./components/Settings";

function App() {
  const [active, setActive] = useState("chat");
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="h-screen flex flex-col">
      <Topbar />

      <div className="flex flex-1">
        <Sidebar active={active} setActive={setActive} />

        {active === "chat" ? (
          <>
            <div className="w-1/3 border-r h-full overflow-y-auto">
              <ChatList onSelect={setSelectedChat} />
            </div>
            <div className="flex-1 h-full">
              <ChatWindow selectedChat={selectedChat} />
            </div>
          </>
        ) : active === "home" ? (
          <div className="flex-1">
            <Home />
          </div>
        ) : active === "settings" ? (
          <div className="flex-1">
            <Settings />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
