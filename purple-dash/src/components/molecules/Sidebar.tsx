import React, { useState } from "react";

interface ProcessItem {
  name: string;
  path: string;
}

interface TaskItem {
    name: string;
    path: string;
  }
  

const Sidebar: React.FC<{ onSelect: (path: string) => void; selectedPath: string }> = ({ onSelect, selectedPath }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    MyTasks: false,
    MySpace: false,
    Processes: false,
    Report: false,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const taskItems: TaskItem[] = [
    { name: "My Tasks", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Worklist__Form/" },
    { name: "PurpleWorks Support", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Cash+Advance+Home+Page/" },
    { name: "Account Opening", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Expense+Claim+Home+Page/" },
  ];

  const processItems: ProcessItem[] = [
    { name: "E-memo", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Ememo__HomeForm/" },
    { name: "Cash Advance", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Cash+Advance+Home+Page/" },
    { name: "Expense Claim", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Expense+Claim+Home+Page/" },
    { name: "HR Process", path: "https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/K2+Workdesk/?" },
    // { name: "Process 5", path: "https://example.com/process5" },
    // { name: "Process 6", path: "https://example.com/process6" },
    // { name: "Process 7", path: "https://example.com/process7" },
    // { name: "Process 8", path: "https://example.com/process8" },
    // { name: "Process 9", path: "https://example.com/process9" },
    // { name: "Process 10", path: "https://example.com/process10" },
  ];

  const filteredProcesses = processItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul className="space-y-2">
        {["MyTasks", "MySpace", "Processes", "Report"].map((menu) => (
          <li key={menu}>
            <button
              className="w-full flex justify-between text-[#000] items-center px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => toggleMenu(menu)}
            >
              {menu.replace(/([A-Z])/g, " $1").trim()}
              <span className={`transform ${openMenus[menu] ? "rotate-90" : ""} transition-transform`}>
                ▶
              </span>
            </button>

             {/* Submenu Task */}
             {openMenus[menu] && (
              <div className="ml-6 mt-2">
                {menu === "MyTasks" ? (
                  <>
                    
                    <div className="max-h-40 overflow-y-auto border border-gray-600 rounded p-2">
                      {taskItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => onSelect(item.path)}
                          className={`block p-2 w-full text-[#000] mb-0.5 text-left rounded ${
                            selectedPath === item.path ? "bg-gray-600" : "hover:bg-gray-700"
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            )}

            {/* Submenu */}
            {openMenus[menu] && (
              <div className="ml-6 mt-2">
                {menu === "Processes" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 mb-2"
                    />
                    <div className="max-h-40 overflow-y-auto border border-gray-600 rounded p-2">
                      {filteredProcesses.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => onSelect(item.path)}
                          className={`block p-2 w-full text-[#000] mb-0.5 text-left rounded ${
                            selectedPath === item.path ? "bg-gray-600" : "hover:bg-gray-700"
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </>
                ) : menu === "MyTasks" ? null
                
                : (
                  <ul className="space-y-1">
                    <li className="p-2 hover:bg-gray-700 rounded">Option 1</li>
                    <li className="p-2 hover:bg-gray-700 rounded">Option 2</li>
                    <li className="p-2 hover:bg-gray-700 rounded">Option 3</li>
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
