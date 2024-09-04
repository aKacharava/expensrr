#!/bin/bash

# Function to run the frontend
run_frontend() {
  echo "Starting frontend..."
  cd frontend || exit
  npm run dev  # Assuming you're using `npm` and `vite` for development
}

# Function to run the backend
run_backend() {
  echo "Starting backend..."
  cd backend || exit
  source venv/Scripts/activate  # Activate virtual environment
  flask run
}

# Start the frontend and backend
run_frontend &
run_backend &

# Wait for all background jobs to finish
wait
