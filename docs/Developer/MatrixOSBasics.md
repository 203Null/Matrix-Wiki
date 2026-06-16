---
sidebar_position: 1
---

# Developer Overview

Matrix OS can be extended in several ways. Start with the path that matches what you want to build, then use the API pages as reference once you have a working loop.

## Start Here

For most development work, start with [Matrix OS Developer Toolkit](./MatrixOSDeveloperToolkit). It gives you a browser-hosted Matrix OS runtime with input, LED, storage, Python, serial, MIDI, HID, logs, and automation tools.

Use the toolkit when you want to:

- try a Python snippet before copying it to device storage
- iterate on UI and LED behavior without flashing hardware
- inspect input events and LED frames
- run automation through the local JSON-RPC bridge
- debug whether a problem is in your app code or in the runtime

You should still test hardware-dependent behavior on a real device before release.

## Choose A Development Path

| Goal | Start With | Use When |
| --- | --- | --- |
| Write a Python app | [Code Your Application (Python)](./PythonApplication) | You want a shareable app, quick iteration, and direct Matrix OS APIs from Python. |
| Write a native app | [Code Your Application (C++)](./CppApplication) | You need maximum performance, direct native APIs, or deeper integration with Matrix OS. |
| Use the C++ API | [Matrix OS Application API (C++)](/docs/category/matrix-os-application-api-c) | You already have a native app and need exact API behavior. |
| Use the Python API | [Matrix OS Application API (Python)](/docs/category/matrix-os-application-api-python) | You already have a Python app and need exact module/function behavior. |
| Control Matrix OS from a host | [System Remote API](./InterfacingWithMatrixOS/SystemRemoteAPI) | You are building tools, automation, simulator workflows, or host integrations. |
| Work with the Developer APP protocol | [Developer APP](./InterfacingWithMatrixOS/DeveloperAPP) | You need live input reports, LED writes, or app-session control over the focused developer protocol. |
| Build Matrix OS | [Building Matrix OS](/docs/category/building-matrix-os) | You want to compile firmware, run a simulator build, or contribute to Matrix OS itself. |
| Port Matrix OS | [Porting Matrix OS](/docs/category/porting-matrix-os) | You are bringing Matrix OS to a new device, platform, or hardware layer. |

## Recommended Flow

1. Open [Matrix OS Developer Toolkit](./MatrixOSDeveloperToolkit) and make sure you can run the simulator.
2. Pick Python or C++ based on the app you want to build.
3. Run the smallest example first: set one LED, read one input, then add storage or MIDI.
4. Keep the API reference open while you iterate.
5. Test on hardware before relying on timing, USB, HID, MIDI, storage, or pressure-sensitive input behavior.

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
- Automating tests or tools: [System Remote API](./InterfacingWithMatrixOS/SystemRemoteAPI)
