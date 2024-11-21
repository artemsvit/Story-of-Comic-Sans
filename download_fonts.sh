#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p fonts

# Download Comic Sans MS fonts
curl -o fonts/comic-sans-ms.woff2 "https://db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.woff2"
curl -o fonts/comic-sans-ms.woff "https://db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.woff"
curl -o fonts/comic-sans-ms.ttf "https://db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.ttf"

# Download Comic Sans MS Bold fonts
curl -o fonts/comic-sans-ms-bold.woff2 "https://db.onlinewebfonts.com/t/a10efb0e7b44b9a4898e14a5c00b1e44.woff2"
curl -o fonts/comic-sans-ms-bold.woff "https://db.onlinewebfonts.com/t/a10efb0e7b44b9a4898e14a5c00b1e44.woff"
curl -o fonts/comic-sans-ms-bold.ttf "https://db.onlinewebfonts.com/t/a10efb0e7b44b9a4898e14a5c00b1e44.ttf"

echo "Fonts downloaded successfully!"
