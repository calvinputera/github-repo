import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import SearchImg from "../assets/SVG/drawkit-14.svg";
import Profil from "./Profil";

const Main = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState([]);

  const baseUrl = "https://api.github.com/users";

  const onChageHandler = (e) => {
    setUsername(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();

    const profile = await fetch(`${baseUrl}/${username}`);
    const profilJson = await profile.json();

    const repositories = await fetch(profilJson.repos_url);
    const repositoriesJson = await repositories.json();

    if (profilJson) {
      setData(profilJson);
      setRepo(repositoriesJson);
    }
    setUsername("");
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
          placeholder="search user profil.."
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
      {data.login === undefined ? (
        <div className="mt-20">
          <img src={SearchImg} alt="search" />
          <p className="mt-10 text-slate-500 text-xl">type something...</p>
        </div>
      ) : (
        <Profil
          name={data.name}
          bio={data.bio}
          location={data.location}
          avatar={data.avatar_url}
          url={data.html_url}
          repos={repo}
        />
      )}
    </div>
  );
};

export default Main;
