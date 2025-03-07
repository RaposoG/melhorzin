export interface GithubRepositoryOwner {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  }
  
  export interface GithubRepository {
    id: number;
    name: string;
    full_name: string;
    owner: GithubRepositoryOwner;
    html_url: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    clone_url: string;
    size: number;
    stargazers_count: number;
    language: string | null;
    forks_count: number;
    open_issues_count: number;
    topics: string[];
    visibility: string;
    default_branch: string;
  }