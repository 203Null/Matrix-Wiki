---
sidebar_position: 3
---

import DocLink from "@site/src/components/DocLink/DocLink";

# Building on Linux

:::warning[Linux support note]
The Linux build path is less frequently exercised than the Windows and macOS paths. If you hit a platform-specific build issue, check for case-sensitive path problems first and report the issue in the [Matrix Wiki repository](https://github.com/203-Systems/Matrix-Wiki) or the [Matrix OS repository](https://github.com/203-Systems/MatrixOS).
:::

## Install Git

Git is necessary for cloning the Matrix OS repository. Install Git with:

```bash
sudo apt update
sudo apt install git
```

Verify the installation:

```bash
git --version
```

## Install Make

Make is essential for building Matrix OS. Install it using:

```bash
sudo apt install make
```

Confirm the installation:

```bash
make --version
```

## Clone the Matrix OS Repository

1. Make sure Git is installed as shown above.

2. Open your terminal.

3. Clone the Matrix OS repository:

   ```bash
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

4. Navigate to the cloned repository:

   ```bash
   cd MatrixOS
   ```

5. Initialize the submodules in the Matrix OS repository:

   ```bash
   git submodule update --init
   ```

## Install ESP-IDF

The ESP-IDF (Espressif IoT Development Framework) is required to build and upload Matrix OS to the Mystrix device. Matrix OS Mystrix builds require ESP-IDF 5.3.x and ESP32-S3 tooling. The commands below install v5.3.1.

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.3.1 --recursive https://github.com/espressif/esp-idf.git
cd ~/esp/esp-idf
./install.sh esp32s3
python3 $HOME/esp/esp-idf/tools/idf_tools.py install riscv32-esp-elf
```

If the installer reports missing system packages, install the packages it lists, then rerun `./install.sh esp32s3`.

## Build Matrix OS

:::info Matrix OS 4.0 device targets
Use `DEVICE=Mystrix` for Mystrix 1 family devices. Use `DEVICE=Mystrix2` for Mystrix 2 family devices.
:::

1. Load ESP-IDF by sourcing it in your terminal session:

   ```bash
   source ~/esp/esp-idf/export.sh
   ```

   For repeated development, add this command to your shell setup or configure your editor terminal to source ESP-IDF before running Matrix OS build commands.

2. Navigate to the Matrix OS root folder if your terminal isn’t already there.

3. Run the following command to build Matrix OS:

   ```bash
   make DEVICE=Mystrix build
   ```

   For Mystrix 2:

   ```bash
   make DEVICE=Mystrix2 build
   ```

4. Prepare for the upload by ensuring your Mystrix is in <DocLink to="/docs/Mystrix/UpdateMatrixOS#enter-os-update-mode">upload mode</DocLink>.

5. Install `psutil` (only needed once):

   ```bash
   pip install psutil
   ```

6. Upload the compiled Matrix OS to your Mystrix device:

   ```bash
   make DEVICE=Mystrix uf2-upload
   ```

   For Mystrix 2:

   ```bash
   make DEVICE=Mystrix2 uf2-upload
   ```

7. Your Mystrix device should now flash and start the newly compiled Matrix OS automatically.

For target examples and command chains, see [Build Matrix OS](../Overview). Use `build-dev` when you need logs; see <DocLink to="/docs/Developer/DebugMatrixOSCpp">Debug Your Application (C++)</DocLink>.
