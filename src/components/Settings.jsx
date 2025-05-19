export default function Settings() {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      <div className="bg-white p-4 rounded shadow border">
        <p className="font-medium mb-2">🔔 Notifications</p>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" defaultChecked />
          <span>Enable Notifications</span>
        </label>
      </div>

      <div className="bg-white p-4 rounded shadow border">
        <p className="font-medium mb-2">🎨 Theme</p>
        <select className="w-full p-2 border rounded">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
    </div>
  );
}
