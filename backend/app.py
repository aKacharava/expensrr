from flask import Flask
from config import Config
from db import db  # Import db from db.py
from routes.budget_routes import budget_bp

app = Flask(__name__)
app.config.from_object(Config)

# Bind db to app
db.init_app(app)

# Register Blueprints
app.register_blueprint(budget_bp)

# Create tables if they don't exist
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
