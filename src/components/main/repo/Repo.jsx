import React from 'react';
import { NavLink } from 'react-router-dom';
import './repo.less';


const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.full_name}</NavLink></div>
                <div className="repo-header-stars">🌟: {repo.stargazers_count}  | 🤖 {repo.language}  | Updated on {repo.updated_at}</div>

            </div>

            <a href={repo.html_url} target="_blank" className="repo-link">GitHub Link</a>

        </div>
    )
};

export default Repo;
