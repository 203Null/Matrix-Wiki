---
sidebar_position: 4
---

# Build via GitHub Actions

The [Matrix OS GitHub repository](https://github.com/203-Systems/MatrixOS) uses [GitHub Actions](https://github.com/203-Systems/MatrixOS/actions) to build Matrix OS on every commit. For a small source change, you can fork the repository, commit your change, and download compiled firmware from the workflow artifacts. The firmware is compiled in nightly mode.

:::info
GitHub Actions builds can be slow because the workflow may need to fetch the repository, submodules, ESP-IDF, and compile from scratch.
:::
