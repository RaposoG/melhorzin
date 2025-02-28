import { payloadManipulation } from "@/utils/utils";
import { describe, test, expect, expectTypeOf } from "vitest";

const mockData = [
  {
    id: 271365549,
    node_id: "MDEwOlJlcG9zaXRvcnkyNzEzNjU1NDk=",
    name: "agenda-live",
    full_name: "matheusgomessouza/agenda-live",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/agenda-live",
    description:
      "Código desenvolvido com base na playlist Angular Course 9 sobre a mentoria de Michelli Brito (@MichelliBrito) / Code developed based on the Angular Course 9 playlist mentored by Michelli Brito (@MichelliBrito)",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/agenda-live",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/agenda-live/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/agenda-live/deployments",
    created_at: "2020-06-10T19:21:46Z",
    updated_at: "2024-05-06T12:15:03Z",
    pushed_at: "2024-05-06T12:07:26Z",
    git_url: "git://github.com/matheusgomessouza/agenda-live.git",
    ssh_url: "git@github.com:matheusgomessouza/agenda-live.git",
    clone_url: "https://github.com/matheusgomessouza/agenda-live.git",
    svn_url: "https://github.com/matheusgomessouza/agenda-live",
    homepage: "",
    size: 964,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 27,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["angular", "css", "html", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 27,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 249829125,
    node_id: "MDEwOlJlcG9zaXRvcnkyNDk4MjkxMjU=",
    name: "be-the-hero",
    full_name: "matheusgomessouza/be-the-hero",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/be-the-hero",
    description:
      "Código produzido durante a Semana OmniStack 11.0 / Code produced during OmniStack Week 11.0",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/be-the-hero",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/be-the-hero/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/be-the-hero/deployments",
    created_at: "2020-03-24T22:11:16Z",
    updated_at: "2022-03-01T21:13:16Z",
    pushed_at: "2023-03-04T08:40:28Z",
    git_url: "git://github.com/matheusgomessouza/be-the-hero.git",
    ssh_url: "git@github.com:matheusgomessouza/be-the-hero.git",
    clone_url: "https://github.com/matheusgomessouza/be-the-hero.git",
    svn_url: "https://github.com/matheusgomessouza/be-the-hero",
    homepage: "",
    size: 1245,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 32,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["axios", "nodejs", "react-native", "reactjs"],
    visibility: "public",
    forks: 0,
    open_issues: 32,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 250783754,
    node_id: "MDEwOlJlcG9zaXRvcnkyNTA3ODM3NTQ=",
    name: "casa-criativa",
    full_name: "matheusgomessouza/casa-criativa",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/casa-criativa",
    description:
      'Projeto "Casa Criativa" desenvolvido durante a Semana Omnistack 11.0 com a mentoria de Mayk Brito / Project "Creative House" developed during Omnistack week 11.0 under the mentorship of Mayk Brito',
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/casa-criativa",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/casa-criativa/deployments",
    created_at: "2020-03-28T12:00:26Z",
    updated_at: "2022-03-03T19:15:59Z",
    pushed_at: "2023-03-04T08:47:21Z",
    git_url: "git://github.com/matheusgomessouza/casa-criativa.git",
    ssh_url: "git@github.com:matheusgomessouza/casa-criativa.git",
    clone_url: "https://github.com/matheusgomessouza/casa-criativa.git",
    svn_url: "https://github.com/matheusgomessouza/casa-criativa",
    homepage: "",
    size: 7190,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 7,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "css",
      "expressjs",
      "html",
      "javascript",
      "nodejs",
      "nunjucks",
      "sqlite",
    ],
    visibility: "public",
    forks: 0,
    open_issues: 7,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 384591144,
    node_id: "MDEwOlJlcG9zaXRvcnkzODQ1OTExNDQ=",
    name: "code",
    full_name: "matheusgomessouza/code",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/code",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/code",
    forks_url: "https://api.github.com/repos/matheusgomessouza/code/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/code/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/code/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/code/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/code/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/code/issues/events{/number}",
    events_url: "https://api.github.com/repos/matheusgomessouza/code/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/code/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/code/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/code/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/code/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/code/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/code/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/code/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/code/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/code/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/code/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/code/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/code/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/code/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/code/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/code/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/code/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/code/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/code/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/code/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/matheusgomessouza/code/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/code/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/code/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/code/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/code/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/code/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/code/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/code/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/code/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/code/deployments",
    created_at: "2021-07-10T02:12:27Z",
    updated_at: "2021-07-14T03:28:27Z",
    pushed_at: "2021-07-14T03:28:24Z",
    git_url: "git://github.com/matheusgomessouza/code.git",
    ssh_url: "git@github.com:matheusgomessouza/code.git",
    clone_url: "https://github.com/matheusgomessouza/code.git",
    svn_url: "https://github.com/matheusgomessouza/code",
    homepage: null,
    size: 2600,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Go",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 755288348,
    node_id: "R_kgDOLQTJHA",
    name: "community-cares",
    full_name: "matheusgomessouza/community-cares",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/community-cares",
    description: "Mobile app created using Expo + React Native",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/community-cares",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares/deployments",
    created_at: "2024-02-09T20:18:36Z",
    updated_at: "2024-05-10T14:03:43Z",
    pushed_at: "2024-05-10T14:03:40Z",
    git_url: "git://github.com/matheusgomessouza/community-cares.git",
    ssh_url: "git@github.com:matheusgomessouza/community-cares.git",
    clone_url: "https://github.com/matheusgomessouza/community-cares.git",
    svn_url: "https://github.com/matheusgomessouza/community-cares",
    homepage: "",
    size: 1572,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["axios", "expo", "jest", "react-native", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 764641039,
    node_id: "R_kgDOLZN_Dw",
    name: "community-cares-server",
    full_name: "matheusgomessouza/community-cares-server",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/community-cares-server",
    description: "Community Cares server",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/community-cares-server",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/community-cares-server/deployments",
    created_at: "2024-02-28T12:58:40Z",
    updated_at: "2024-03-04T19:59:01Z",
    pushed_at: "2024-04-05T16:47:50Z",
    git_url: "git://github.com/matheusgomessouza/community-cares-server.git",
    ssh_url: "git@github.com:matheusgomessouza/community-cares-server.git",
    clone_url:
      "https://github.com/matheusgomessouza/community-cares-server.git",
    svn_url: "https://github.com/matheusgomessouza/community-cares-server",
    homepage: "https://community-cares-server.vercel.app",
    size: 103,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["axios", "expressjs", "husky", "nodejs", "typescript", "vitest"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 443418158,
    node_id: "R_kgDOGm4GLg",
    name: "context-api-challenge",
    full_name: "matheusgomessouza/context-api-challenge",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/context-api-challenge",
    description:
      "Proposta de desafio para refatorar um aplicativo e compartilhar o estado entre os componentes / Challenge proposal for re-factoring an application and share state between components",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/context-api-challenge",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/context-api-challenge/deployments",
    created_at: "2021-12-31T20:06:28Z",
    updated_at: "2022-03-01T14:19:00Z",
    pushed_at: "2022-03-01T14:31:35Z",
    git_url: "git://github.com/matheusgomessouza/context-api-challenge.git",
    ssh_url: "git@github.com:matheusgomessouza/context-api-challenge.git",
    clone_url: "https://github.com/matheusgomessouza/context-api-challenge.git",
    svn_url: "https://github.com/matheusgomessouza/context-api-challenge",
    homepage: "",
    size: 356,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["reactjs"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 577906454,
    node_id: "R_kgDOInInFg",
    name: "crud-springboot-jpa",
    full_name: "matheusgomessouza/crud-springboot-jpa",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/crud-springboot-jpa",
    description: "CRUD criado utilizando Springboot Java e JPA",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/crud-springboot-jpa/deployments",
    created_at: "2022-12-13T19:55:18Z",
    updated_at: "2022-12-13T20:02:24Z",
    pushed_at: "2022-12-13T20:07:50Z",
    git_url: "git://github.com/matheusgomessouza/crud-springboot-jpa.git",
    ssh_url: "git@github.com:matheusgomessouza/crud-springboot-jpa.git",
    clone_url: "https://github.com/matheusgomessouza/crud-springboot-jpa.git",
    svn_url: "https://github.com/matheusgomessouza/crud-springboot-jpa",
    homepage: null,
    size: 63,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 629719560,
    node_id: "R_kgDOJYjCCA",
    name: "dispear",
    full_name: "matheusgomessouza/dispear",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/dispear",
    description: "Song created with Sonic Pi coding music environment",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/dispear",
    forks_url: "https://api.github.com/repos/matheusgomessouza/dispear/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/dispear/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/dispear/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/issues/events{/number}",
    events_url: "https://api.github.com/repos/matheusgomessouza/dispear/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/dispear/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/matheusgomessouza/dispear/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/dispear/deployments",
    created_at: "2023-04-18T22:24:21Z",
    updated_at: "2024-05-18T20:55:16Z",
    pushed_at: "2024-05-18T20:55:13Z",
    git_url: "git://github.com/matheusgomessouza/dispear.git",
    ssh_url: "git@github.com:matheusgomessouza/dispear.git",
    clone_url: "https://github.com/matheusgomessouza/dispear.git",
    svn_url: "https://github.com/matheusgomessouza/dispear",
    homepage: "",
    size: 702,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Ruby",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["ruby", "sonic-pi"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 448674305,
    node_id: "R_kgDOGr46AQ",
    name: "dtmoney",
    full_name: "matheusgomessouza/dtmoney",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/dtmoney",
    description:
      "Project developed during chapter II of Ignite course of Rocketseat / Projeto desenvolvido durante o capítulo II do curso Ignite da Rocketseat",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/dtmoney",
    forks_url: "https://api.github.com/repos/matheusgomessouza/dtmoney/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/dtmoney/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/dtmoney/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/issues/events{/number}",
    events_url: "https://api.github.com/repos/matheusgomessouza/dtmoney/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/dtmoney/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/matheusgomessouza/dtmoney/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/dtmoney/deployments",
    created_at: "2022-01-16T21:12:17Z",
    updated_at: "2022-03-01T21:50:46Z",
    pushed_at: "2022-03-01T21:50:04Z",
    git_url: "git://github.com/matheusgomessouza/dtmoney.git",
    ssh_url: "git@github.com:matheusgomessouza/dtmoney.git",
    clone_url: "https://github.com/matheusgomessouza/dtmoney.git",
    svn_url: "https://github.com/matheusgomessouza/dtmoney",
    homepage: "",
    size: 232,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["miragejs", "reactjs", "styled-components", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 375586493,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzU1ODY0OTM=",
    name: "e-diaristas",
    full_name: "matheusgomessouza/e-diaristas",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/e-diaristas",
    description:
      "Esse projeto foi desenvolvido durante a semana TreinaWeb Multi-stack. / This project was developed during the TreinaWeb Multi-stack week.",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/e-diaristas",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/e-diaristas/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/e-diaristas/deployments",
    created_at: "2021-06-10T05:57:32Z",
    updated_at: "2022-03-02T16:45:00Z",
    pushed_at: "2022-03-02T16:49:00Z",
    git_url: "git://github.com/matheusgomessouza/e-diaristas.git",
    ssh_url: "git@github.com:matheusgomessouza/e-diaristas.git",
    clone_url: "https://github.com/matheusgomessouza/e-diaristas.git",
    svn_url: "https://github.com/matheusgomessouza/e-diaristas",
    homepage: "",
    size: 20768,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "expo",
      "laravel",
      "material-ui",
      "nextjs",
      "react-native",
      "typescript",
    ],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 505628920,
    node_id: "R_kgDOHiNI-A",
    name: "event-platform",
    full_name: "matheusgomessouza/event-platform",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/event-platform",
    description:
      "Projeto construído durante o Ignite Lab / Project built during Ignite Lab",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/event-platform",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/event-platform/deployments",
    created_at: "2022-06-20T23:37:42Z",
    updated_at: "2022-06-25T01:53:19Z",
    pushed_at: "2022-06-25T01:48:30Z",
    git_url: "git://github.com/matheusgomessouza/event-platform.git",
    ssh_url: "git@github.com:matheusgomessouza/event-platform.git",
    clone_url: "https://github.com/matheusgomessouza/event-platform.git",
    svn_url: "https://github.com/matheusgomessouza/event-platform",
    homepage: "event-platform-ashy.vercel.app",
    size: 1677,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["apollo", "graphcms", "graphql", "jest", "nextjs", "reactjs"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 622944305,
    node_id: "R_kgDOJSFgMQ",
    name: "express-prisma-api",
    full_name: "matheusgomessouza/express-prisma-api",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/express-prisma-api",
    description: "API created using ExpressJS framework + Prisma ORM",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/express-prisma-api",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/express-prisma-api/deployments",
    created_at: "2023-04-03T11:37:18Z",
    updated_at: "2023-04-03T12:03:54Z",
    pushed_at: "2023-05-12T13:48:04Z",
    git_url: "git://github.com/matheusgomessouza/express-prisma-api.git",
    ssh_url: "git@github.com:matheusgomessouza/express-prisma-api.git",
    clone_url: "https://github.com/matheusgomessouza/express-prisma-api.git",
    svn_url: "https://github.com/matheusgomessouza/express-prisma-api",
    homepage: "",
    size: 322,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["express-js", "prisma-orm", "typescript", "vitest"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 802632941,
    node_id: "R_kgDOL9c07Q",
    name: "fast-paced",
    full_name: "matheusgomessouza/fast-paced",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/fast-paced",
    description: "Song created with Sonic Pi coding music environment",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/fast-paced",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/fast-paced/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/fast-paced/deployments",
    created_at: "2024-05-18T20:43:56Z",
    updated_at: "2024-05-18T20:54:44Z",
    pushed_at: "2024-05-18T20:54:41Z",
    git_url: "git://github.com/matheusgomessouza/fast-paced.git",
    ssh_url: "git@github.com:matheusgomessouza/fast-paced.git",
    clone_url: "https://github.com/matheusgomessouza/fast-paced.git",
    svn_url: "https://github.com/matheusgomessouza/fast-paced",
    homepage: "",
    size: 115,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Ruby",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["ruby", "sonic-pi"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 488051241,
    node_id: "R_kgDOHRcSKQ",
    name: "feedback-widget",
    full_name: "matheusgomessouza/feedback-widget",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/feedback-widget",
    description:
      "Projeto construído durante o Next Level Week #08 / Project built during Next Level Week #08",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/feedback-widget",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/feedback-widget/deployments",
    created_at: "2022-05-03T02:10:31Z",
    updated_at: "2022-05-28T03:03:20Z",
    pushed_at: "2022-05-07T22:33:45Z",
    git_url: "git://github.com/matheusgomessouza/feedback-widget.git",
    ssh_url: "git@github.com:matheusgomessouza/feedback-widget.git",
    clone_url: "https://github.com/matheusgomessouza/feedback-widget.git",
    svn_url: "https://github.com/matheusgomessouza/feedback-widget",
    homepage: "feedback-widget-xi.vercel.app",
    size: 4331,
    stargazers_count: 1,
    watchers_count: 1,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "axios",
      "expo",
      "expressjs",
      "headlessui",
      "jest",
      "nodejs",
      "prisma",
      "reactjs",
      "sqlite3",
      "tailwindcss",
      "typescript",
    ],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 441268820,
    node_id: "R_kgDOGk06VA",
    name: "github-explorer",
    full_name: "matheusgomessouza/github-explorer",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/github-explorer",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/github-explorer",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/github-explorer/deployments",
    created_at: "2021-12-23T18:47:55Z",
    updated_at: "2021-12-28T01:31:16Z",
    pushed_at: "2021-12-28T01:31:13Z",
    git_url: "git://github.com/matheusgomessouza/github-explorer.git",
    ssh_url: "git@github.com:matheusgomessouza/github-explorer.git",
    clone_url: "https://github.com/matheusgomessouza/github-explorer.git",
    svn_url: "https://github.com/matheusgomessouza/github-explorer",
    homepage: null,
    size: 476,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 370514774,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzA1MTQ3NzQ=",
    name: "inmana",
    full_name: "matheusgomessouza/inmana",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/inmana",
    description:
      "Prevenção de perdas com gerenciamento inteligente da data de validade.  /  Loss prevention with smart expiration date management.",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/inmana",
    forks_url: "https://api.github.com/repos/matheusgomessouza/inmana/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/inmana/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/inmana/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/issues/events{/number}",
    events_url: "https://api.github.com/repos/matheusgomessouza/inmana/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/inmana/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/matheusgomessouza/inmana/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/inmana/deployments",
    created_at: "2021-05-24T23:57:57Z",
    updated_at: "2022-03-02T14:03:19Z",
    pushed_at: "2022-03-02T14:02:42Z",
    git_url: "git://github.com/matheusgomessouza/inmana.git",
    ssh_url: "git@github.com:matheusgomessouza/inmana.git",
    clone_url: "https://github.com/matheusgomessouza/inmana.git",
    svn_url: "https://github.com/matheusgomessouza/inmana",
    homepage: "",
    size: 49,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Elixir",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["elixir", "phoenix", "phoenix-framework"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 379126391,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzkxMjYzOTE=",
    name: "letmeask",
    full_name: "matheusgomessouza/letmeask",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/letmeask",
    description:
      "Projeto desenvolvido durante a Next Level Week Together / Project developed during the Next Level Week Together",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/letmeask",
    forks_url: "https://api.github.com/repos/matheusgomessouza/letmeask/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/letmeask/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/letmeask/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/letmeask/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/letmeask/deployments",
    created_at: "2021-06-22T03:07:45Z",
    updated_at: "2022-03-02T16:32:45Z",
    pushed_at: "2022-03-02T16:31:50Z",
    git_url: "git://github.com/matheusgomessouza/letmeask.git",
    ssh_url: "git@github.com:matheusgomessouza/letmeask.git",
    clone_url: "https://github.com/matheusgomessouza/letmeask.git",
    svn_url: "https://github.com/matheusgomessouza/letmeask",
    homepage: "",
    size: 542,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["firebase", "reactjs", "sass", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 355007243,
    node_id: "MDEwOlJlcG9zaXRvcnkzNTUwMDcyNDM=",
    name: "matheusgomessouza",
    full_name: "matheusgomessouza/matheusgomessouza",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/matheusgomessouza",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/matheusgomessouza",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/matheusgomessouza/deployments",
    created_at: "2021-04-06T00:13:52Z",
    updated_at: "2021-10-26T23:43:45Z",
    pushed_at: "2024-04-08T11:43:08Z",
    git_url: "git://github.com/matheusgomessouza/matheusgomessouza.git",
    ssh_url: "git@github.com:matheusgomessouza/matheusgomessouza.git",
    clone_url: "https://github.com/matheusgomessouza/matheusgomessouza.git",
    svn_url: "https://github.com/matheusgomessouza/matheusgomessouza",
    homepage: null,
    size: 62,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 664730840,
    node_id: "R_kgDOJ5782A",
    name: "mathpholio",
    full_name: "matheusgomessouza/mathpholio",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/mathpholio",
    description: "This is my personal website.",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/mathpholio",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/mathpholio/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/mathpholio/deployments",
    created_at: "2023-07-10T16:06:29Z",
    updated_at: "2024-04-23T13:51:05Z",
    pushed_at: "2024-05-28T17:00:16Z",
    git_url: "git://github.com/matheusgomessouza/mathpholio.git",
    ssh_url: "git@github.com:matheusgomessouza/mathpholio.git",
    clone_url: "https://github.com/matheusgomessouza/mathpholio.git",
    svn_url: "https://github.com/matheusgomessouza/mathpholio",
    homepage: "https://mathpholio.vercel.app",
    size: 1160,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["jest", "nextjs", "react", "tailwindcss", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 353574479,
    node_id: "MDEwOlJlcG9zaXRvcnkzNTM1NzQ0Nzk=",
    name: "moveit",
    full_name: "matheusgomessouza/moveit",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/moveit",
    description:
      "Projeto desenvolvido durante a Next Level Week #04 / Project developed during the Next Level Week #04",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/moveit",
    forks_url: "https://api.github.com/repos/matheusgomessouza/moveit/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/moveit/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/moveit/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/issues/events{/number}",
    events_url: "https://api.github.com/repos/matheusgomessouza/moveit/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/moveit/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/matheusgomessouza/moveit/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/moveit/deployments",
    created_at: "2021-04-01T04:37:31Z",
    updated_at: "2022-03-02T13:42:51Z",
    pushed_at: "2022-03-02T13:46:27Z",
    git_url: "git://github.com/matheusgomessouza/moveit.git",
    ssh_url: "git@github.com:matheusgomessouza/moveit.git",
    clone_url: "https://github.com/matheusgomessouza/moveit.git",
    svn_url: "https://github.com/matheusgomessouza/moveit",
    homepage: "https://moveit-nextjs-nlw.vercel.app",
    size: 414,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["nextjs", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 373688997,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzM2ODg5OTc=",
    name: "my-score-app",
    full_name: "matheusgomessouza/my-score-app",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/my-score-app",
    description:
      "Desafio proposto para admissão de emprego em empresa multinacional do ramo financeiro e dados / Challenge proposed for admission of employment in a multinational company in the financial and data sector",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/my-score-app",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/my-score-app/deployments",
    created_at: "2021-06-04T01:39:55Z",
    updated_at: "2022-03-01T20:30:36Z",
    pushed_at: "2022-03-01T14:41:26Z",
    git_url: "git://github.com/matheusgomessouza/my-score-app.git",
    ssh_url: "git@github.com:matheusgomessouza/my-score-app.git",
    clone_url: "https://github.com/matheusgomessouza/my-score-app.git",
    svn_url: "https://github.com/matheusgomessouza/my-score-app",
    homepage: "https://my-score-app.vercel.app",
    size: 1967,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["eslint", "react", "reactjs", "redux", "sass", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 269490718,
    node_id: "MDEwOlJlcG9zaXRvcnkyNjk0OTA3MTg=",
    name: "nlw-ecoleta",
    full_name: "matheusgomessouza/nlw-ecoleta",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/nlw-ecoleta",
    description:
      "Projeto construído durante o Next Level Week #01 /  Project built during Next Level Week #01",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-ecoleta/deployments",
    created_at: "2020-06-05T00:04:18Z",
    updated_at: "2023-09-02T23:54:32Z",
    pushed_at: "2023-03-04T22:22:40Z",
    git_url: "git://github.com/matheusgomessouza/nlw-ecoleta.git",
    ssh_url: "git@github.com:matheusgomessouza/nlw-ecoleta.git",
    clone_url: "https://github.com/matheusgomessouza/nlw-ecoleta.git",
    svn_url: "https://github.com/matheusgomessouza/nlw-ecoleta",
    homepage: "",
    size: 4555,
    stargazers_count: 6,
    watchers_count: 6,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 33,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "express",
      "javascript",
      "nodejs",
      "react",
      "react-native",
      "reactjs",
      "sqlite3",
      "typescript",
    ],
    visibility: "public",
    forks: 5,
    open_issues: 33,
    watchers: 6,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 420805586,
    node_id: "R_kgDOGRT70g",
    name: "nlw-heat",
    full_name: "matheusgomessouza/nlw-heat",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/nlw-heat",
    description:
      "Projeto desenvolvido durante a Next Level Week Heat / Project develop during the Next Level Week Heat",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/nlw-heat",
    forks_url: "https://api.github.com/repos/matheusgomessouza/nlw-heat/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/nlw-heat/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/nlw-heat/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/nlw-heat/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/nlw-heat/deployments",
    created_at: "2021-10-24T21:59:11Z",
    updated_at: "2022-06-08T00:49:15Z",
    pushed_at: "2022-03-02T13:31:59Z",
    git_url: "git://github.com/matheusgomessouza/nlw-heat.git",
    ssh_url: "git@github.com:matheusgomessouza/nlw-heat.git",
    clone_url: "https://github.com/matheusgomessouza/nlw-heat.git",
    svn_url: "https://github.com/matheusgomessouza/nlw-heat",
    homepage: "",
    size: 9193,
    stargazers_count: 3,
    watchers_count: 3,
    language: "Elixir",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "elixir",
      "react-native",
      "reactjs",
      "sass",
      "socket-io",
      "typescript",
    ],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 3,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 580174797,
    node_id: "R_kgDOIpTDzQ",
    name: "notifications-service",
    full_name: "matheusgomessouza/notifications-service",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/notifications-service",
    description: "Nest.js microservice project for notifications",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/notifications-service",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/notifications-service/deployments",
    created_at: "2022-12-19T22:40:59Z",
    updated_at: "2022-12-22T16:41:40Z",
    pushed_at: "2023-01-03T13:35:13Z",
    git_url: "git://github.com/matheusgomessouza/notifications-service.git",
    ssh_url: "git@github.com:matheusgomessouza/notifications-service.git",
    clone_url: "https://github.com/matheusgomessouza/notifications-service.git",
    svn_url: "https://github.com/matheusgomessouza/notifications-service",
    homepage: "",
    size: 114,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["nestjs", "nodejs", "prisma"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 359636832,
    node_id: "MDEwOlJlcG9zaXRvcnkzNTk2MzY4MzI=",
    name: "plantmanager",
    full_name: "matheusgomessouza/plantmanager",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/plantmanager",
    description:
      "Aplicação mobile com React Native produzida durante o Next Level Week #05 / Mobile application with React Native produced during Next Level Week #05",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/plantmanager",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/plantmanager/deployments",
    created_at: "2021-04-20T00:33:06Z",
    updated_at: "2022-03-01T20:28:24Z",
    pushed_at: "2022-03-01T20:29:02Z",
    git_url: "git://github.com/matheusgomessouza/plantmanager.git",
    ssh_url: "git@github.com:matheusgomessouza/plantmanager.git",
    clone_url: "https://github.com/matheusgomessouza/plantmanager.git",
    svn_url: "https://github.com/matheusgomessouza/plantmanager",
    homepage: "",
    size: 898,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["expo", "react-native", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 367975070,
    node_id: "MDEwOlJlcG9zaXRvcnkzNjc5NzUwNzA=",
    name: "podcastr",
    full_name: "matheusgomessouza/podcastr",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/podcastr",
    description:
      "Projeto desenvolvido durante a Next Level Week #05 / Project developed during the Next Level Week #05",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/podcastr",
    forks_url: "https://api.github.com/repos/matheusgomessouza/podcastr/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/podcastr/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/podcastr/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/podcastr/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/podcastr/deployments",
    created_at: "2021-05-16T20:06:41Z",
    updated_at: "2022-03-02T13:54:15Z",
    pushed_at: "2022-03-02T13:53:58Z",
    git_url: "git://github.com/matheusgomessouza/podcastr.git",
    ssh_url: "git@github.com:matheusgomessouza/podcastr.git",
    clone_url: "https://github.com/matheusgomessouza/podcastr.git",
    svn_url: "https://github.com/matheusgomessouza/podcastr",
    homepage: "",
    size: 4047,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["axios", "nextjs", "reactjs", "sass", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 405699046,
    node_id: "MDEwOlJlcG9zaXRvcnk0MDU2OTkwNDY=",
    name: "proffy",
    full_name: "matheusgomessouza/proffy",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/proffy",
    description:
      "Projeto desenvolvido durante a Next Level Week #2 / Project developed during the Next Level Week #2",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/proffy",
    forks_url: "https://api.github.com/repos/matheusgomessouza/proffy/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/proffy/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/proffy/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/issues/events{/number}",
    events_url: "https://api.github.com/repos/matheusgomessouza/proffy/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/proffy/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/matheusgomessouza/proffy/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/proffy/deployments",
    created_at: "2021-09-12T16:49:44Z",
    updated_at: "2022-03-02T13:34:04Z",
    pushed_at: "2022-03-02T13:32:39Z",
    git_url: "git://github.com/matheusgomessouza/proffy.git",
    ssh_url: "git@github.com:matheusgomessouza/proffy.git",
    clone_url: "https://github.com/matheusgomessouza/proffy.git",
    svn_url: "https://github.com/matheusgomessouza/proffy",
    homepage: "",
    size: 644,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["expo", "javascript", "react-native", "reactjs", "typescript"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 343558453,
    node_id: "MDEwOlJlcG9zaXRvcnkzNDM1NTg0NTM=",
    name: "rocketpay",
    full_name: "matheusgomessouza/rocketpay",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/rocketpay",
    description: "API de pagamentos em Elixir / Payments API in Elixir",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/rocketpay",
    forks_url: "https://api.github.com/repos/matheusgomessouza/rocketpay/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/matheusgomessouza/rocketpay/teams",
    hooks_url: "https://api.github.com/repos/matheusgomessouza/rocketpay/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/rocketpay/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/rocketpay/deployments",
    created_at: "2021-03-01T21:11:19Z",
    updated_at: "2022-03-02T16:42:44Z",
    pushed_at: "2022-03-02T16:42:04Z",
    git_url: "git://github.com/matheusgomessouza/rocketpay.git",
    ssh_url: "git@github.com:matheusgomessouza/rocketpay.git",
    clone_url: "https://github.com/matheusgomessouza/rocketpay.git",
    svn_url: "https://github.com/matheusgomessouza/rocketpay",
    homepage: "",
    size: 32,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Elixir",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["ecto", "elixir", "phoenix", "phoenix-framework"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 371367270,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzEzNjcyNzA=",
    name: "search-hero",
    full_name: "matheusgomessouza/search-hero",
    private: false,
    owner: {
      login: "matheusgomessouza",
      id: 62625213,
      node_id: "MDQ6VXNlcjYyNjI1MjEz",
      avatar_url: "https://avatars.githubusercontent.com/u/62625213?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matheusgomessouza",
      html_url: "https://github.com/matheusgomessouza",
      followers_url: "https://api.github.com/users/matheusgomessouza/followers",
      following_url:
        "https://api.github.com/users/matheusgomessouza/following{/other_user}",
      gists_url:
        "https://api.github.com/users/matheusgomessouza/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matheusgomessouza/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matheusgomessouza/subscriptions",
      organizations_url: "https://api.github.com/users/matheusgomessouza/orgs",
      repos_url: "https://api.github.com/users/matheusgomessouza/repos",
      events_url:
        "https://api.github.com/users/matheusgomessouza/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matheusgomessouza/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/matheusgomessouza/search-hero",
    description:
      "Mecanismo de busca de personagens da Marvel, utilizando a API da Marvel Comics™️ / Search mechanism of Marvel characters that uses Marvel's free API ",
    fork: false,
    url: "https://api.github.com/repos/matheusgomessouza/search-hero",
    forks_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/forks",
    keys_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/teams",
    hooks_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/hooks",
    issue_events_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/events",
    assignees_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/branches{/branch}",
    tags_url: "https://api.github.com/repos/matheusgomessouza/search-hero/tags",
    blobs_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/languages",
    stargazers_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/stargazers",
    contributors_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/contributors",
    subscribers_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/subscribers",
    subscription_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/subscription",
    commits_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/merges",
    archive_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/downloads",
    issues_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/labels{/name}",
    releases_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/matheusgomessouza/search-hero/deployments",
    created_at: "2021-05-27T12:34:49Z",
    updated_at: "2022-03-03T19:22:46Z",
    pushed_at: "2022-03-30T19:36:09Z",
    git_url: "git://github.com/matheusgomessouza/search-hero.git",
    ssh_url: "git@github.com:matheusgomessouza/search-hero.git",
    clone_url: "https://github.com/matheusgomessouza/search-hero.git",
    svn_url: "https://github.com/matheusgomessouza/search-hero",
    homepage: "",
    size: 3363,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "axios",
      "crypto-js",
      "reactjs",
      "styled-components",
      "typescript",
    ],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
];

describe("Object manipulation [payloadManipulation]", () => {
  test("if payloadManipulation function returns an Array<GithubReposProps>", () => {
    const result = payloadManipulation(mockData);

    expectTypeOf(result).toBeArray();
    expect(result).not.toBeTypeOf("undefined");
  });
});
