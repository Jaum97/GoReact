import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';
import RemoveButton from '../RemoveButton/index';

const saveToStorage = repos => localStorage.setItem('repo-list', JSON.stringify(repos));

// const handleRemove = (repos, repo) => {
//   saveToStorage(repos.filter(x => x.id !== repo.id));
//   console.log(repos);
// };

/* <RemoveButton onClick={handleRemove(repositories, repository)} /> */

const CompareList = ({ repositories }) => (
  <Container onLoad={saveToStorage(repositories)}>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <RemoveButton onClick={console.log(repositories)} />
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            {repository.stargazers_count}
            <small>stars</small>
          </li>
          <li>
            {repository.forks_count}
            <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            {repository.lastCommit}
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.String,
      owner: PropTypes.shape({
        login: PropTypes.String,
        avatar_url: PropTypes.String,
      }),
      stargazer_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.String,
    }),
  ).isRequired,
};

export default CompareList;
