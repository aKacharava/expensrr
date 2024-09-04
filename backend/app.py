from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from models.budget import Budget
from routes.budget_routes import budget_bp

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

# Register Blueprints
app.register_blueprint(budget_bp)

# Create tables if they don't exist
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
