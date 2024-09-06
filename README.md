
## Features

- Add, edit, and delete budget categories.
- Track expenses based on category.
- Set custom date ranges for tracking expenses.
- Simple and intuitive interface.

## Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Python (Flask)
- **Database:** SQLite (via SQLAlchemy)
- **Deployment:** Firebase

## Installation

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Python 3.x](https://www.python.org/)
- [Node.js & npm](https://nodejs.org/) (for the frontend)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/yourusername/expensrr.git
cd expensrr
```

### Backend Setup

1. Navigate to the `backend` directory and create a virtual environment:

    ```bash
    cd backend
    python -m venv venv
    ```

2. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Create the SQLite database:

    ```bash
    flask shell
    from db import db
    db.create_all()
    exit()
    ```

4. Start the Flask server using the `start.sh` bash script:

    ```bash
    ./start.sh
    ```

The backend should now be running on `http://127.0.0.1:5000`.

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the frontend server:

    ```bash
    npm run dev
    ```

The frontend should now be running on `http://localhost:5173`.

## API Endpoints

Here are the main API endpoints for managing budgets:

### `GET /budgets`

Fetches a list of all budgets.

```bash
curl http://127.0.0.1:5000/budgets
```

### `POST /budgets`

Creates a new budget entry. Example JSON payload:

```json
{
    "amount": 500,
    "category": "Groceries",
    "date": "2024-09-01"
}
```

```bash
curl -X POST -H "Content-Type: application/json" -d '{"amount": 500, "category": "Groceries", "date": "2024-09-01"}' http://127.0.0.1:5000/budgets
```

### `DELETE /budgets/clear`

Clear all budget entries (for testing purposes).

```bash
curl -X DELETE http://localhost:5000/budgets/clear
```

## Folder Structure

```
expensrr/
│
├── backend/                # Backend code (Flask)
│   ├── app.py              # Main Flask app
│   ├── db.py               # Database initialization
│   ├── models/             # SQLAlchemy models
│   ├── routes/             # API route definitions
│   └── venv/               # Virtual environment
│
├── frontend/               # Frontend code (React.js)
│   ├── src/                # Source files for the frontend
│   ├── public/             # Public assets (index.html)
│   └── node_modules/       # Node.js dependencies
│
└── start_all.sh            # Bash script to start both servers
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.
