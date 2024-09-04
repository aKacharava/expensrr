from flask import Blueprint, request, jsonify
from app import db
from models.budget import Budget

budget_bp = Blueprint('budget', __name__)

@budget_bp.route('/budgets', methods=['GET'])
def get_budgets():
    budgets = Budget.query.all()
    return jsonify([budget.to_dict() for budget in budgets])

@budget_bp.route('/budgets', methods=['POST'])
def add_budget():
    data = request.get_json()
    new_budget = Budget(amount=data['amount'], category=data['category'], date=data['date'])
    db.session.add(new_budget)
    db.session.commit()
    return jsonify(new_budget.to_dict()), 201
