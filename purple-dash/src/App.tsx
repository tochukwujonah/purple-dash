import React, { useState } from "react";
import Sidebar from "./components/molecules/Sidebar";

const App: React.FC = () => {
  const [selectedProcess, setSelectedProcess] = useState("");

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelectedProcess} selectedPath={selectedProcess} />
      <div className="flex-1  w-[80vw]">
        <div className="w-full p-6 border">
          Header
        </div>
        <div className=" border-2 h-[85vh] border-amber-400">
          {selectedProcess ? (
            <iframe
              src={selectedProcess}
              title="Process View"
              className="w-full h-full border border-gray-300 rounded-lg"
            />
          ) : (
            // <div className="text-center text-gray-500 text-lg mt-20">
            //   Select a process to view details here.
            // </div>
            <iframe
              src={"https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/Form/Worklist__Form/"}
              title="Process View"
              className="w-full h-full border border-gray-300 rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
