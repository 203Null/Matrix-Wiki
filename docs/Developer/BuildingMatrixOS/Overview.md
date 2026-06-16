---
sidebar_position: 0
---

# Build Matrix OS

Use this section when you are changing Matrix OS itself: building firmware, flashing custom builds, testing native changes, or contributing to the Matrix OS source tree.

If you are only writing an app, start with [Code Your Application (Python)](../PythonApplication) or [Code Your Application (C++)](../CppApplication) instead.

## Choose Your Build Host

| Build host | Start here |
| --- | --- |
| Windows | [Building on Windows](./Mystrix/Windows) |
| macOS | [Building on macOS](./Mystrix/MacOS) |
| Linux | [Building on Linux](./Mystrix/Linux) |
| GitHub Actions | [Build via GitHub Actions](./Mystrix/GithubActions) |

The platform pages cover dependency setup, cloning the Matrix OS repository, building for Mystrix targets, and uploading firmware.

## Device Targets

Use `DEVICE=Mystrix` for Mystrix 1 family devices and `DEVICE=Mystrix2` for Mystrix 2 family devices.

Use `build-dev` when you need development logs. See [Debug Your Application (C++)](../DebugMatrixOSCpp) for where logs appear and how to add useful log points.

## Common Build Commands

Run these from the Matrix OS repository after your platform toolchain is installed and loaded.

| Command | Use it for |
| --- | --- |
| `make DEVICE=Mystrix build` | Build firmware for Mystrix 1 family devices. |
| `make DEVICE=Mystrix2 build` | Build firmware for Mystrix 2 family devices. |
| `make DEVICE=Mystrix build-dev` | Build Mystrix 1 firmware with development logging enabled. |
| `make DEVICE=Mystrix uf2-upload` | Upload a compiled Mystrix 1 build while the device is in upload mode. |
| `make DEVICE=Mystrix clean build uf2-upload` | Clean, rebuild, and upload in one command. |

Use `DEVICE=Mystrix2` in the same command shapes for Mystrix 2 hardware.
