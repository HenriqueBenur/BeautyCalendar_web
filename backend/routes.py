# routes.py
from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/api/example')
def example():
    return jsonify(message="Hello from Flask!")

@main.route('/api/services', methods=['GET'])
def services():
    services_data = [
        {"id": "1a", "category": "Cortes", "title": "Bob Curto", "description": "Descrição do Bob Curto...", "price": "R$70", "offer": "Nova tendência!"},
        {"id": "1b", "category": "Cortes", "title": "Long Layers", "description": "Descrição do Long Layers...", "price": "R$80", "offer": "Mais vendido!"},
        {"id": "1c", "category": "Cortes", "title": "Pixie Cut", "description": "Descrição do Pixie Cut...", "price": "R$90", "offer": "Disponível agora!"},
        {"id": "2a", "category": "Pedicure", "title": "Pedicure Simples", "description": "Descrição da Pedicure Simples...", "price": "R$30", "offer": "Novo!"},
        {"id": "2b", "category": "Pedicure", "title": "Pedicure Completa", "description": "Descrição da Pedicure Completa...", "price": "R$45", "offer": "Últimos lugares!"},
        {"id": "3a", "category": "Manicure", "title": "Manicure Básica", "description": "Descrição da Manicure Básica...", "price": "R$25", "offer": "Disponível!"},
        {"id": "3b", "category": "Manicure", "title": "Manicure Francesinha", "description": "Descrição da Manicure Francesinha...", "price": "R$35", "offer": "Promoção especial!"}
    ]
    return jsonify(services=services_data)
