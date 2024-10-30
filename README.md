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
-Example steps:

    -Ensure all files are tracked. Use "git add ." if needed
    -Commit any new files Use "git commit "Commit Name"
    -Push the new commit up to the repo. Use "git push"
        *At this step the deploy.yml will run as a custom action in the repo 

To implement this I created a deployment script with a few adjustments that takes the branch creates a build of the content then uploades that build to the site. Then changed the settings for the repo to use a custom action instead of the pre-defined ones. Ensuring that the Upload artifact is pointed at the build directory is important to make sure the react app opens properly. Without this all that would render is the empty react template. 

-Issues I ran into was changing the previous deployment strategy. Previously the pages was build from a gh-pages branch using local commands for building and deploying the site.

-After refactoring for new strategy targeting the correct path inside the react app caused some hangups originally I wanted to run from the public folder where the site would typically be ran from. This was incorrect as you want to run it from the build directory.

-After running from the build directory I no longer had issues with the live site being a blank react template. 
