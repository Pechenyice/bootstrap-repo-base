# Bootstrap-repo-base

## Description

Bootstrap fullstack app with awesome functionality and dev comfort example

## Project structure

Bootstrap uses monorepo structure style ([turbo](https://turbo.build/repo/docs/getting-started/create-new))

### Installation

```bash
$ pnpm install
```

### Running the apps

```bash
$ pnpm dev
```

### Building the apps

```bash
$ pnpm build
```

## Apps specific information

Per app specific actions hints below

## apps/app-backend

Bootstrap features:
- Nest.js with all it's out of box features
- Env variables initialization and validation

### Env init

```bash
$ pnpm init:env
```

### Test

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```


