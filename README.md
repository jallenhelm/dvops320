# Writting Prompt Site
> This project is a hosted writing challenge platform designed to foster creativity, community, and writing consistency. Its primary purpose is to offer daily writing prompts that challenge users to write regularly while connecting with a community of fellow writers.

## Table of Contents
- [Deployment](#deploy)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Deploy
To deploy the site to github pages you need to just need to push the main branch up to the repo.
-Example: "git push" ";)"

To implement this I created a deployment script with a few adjustments that takes the branch creates a build of the content then uploades that build to the site. Then changed the settings for the repo to use a custom action instead of the pre-defined ones. Ensuring that the Upload artifact is pointed at the build directory is important to make sure the react app opens properly. Without this all that would render is the empty react template. 
