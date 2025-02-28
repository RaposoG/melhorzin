import React from "react";

export type ReposInfoProps = {
  id: string;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  owner: {
    avatar_url: string;
  };
};

export type RepoResponseProps = {
  id: string;
  avatar: string;
  name: string;
  description: string;
  url: string;
  techs: string[];
};

export interface MenuProps {
  id: string;
  title: string;
  link: string;
}

export interface TechSkills {
  icon: string;
  title: string;
  description: string;
}

export interface Services {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TechSkillsProps {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesProps {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ReorderProps {
  data: Array<TechSkills>;
}

export interface ButtonComponentProps {
  label: string;
  link: string;
  ariaLabel: string;
  isMobile?: boolean;
  children: React.ReactElement;
}

export interface ExperienceDescriptionComponentProps {
  jobTitle: string;
  company: string;
  locality: string;
  period: string;
  children: React.ReactNode;
}

export interface GithubReposProps {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  homepage?: string | null;
  license?: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  topics: Array<string>;
  language?: any;
}

export interface GithubReposResponseProps {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string | null;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string | Array<string> | null;
  languages_url: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  merges_url: string;
  milestones_url: string;
  mirror_url: string | null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    html_url: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
  };
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: Array<string>;
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
}
