#!/usr/bin/env bash
set -euo pipefail

FILE=".metrics/total_lines_added.txt"
mkdir -p .metrics

# ----- get current total (default 0) -----
if [[ -s "$FILE" ]]; then
  total=$(<"$FILE")
  [[ "$total" =~ ^[0-9]+$ ]] || total=0
else
  total=0
fi

# ----- count added lines with filters -----
added=$(
  git diff --cached --unified=0 --no-color \
  | grep '^+' \
  | grep -v '^+++' \
  | sed 's/^+//' \
  | grep -vE '^[[:space:]]*$' \
  | grep -vE '^[[:space:]]*//' \
  | grep -v 'console\.log' \
  | wc -l
)

# If nothing new is staged, exit quietly
[[ "$added" -eq 0 ]] && exit 0

# ----- update total -----
new_total=$((total + added))
echo "$new_total" > "$FILE"

echo "Added $added lines | New total → $new_total"

git add "$FILE"