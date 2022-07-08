import { IoLogoGithub } from "react-icons/io";

const Main = () => {
  return (
    <div className="p-6 flex flex-col items-center font-noto-sans">
      <h1 className="text-3xl font-bold flex items-center">
        <span className="mr-2">
          <IoLogoGithub color="#0f172a" />
        </span>
        GitHub Repo
      </h1>
      <div className="flex items-center mt-6">
        <input
          type="text"
          placeholder="search repo..."
          className="py-2 px-3 border border-slate-500 rounded-2xl mr-2 text-sm"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white py-2 px-4 rounded-2xl text-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Main;
