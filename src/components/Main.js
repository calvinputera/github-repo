import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";

const Main = () => {
  const [username, setUsername] = useState("");

  const baseUrl = "https://api.github.com/users";

  const onChageHandler = (e) => {
    setUsername(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();

    const profile = await fetch(`${baseUrl}/${username}`);
    const profilJson = await profile.json();
    console.log(profilJson);
  };

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
          onChange={onChageHandler}
          value={username}
          type="text"
          placeholder="search repo..."
          className="py-2 px-3 border border-slate-500 rounded-2xl mr-2 text-sm"
        />
        <button
          onClick={search}
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
