import React from "react";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

const Profil = ({ name, bio, location, avatar, url, repos }) => {
  return (
    <div className="w-full text-slate-800 font-noto-sans">
      <div className="w-auto p-4 border border-slate-300 rounded-2xl mt-6 flex flex-col items-center">
        <div className="w-auto border-2 border-green-600 rounded-full p-1 mb-4">
          <img src={avatar} alt="avatar" className="rounded-full w-24" />
        </div>
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="italic text-slate-400 text-sm text-center">{bio}</p>
        <h3 className="mt-3">{location}</h3>
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="flex items-center text-xs self-end text-slate-500 mt-8"
        >
          Go to GitHub Profil
          <span className="ml-1">
            <IoMdOpen />
          </span>
        </a>
      </div>
      <div className="w-full p-4 border border-slate-300 rounded-2xl mt-6 text-slate-800">
        <h2 className="text-lg font-semibold mb-3">My Repositories:</h2>
        {repos.map((repo) => (
          <ul key={repo.name}>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">
                <IoLogoGithub />
              </span>
              <a href={repo.html_url} rel="noreferrer" target="_blank">
                {repo.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Profil;
