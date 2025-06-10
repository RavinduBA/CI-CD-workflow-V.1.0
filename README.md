# Github Actions Tutorial

## Introduction
CI/CD pipline for node project


## Steps
2. Create a new file in the `.github/workflows` directory
3. Define the workflow
4. Push the changes to the repository
5. Check the Actions tab in the repository

## Example Workflow
```yaml
name: Test Project

on:
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    container:
      image: node:20
    steps:
      - uses: actions/checkout@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
      - run: npm run build

```