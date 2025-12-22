#/bin/bash

# This script is used to generate the USAGE.md file and the usage Markdown text in README.md. You should
# use the `make usage` command instead of calling this script directly.

echo "
\`\`\`
$(./slider-cli --help-wrapped)
\`\`\`
" > USAGE.md
awk '
    BEGIN       {p=1}
    /^## Help Dialog/   {print;system("cat USAGE.md");p=0}
    /^## Feature To-Do List/     {p=1}
    p' README.md > NEW.md
mv NEW.md README.md