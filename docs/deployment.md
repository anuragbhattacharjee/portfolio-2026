# GitHub Pages deployment

The production site is built from this repository's `main` branch and published to the `master` branch of `anuragbhattacharjee/anuragbhattacharjee.github.io`.

## One-time setup

1. In GitHub, create a fine-grained personal access token that can access only `anuragbhattacharjee/anuragbhattacharjee.github.io`.
2. Give the token repository **Contents: Read and write** permission.
3. In this repository, open **Settings → Secrets and variables → Actions → New repository secret**.
4. Name the secret `PAGES_DEPLOY_TOKEN` and paste the token value.
5. Open **Actions → Deploy portfolio → Run workflow** once, or push to `main`.

The workflow installs locked dependencies, runs lint and the production build, then replaces the published files with the generated `dist` directory. If the secret is missing, validation still runs and deployment is skipped with a warning.

Pull requests run the separate **Validate portfolio** workflow. The deployment workflow also supports a manual run from GitHub's Actions tab.
