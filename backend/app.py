from flask import Flask
from config import Config
from db import db  # Import db from db.py
from routes.budget_routes import budget_bp
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)  # Enable CORS for all routes

# Bind db to app
db.init_app(app)

# Register Blueprints
app.register_blueprint(budget_bp)

@app.route('/')
def hello_world():
    return 'HELLO Expensrr!'

# Create tables if they don't exist
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run()
