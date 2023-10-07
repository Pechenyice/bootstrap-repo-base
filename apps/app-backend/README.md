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

## Extenal deps (Docker containers)

- PSQL
- Redis

## Apps specific information

Per app specific actions hints below

## apps/app-backend

Bootstrap features:
- Nest.js with all it's out of box features
- Env variables initialization and validation
- Prisma ORM with migrations flow
- Healthcheck (/health -> 200 "ok") for k8s integration

### Env init

```bash
$ pnpm init:env
```

### Generate Prisma migration

```bash
$ pnpm prisma:migrate {MIGRATION_NAME}
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


