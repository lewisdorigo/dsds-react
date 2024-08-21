#!/bin/bash

# Directories to process
directories=("components" "context" "patterns");

cd './src/';

# Loop through each directory
for dir in "${directories[@]}"; do
    # Check if directory exists
    if [ -d "$dir" ]; then
        # Navigate to the directory
        cd "$dir" || exit;

        # Create or clear the index.ts file
        > index.ts;

        # Loop through each subdirectory
        for subdir in */; do
            # Remove the trailing slash from the directory name
            subdir_name=${subdir%/};

            # Write the export statement to index.ts
            echo "export * as $subdir_name from './$subdir_name';" >> index.ts;
        done

        echo "Created ./src/$dir/index.ts.";

        # Go back to the parent directory
        cd ..;
    else
        echo "Directory $dir does not exist.";
    fi
done

cd ..;
