# Foundry VTT Module Documentation

Centralized documentation site for Foundry VTT modules, hosted at [docs.rayners.dev](https://docs.rayners.dev).

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Modules Documented

- **[Journeys & Jamborees](https://docs.rayners.dev/journeys-and-jamborees/intro)** - Party management and travel mechanics
- **[ARGON Dragonbane](https://docs.rayners.dev/argon-dragonbane/intro)** - Enhanced Dragonbane RPG system support  
- **[Realms & Reaches](https://docs.rayners.dev/realms-and-reaches/intro)** - Biome and terrain mapping system
- **[Seasons & Stars](https://docs.rayners.dev/seasons-and-stars/intro)** - Modern calendar and timekeeping module
- **[Simple Calendar Compatibility Bridge](https://docs.rayners.dev/simple-calendar-compat/intro)** - 100% Simple Calendar API compatibility for modern calendar modules

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
