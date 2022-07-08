import React from "react";

const Profil = ({ username, avatar, url, repos }) => {
  return (
    <div>
      <h3>{username}</h3>
      <img src={avatar} alt="avatar" />
      <a href={url}>Go to GitHub Profil</a>
      {repos.map((repo) => (
        <ul>
          <li key={repo.name}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Profil;
