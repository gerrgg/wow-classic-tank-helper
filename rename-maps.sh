#!/usr/bin/env bash

set -euo pipefail

MAP_DIR="public/maps"

declare -A renames=(
  ["Black-fathom-Deeps-walkthrough-map-1024x865.jpg"]="blackfathom-deeps.jpg"
  ["Blackrock-Depths-walkthrough-map-1-1024x683.jpg"]="blackrock-depths.jpg"
  ["Blackrock-Mountain-entrance-map-1.jpg"]="blackrock-mountain-entrance.jpg"
  ["Blackrock-Spire-Lower-walkthrough-map-1-1024x684.jpg"]="lower-blackrock-spire.jpg"
  ["Blackrock-Spire-Upper-walkthrough-map-1-1024x533.jpg"]="upper-blackrock-spire.jpg"
  ["Deadmines-walkthrough-map-1-1024x772.jpg"]="deadmines.jpg"
  ["Dire-Maul-East-walkthrough-map-1-1024x848.jpg"]="dire-maul-east.jpg"
  ["Dire-Maul-Entrance-walkthrough-1.jpg"]="dire-maul-entrance.jpg"
  ["Dire-Maul-North-walkthrough-map.jpg"]="dire-maul-north.jpg"
  ["Dire-Maul-West-walkthrough-map-1024x635.jpg"]="dire-maul-west.jpg"
  ["Gnomeregan-Entrance-walkthrough-map.jpg"]="gnomeregan-entrance.jpg"
  ["Gnomeregan-walkthrough-map-v2-1024x777.jpg"]="gnomeregan.jpg"
  ["Maraudon-outside-with-minimap-orientation-map-390x360.jpg"]="maraudon-entrance.jpg"
  ["Maraudon-walkthrough-map-1024x589.jpg"]="maraudon.jpg"
  ["Ragefire-Chasm-walkthrough-map-1024x683.jpg"]="ragefire-chasm.jpg"
  ["Razorfen-Downs-walkthrough-map.jpg"]="razorfen-downs.jpg"
  ["Razorfen-Kraul-walkthrough-map.jpg"]="razorfen-kraul.jpg"
  ["SM-Armory-Cathedral-entrance-walkthrough-map.jpg"]="scarlet-monastery-armory-cathedral-entrance.jpg"
  ["SM-Graveyard-walkthrough-map-1024x683.jpg"]="scarlet-monastery-graveyard.jpg"
  ["SM-Library-walkthrough-map-1024x683.jpg"]="scarlet-monastery-library.jpg"
  ["Scholomance-walkthrough-map-v2-1024x868.jpg"]="scholomance.jpg"
  ["Shadowfang-Keep-walkthrough-map-1024x768.jpg"]="shadowfang-keep.jpg"
  ["Stratholme-walkthrough-map-1024x781.jpg"]="stratholme.jpg"
  ["Sunken-Temple-Entrance-walkthrough-map.jpg"]="sunken-temple-entrance.jpg"
  ["Sunken-Temple-walkthrough-map-1024x733.jpg"]="sunken-temple.jpg"
  ["The-Stockades-walkthrough-map-1024x683.jpg"]="the-stockades.jpg"
  ["Uldaman-walkthrough-map.jpg"]="uldaman.jpg"
  ["Wailing-Caverns-walkthrough-map-1024x683.jpg"]="wailing-caverns.jpg"
  ["ZulFarrak-walkthrough-map-1024x683.jpg"]="zul-farrak.jpg"
)

for old_name in "${!renames[@]}"; do
  old_path="$MAP_DIR/$old_name"
  new_path="$MAP_DIR/${renames[$old_name]}"

  if [[ -f "$old_path" ]]; then
    echo "Renaming: $old_name -> ${renames[$old_name]}"
    mv "$old_path" "$new_path"
  else
    echo "Skipping missing file: $old_name"
  fi
done

echo "Done."