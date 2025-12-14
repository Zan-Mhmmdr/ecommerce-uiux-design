import { Link } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";
import { useState } from "react";

const ReportABugPage = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputSteps, setInputSteps] = useState("");
  const [inputSeverity, setInputSeverity] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [attachedImages, setAttachedImages] = useState<File[]>([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []).slice(0, 3);
    setAttachedImages(files);
  };

  return (
    <>
      <div className="flex px-6 items-center pt-5">
        <Link to={"/profile"}>
          <img src={back} alt="" />
        </Link>

        <div className="absolute flex left-1/2 -translate-x-1/2 font-bold font-dmsans text-xl tracking-[0.2px] leading-5 ">
          <h1>Report A Bug</h1>
        </div>
      </div>

      <div className="min-h-screen bg-slate-50 p-4 flex flex-col pt-8">
        <main className="mt-4 bg-white rounded-2xl shadow-md p-4 flex-1 space-y-4">
          {/* Title */}
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm border-slate-200 focus:ring-2 focus:ring-indigo-300"
              placeholder="Short summary of the issue"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows={4}
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm resize-none border-slate-200 focus:ring-2 focus:ring-indigo-300"
              placeholder="Describe what happened..."
            />
          </div>

          {/* Steps */}
          <div>
            <label className="text-sm font-medium">
              Steps to Reproduce (optional)
            </label>
            <textarea
              rows={3}
              value={inputSteps}
              onChange={(e) => setInputSteps(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm resize-none border-slate-200 focus:ring-2 focus:ring-indigo-300"
              placeholder={`1) Open app
2) Go to profile
3) Crash happens`}
            />
          </div>

          {/* Severity */}
          <div>
            <label className="text-sm font-medium">Severity</label>
            <div className="mt-1 grid grid-cols-4 gap-2">
              {["Low", "Medium", "High", "Critical"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setInputSeverity(level)}
                  className={`px-3 py-2 rounded-lg border text-sm ${
                    inputSeverity === level
                      ? "bg-indigo-500 text-white border-indigo-500"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email (optional)</label>
            <input
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm border-slate-200 focus:ring-2 focus:ring-indigo-300"
              placeholder="your@email.com"
            />
          </div>

          {/* Images */}
          <div>
            <label className="text-sm font-medium">Screenshots (max 3)</label>
            <label className="mt-1 flex items-center gap-2 cursor-pointer w-full rounded-lg border px-3 py-2 bg-white text-sm border-slate-200">
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
              <span className="text-xs opacity-80">
                {attachedImages.length
                  ? `${attachedImages.length} image(s) selected`
                  : "Tap to attach images"}
              </span>
              <span className="ml-auto text-xs text-slate-400">PNG, JPG</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 px-4 py-2 rounded-xl border bg-white text-sm">
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 rounded-xl bg-[#0ACF83] text-white text-sm">
              Send Report
            </button>
          </div>
        </main>

        <footer className="mt-4 text-center text-xs text-slate-500">
          App version 1.0.0
        </footer>
      </div>
    </>
  );
};

export default ReportABugPage;
