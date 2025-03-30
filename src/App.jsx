import React, { useRef } from "react";
import SavedColors from "./components/SavedColors";
import { useColors } from "./context/colors.provider";
import Alert from "./components/Alert";
function App() {
  const { savedColors, saveColor, color, name, setColor, setName } =
    useColors();

  const colorRef = useRef();

  return (
    <div className="flex max-h-full min-h-screen bg-zinc-950 text-white">
      {savedColors.length >= 20 && (
        <div className="flex mt-10 ml-5 absolute">
          <Alert />
        </div>
      )}

      <div className="mx-auto container w-[900px] mt-6 flex flex-col items-center">
        <h3 className="font-medium text-4xl mb-6">Color Picker</h3>

        <div className="flex flex-row-reverse mb-8 gap-x-5">
          <div className="flex flex-col w-[280px]">
            <h3 className="font-medium text-xl mb-4">Saved Colors</h3>

            <div className="gidole-regular overflow-x-hidden overflow-y-auto h-[510px]">
              {savedColors.length === 0 ? (
                <span className="text-zinc-400">No saved colors yet</span>
              ) : (
                savedColors.map((savedColor, i) => (
                  <SavedColors key={i} savedColor={savedColor} />
                ))
              )}
            </div>
          </div>

          <div className="flex flex-col float-left">
            <div className="flex gap-x-10">
              <input
                className="border-none w-[600px] h-[560px] flex rounded-md border-0"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div className="flex flex-col mt-8 w-full">
              <div className="flex flex-row items-center justify-center gap-x-2">
                <div className="text-white px-3 text-lg flex py-2 w-full border-zinc-800 border-2 rounded-md">
                  {color}
                </div>
                <div
                  onClick={() => navigator.clipboard.writeText(color)}
                  className="border-zinc-800 border-2 rounded-md flex px-2 py-2 hover:bg-zinc-800 transition duration-200 ease-out cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex gap-x-4 mt-8">
                <input
                  type="text"
                  placeholder="Color name (optional)"
                  className="flex px-3 py-2 text-lg bg-zinc-800 rounded-md w-full"
                  onChange={(e) => setName(e.target.value)}
                  ref={colorRef}
                />

                <button
                  onClick={() => {
                    saveColor(name, color);
                    colorRef.current.value = "";
                  }}
                  className="flex bg-white text-black rounded-md items-center px-4 hover:bg-zinc-200 transition duration-200 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-7 pr-3"
                  >
                    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                    <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                  </svg>
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
