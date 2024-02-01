# Bibliopolítica 
[![deploy](https://github.com/mnyrop/bibliopolitica/actions/workflows/deploy.yml/badge.svg)](https://github.com/mnyrop/bibliopolitica/actions/workflows/deploy.yml)

A digital history of the Chicano Studies Library. Exhibit front-end feat. [11ty](https://www.11ty.dev/) + [daisyui](https://daisyui.com/). IIIF assets via [aperitiiif](https://middlicomp.github.io/aperitiiif/).



<img alt="image labeled the chicano studies libray serials collection with a graphic line logo" src="https://marii.info/images/bibliopolitica.jpg" height=350/>

## Local Development

### Prerequisites 
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

### Steps
1. Checkout repository & cd into it.
    ``` sh
    git clone https://github.com/mnyrop/bibliopolitica.git && cd bibliopolitica
    ```
2. Install and/or load Node version
    ``` sh
    nvm install
    ```
3. Install node modules
    ``` sh
    npm install
    ```
4. Run development server
    ``` sh
    npm start
    ```
5. View in browser at http://localhost:8080/


## Deployment

- **Current**
  - commits to `main` branch will trigger GitHub action to build, test, and deploy the site to GitHub pages
- **Future**
  - commits to `staging` branch will trigger GitHub action to build, test, and deploy the site to GitHub pages
  - commits to `main` (via Pull Request from `staging`) will build, test, and deploy the site to prod host using SFTP
