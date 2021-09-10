import React, { useEffect } from 'react';
import './main.less';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)

    useEffect(() => {
        dispatch(getRepos());
    }, [])


    return (
        <div className="search">
            <input type="text" placeholder="Input repo name" className="search-input" />
            <button className="search-btn"> Search</button>
        </div>
        <div>
            {repos.map(repo =>
                <Repo repo={repo} />
            )}
        </div>
    )

}

export default Main;
