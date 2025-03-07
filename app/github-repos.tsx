// components/GithubRepos.tsx
import React, { useState, useEffect } from 'react';

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
};

type GithubReposProps = {
  username: string;
  language?: string;
};

const GithubRepos: React.FC<GithubReposProps> = ({ username, language }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Chamada direta à API do GitHub
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Erro ao buscar repositórios');
        }
        
        const data: Repository[] = await response.json();
        
        // Filtrar por linguagem no cliente, se necessário
        const filteredRepos = language 
          ? data.filter(repo => repo.language?.toLowerCase() === language.toLowerCase())
          : data;
        
        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username, language]);

  if (loading) {
    return <div>Carregando repositórios...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  if (repos.length === 0) {
    return <div>Nenhum repositório encontrado.</div>;
  }

  return (
    <div className="github-repos">
      <h2>Repositórios de {username} {language ? `em ${language}` : ''}</h2>
      <ul className="repo-list">
        {repos.map(repo => (
          <li key={repo.id} className="repo-item">
            <h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            {repo.description && <p>{repo.description}</p>}
            <div className="repo-meta">
              <span>Linguagem: {repo.language || 'Não especificada'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubRepos;