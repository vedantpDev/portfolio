import React, { useState } from "react";

const btnCss = "px-3 py-2 rounded-md m-2";

const Tab1 = () => {
  return (
    <div>
      <p>Tab 1</p>{" "}
    </div>
  );
};
const Tab2 = () => {
  return (
    <div>
      <p>Tab 2</p>{" "}
    </div>
  );
};
const Tab3 = () => {
  return (
    <div>
      <p>Tab 3</p>{" "}
    </div>
  );
};

const ReactWizard = () => {
  const [isTabValid, setIsTabValid] = useState([]);
  let tabs = [
    { title: "Personal Info", value: 1, tab: Tab1 },
    { title: "Bank Info", value: 2, tab: Tab2 },
    { title: "Check Data", value: 3, tab: Tab3 },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  let ActiveTab = activeTab?.tab;
  return (
    <div>
      {/* Header */}
      <div className="mt-5 p-2 m-auto w-[70%] border rounded-md justify-around item-center min-h-[500px]">
        <div className="flex justify-around gap-3 mb-5">
          {tabs.map((tab, i) => (
            <div key={i} className="cursor-pointer w-full">
              <div
                className={`${i + 1 !== activeTab.value && "border-gray-500"
                  } p-2 border-0 border-b-2 text-center`}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
        <ActiveTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabData={tabs[activeTab.value] || {}}
        />
        {activeTab.value !== 1 && (
          <button
            className={`bg-blue-400 cursor-pointer ${btnCss}`}
            onClick={() => setActiveTab(tabs[activeTab.value - 2])}
          >
            Privious
          </button>
        )}
        <button
          className={`bg-blue-400 cursor-pointer ${btnCss}`}
          onClick={() => {
            if (!isTabValid.includes(activeTab.value)) {
              setIsTabValid((prev) => [...prev, activeTab.value]);
            }
          }}
        >
          Valid Form
        </button>
        {activeTab.value === 3 && isTabValid.includes(activeTab.value) && (
          <button
            className={`${!isTabValid.includes(activeTab.value) && "opacity-[0.5]"
              } bg-purple-400 ${btnCss} cursor-pointer`}
            disabled={!isTabValid.includes(activeTab.value)}
            onClick={() => alert("Happy Ending...")}
          >
            Submit
          </button>
        )}
        {activeTab.value !== 3 && (
          <button
            className={`${!isTabValid.includes(activeTab.value) ? "opacity-[0.5]" : 'cursor-pointer'
              } bg-green-400 ${btnCss} `}
            disabled={!isTabValid.includes(activeTab.value)}
            onClick={() => setActiveTab(tabs[activeTab.value])}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ReactWizard;
