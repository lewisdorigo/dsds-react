#!/bin/bash

# Set the parent directory (change this to your target directory)
PARENT_DIR="./src/layout"

# Loop through each directory in the parent directory
for dir in "$PARENT_DIR"/*/; do
    # Extract the directory name (without the full path)
    DIRECTORY=$(basename "$dir")

    # Define the path for the index.ts file
    INDEX_FILE="${dir}index.ts"

    # Write the content to the index.ts file
    echo "import * as Types from './${DIRECTORY}.type';" > "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"
    echo "export * from './${DIRECTORY}';" >> "$INDEX_FILE"
    echo "export { Types };" >> "$INDEX_FILE"

    echo "Created $INDEX_FILE"
done
