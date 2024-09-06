#!/bin/bash

echo "Starting backend..."
if [[ "$OS" == "Windows_NT" ]]; then
    # Activate the virtual environment on Windows
    source venv/Scripts/activate
else
    # Activate the virtual environment on macOS/Linux
    source venv/bin/activate
fi
flask run
