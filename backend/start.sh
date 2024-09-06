#!/bin/bash

echo "Starting backend..."
if [[ "$OSTYPE" == "msys" ]]; then
    # Activate the virtual environment on Windows (Git Bash)
    source venv/Scripts/activate
else
    # Activate the virtual environment on macOS/Linux
    source venv/bin/activate
fi

# Ensure Flask is run in the correct environment
export FLASK_APP=app
flask run
