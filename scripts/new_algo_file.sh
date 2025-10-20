#!/usr/bin/env bash
set -euo pipefail

# Create next kata file under src/js using the scheme: 0001-6kyu-some-name.js
# Usage:
#   scripts/new_file.sh                   # → 0070-6kyu-replaceThisName.js
#   scripts/new_file.sh "valid braces"    # → 0070-6kyu-valid-braces.js

# Resolve project root from this script's location
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "$script_dir/.." && pwd)"
target_dir="$project_root/src/js"

mkdir -p "$target_dir"

default_name="${1:-replaceThisName}"

slugify() {
  # lowercase, turn non-alphanumerics into '-', trim leading/trailing '-'
  printf '%s' "$*" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//'
}

slug="$(slugify "$default_name")"
[[ -n "$slug" ]] || slug="replaceThisName"

# Find the highest numeric prefix among files like 0069-6kyu-*.js (any kyu)
last_num="$(
  find "$target_dir" -maxdepth 1 -type f -name '[0-9][0-9][0-9][0-9]-*kyu-*.js' -print \
    | sed -E 's#.*/##; s/^([0-9]{4})-.*/\1/' \
    | sort -n | tail -1 || true
)"
[[ -n "${last_num:-}" ]] || last_num="0000"

# Increment safely (avoid octal interpretation)
next_num=$((10#$last_num + 1))
printf -v next_padded '%04d' "$next_num"

base="${next_padded}-6kyu-${slug}"
filepath="${target_dir}/${base}.js"

# Avoid overwriting if same slug already exists
i=2
while [[ -e "$filepath" ]]; do
  filepath="${target_dir}/${base}-${i}.js"
  ((i++))
done

# Write your template
cat > "$filepath" <<'EOF'
// 6kyu
// 

// my solution

// to remember

// other solution from the internet

EOF

# Print path relative to project root for clarity
echo "Created: ${filepath#"$project_root/"}"
