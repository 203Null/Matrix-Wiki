---
sidebar_position: 2
---

import DocLink from "@site/src/components/DocLink/DocLink";

# Building on macOS

## Installing Homebrew
Homebrew is used here to install the command-line dependencies needed to build Matrix OS.

1. Visit [https://brew.sh/](https://brew.sh/) and follow the instructions to install the latest version of Homebrew
2. After installation, you may need to follow any on-screen instructions to add Homebrew to your system's PATH. Once installed, verify it by running:

```bash
brew --version
```

## Install Dependencies
The Matrix OS codebase is hosted in a Git repository and uses the Espressif IoT Development Framework to build and upload firmware for Mystrix. Install the required command-line dependencies with:

```bash
brew install git cmake ninja dfu-util python3 psutil
```

## Clone Matrix OS Repository
1. Clone the Matrix OS repository:
   ```bash
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

2. Navigate to the cloned repository:
   ```bash
   cd MatrixOS
   ```

3. Initialize the submodules in the Matrix OS repository:
   ```bash
   git submodule update --init
   ```

## Install ESP-IDF

Matrix OS Mystrix builds require ESP-IDF 5.3.x and ESP32-S3 tooling. The commands below install v5.3.1.

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.3.1 --recursive https://github.com/espressif/esp-idf.git
cd ~/esp/esp-idf
./install.sh esp32s3
python3 $HOME/esp/esp-idf/tools/idf_tools.py install riscv32-esp-elf
```

## Build Matrix OS
:::info Matrix OS 4.0 device targets
Use `DEVICE=Mystrix` for Mystrix 1 family devices. Use `DEVICE=Mystrix2` for Mystrix 2 family devices.
:::

1. Load ESP-IDF by sourcing it in your terminal session. You can run this command to set up ESP-IDF for the session:
   ```bash
   source ~/esp/esp-idf/export.sh
   ```

   For repeated development, add this command to your shell setup or configure your editor terminal to source ESP-IDF before running Matrix OS build commands. You can also add an alias such as `alias get_idf='. $HOME/esp/esp-idf/export.sh'`.

2. Go to the root folder of Matrix OS if your terminal isn’t already there.
3. Run this command to build Matrix OS:
   ```bash
   make DEVICE=Mystrix build
   ```
   For Mystrix 2:
   ```bash
   make DEVICE=Mystrix2 build
   ```
4. Prepare to upload to your Mystrix device. Make sure your Mystrix is in <DocLink to="/docs/Mystrix/UpdateMatrixOS#enter-os-update-mode">upload mode</DocLink> already.
5. Upload the compiled Matrix OS to Mystrix:
   ```bash
   make DEVICE=Mystrix uf2-upload
   ```
   For Mystrix 2:
   ```bash
   make DEVICE=Mystrix2 uf2-upload
   ```
6. Your Mystrix device should now flash and automatically start the newly compiled Matrix OS.

For target examples and command chains, see [Build Matrix OS](../Overview). Use `build-dev` when you need logs; see <DocLink to="/docs/Developer/DebugMatrixOSCpp">Debug Your Application (C++)</DocLink>.
