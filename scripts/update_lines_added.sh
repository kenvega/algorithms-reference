#!/usr/bin/env bash
set -euo pipefail # fail fast flags

FILE=".metrics/total_lines_added.txt"
mkdir -p .metrics

# # Get current total (if any)
# total=0
# [[ -f "$FILE" ]] && read -r total < "$FILE"

# ----- get current total (default 0) -----
if [[ -s "$FILE" ]]; then             # -s = file exists and is non-empty
  total=$(<"$FILE")                  # fast cat
  # If the file somehow contains non-digits, fall back to 0
  [[ "$total" =~ ^[0-9]+$ ]] || total=0
else
  total=0
fi

# Lines that will be added by *this* commit
# added=$(git diff --cached --numstat | awk '{sum += $1} END {print sum}')
added=$(git diff --cached --numstat \
        | awk '$3 != ".metrics/total_lines_added.txt" {sum+=$1} END{print sum}')


# If nothing new is staged, exit quietly so other hooks can run
[[ "$added" -eq 0 ]] && exit 0

# Write updated cumulative total
new_total=$((total + added))
echo "$new_total" > "$FILE"

# OPTIONAL progress message
echo "Added $added lines |  New total → $new_total"

# stages the updated metric file
git add "$FILE"
