import { NewChat } from "@/components";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div>
        {/* New Chat */}
        <NewChat />
        <div>{/* ModelSelection */}</div>

        {/* Map */}
      </div>
    </div>
  );
};

export default SideBar;
