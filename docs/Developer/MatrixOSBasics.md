---
sidebar_position: 0
---

# Developer Overview

Matrix OS can be extended in several ways. Start with the path that matches what you want to build, then use the API pages as reference once you have a working loop.

## Start Here

For most app and tooling work, start with [Matrix OS Developer Toolkit](./MatrixOSDeveloperToolkit). It gives you a browser-hosted Matrix OS runtime with input, LED, storage, Python, serial, MIDI, HID, logs, and automation tools.

Use the toolkit when you want to:

- try a Python snippet before copying it to device storage
- iterate on UI and LED behavior without flashing hardware
- inspect input events and LED frames
- run automation through the local JSON-RPC bridge
- debug whether a problem is in your app code or in the runtime

You should still test hardware-dependent behavior on a real device before release.

## Choose What You Are Building

| Goal | Start With | Use When |
| --- | --- | --- |
| Prototype locally | [Matrix OS Developer Toolkit](./MatrixOSDeveloperToolkit) | You want to run Matrix OS in the browser, test Python snippets, inspect input/LED state, or automate checks before using hardware. |
| Write a Python app | [Code Your Application (Python)](./PythonApplication) | You want a shareable app, quick iteration, and direct Matrix OS APIs from Python. |
| Write a native app | [Code Your Application (C++)](./CppApplication) | You need maximum performance, direct native APIs, or deeper integration with Matrix OS. |
| Build host software around a device | [Developer APP](./InterfacingWithMatrixOS/DeveloperAPP) | You want a clean controller canvas: use a Mystrix as an input surface and LED canvas for software running on a host. |
| Read device info or issue system commands | [System Remote API](./InterfacingWithMatrixOS/SystemRemoteAPI) | You need device/app metadata, reboot/settings/app launch commands, or a way to enter Developer APP from a host. |

## Recommended Flow

1. Open [Matrix OS Developer Toolkit](./MatrixOSDeveloperToolkit) and make sure you can run the simulator.
2. Pick Python or C++ based on the app you want to build.
3. Run the smallest example first: set one LED, read one input, then add storage or MIDI.
4. Keep the API reference open while you iterate.
5. Test on hardware before relying on timing, USB, HID, MIDI, storage, or pressure-sensitive input behavior.

## Host Control Model

Matrix OS has two host-facing protocol layers:

- [System Remote API](./InterfacingWithMatrixOS/SystemRemoteAPI) is for device information and system-level control. Use it to read version/device/app metadata, reboot or open settings, and enter apps such as Developer APP.
- [Developer APP](./InterfacingWithMatrixOS/DeveloperAPP) is for controller-style software. Enter Developer APP first, then use its focused protocol for input reports and LED canvas writes.

Use System Remote API to get the device into the right app state. Use Developer APP when your host software wants Matrix OS hardware to behave like a clean controller surface.

## API Model

Matrix OS 4.0 uses the Input API for keypad, touchbar, scalar controls, and future input types.

- C++ apps use `MatrixOS::Input`, `InputEvent`, and `KeypadInfo`.
- Python apps use `MatrixOS.Input` and dictionary-based input events.
- Host tools should model input through the same Input API concepts, even when transport command names still say `KEYPAD`.

If you are migrating C++ code from 3.x, read [Migration From 3.x to 4.x](./MatrixOSApplicationCppAPI/MigrationFrom3To4) before updating app logic.

## What To Read Next

- New to Matrix OS development: [Matrix OS Developer Toolkit](./MatrixOSDeveloperToolkit)
- Writing a first Python app: [Code Your Application (Python)](./PythonApplication)
- Updating native app input handling: [Input API](./MatrixOSApplicationCppAPI/Input)
- Building host-side controller software: [Developer APP](./InterfacingWithMatrixOS/DeveloperAPP)
- Device info and system control: [System Remote API](./InterfacingWithMatrixOS/SystemRemoteAPI)
- API details: [Matrix OS Application API (C++)](/docs/category/matrix-os-application-api-c) and [Matrix OS Application API (Python)](/docs/category/matrix-os-application-api-python)
