from flask import Blueprint, request, jsonify
from db import db  # Import db from db.py
from models.budget import Budget

budget_bp = Blueprint('budget', __name__)

@budget_bp.route('/budgets', methods=['GET'])
def get_budgets():
    budgets = Budget.query.all()
    return jsonify([budget.to_dict() for budget in budgets])

@budget_bp.route('/budgets', methods=['POST'])
def add_budget():
    data = request.get_json()
    new_budget = Budget(type=data['type'], date=data['date'], amount=data['amount'], description=data['description'], category=data['category'])
    db.session.add(new_budget)
    db.session.commit()
    return jsonify(new_budget.to_dict()), 201

@budget_bp.route('/budgets/clear', methods=['DELETE'])
def clear_budgets():
    try:
        num_rows_deleted = db.session.query(Budget).delete()  # Delete all rows
        db.session.commit()  # Commit the changes
        return jsonify({"message": f"Deleted {num_rows_deleted} budgets."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
