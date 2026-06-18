#!/usr/bin/env bash

set -euo pipefail

BASE_URL="https://eintr.net/WoW/"
OUT_DIR="public/maps"

mkdir -p "$OUT_DIR"

maps=(
  "images/Black-fathom-Deeps-walkthrough-map-1024x865.jpg"
  "images/Blackrock-Depths-walkthrough-map-1-1024x683.jpg"
  "images/Blackrock-Mountain-entrance-map-1.jpg"
  "images/Blackrock-Spire-Lower-walkthrough-map-1-1024x684.jpg"
  "images/Blackrock-Spire-Upper-walkthrough-map-1-1024x533.jpg"
  "images/Deadmines-walkthrough-map-1-1024x772.jpg"
  "images/Dire-Maul-East-walkthrough-map-1-1024x848.jpg"
  "images/Dire-Maul-Entrance-walkthrough-1.jpg"
  "images/Dire-Maul-North-walkthrough-map.jpg"
  "images/Dire-Maul-West-walkthrough-map-1024x635.jpg"
  "images/Gnomeregan-Entrance-walkthrough-map.jpg"
  "images/Gnomeregan-walkthrough-map-v2-1024x777.jpg"
  "images/Maraudon-outside-with-minimap-orientation-map-390x360.jpg"
  "images/Maraudon-walkthrough-map-1024x589.jpg"
  "images/Ragefire-Chasm-walkthrough-map-1024x683.jpg"
  "images/Razorfen-Downs-walkthrough-map.jpg"
  "images/Razorfen-Kraul-walkthrough-map.jpg"
  "images/SM-Armory-Cathedral-entrance-walkthrough-map.jpg"
  "images/SM-Graveyard-walkthrough-map-1024x683.jpg"
  "images/SM-Library-walkthrough-map-1024x683.jpg"
  "images/Scholomance-walkthrough-map-v2-1024x868.jpg"
  "images/Shadowfang-Keep-walkthrough-map-1024x768.jpg"
  "images/Stratholme-walkthrough-map-1024x781.jpg"
  "images/Sunken-Temple-Entrance-walkthrough-map.jpg"
  "images/Sunken-Temple-walkthrough-map-1024x733.jpg"
  "images/The-Stockades-walkthrough-map-1024x683.jpg"
  "images/Uldaman-walkthrough-map.jpg"
  "images/Wailing-Caverns-walkthrough-map-1024x683.jpg"
  "images/ZulFarrak-walkthrough-map-1024x683.jpg"
)

for map in "${maps[@]}"; do
  filename="$(basename "$map")"
  url="${BASE_URL%/}/$map"

  echo "Downloading $filename..."
  curl -L --fail "$url" -o "$OUT_DIR/$filename"
done

echo "Done. Maps saved to $OUT_DIR"