import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
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
