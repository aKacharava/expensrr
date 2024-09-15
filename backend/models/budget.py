from db import db
from datetime import datetime

class Budget(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(10), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'date': self.date,
            'amount': self.amount,
            'description': self.description,
            'category': self.category,
        }
