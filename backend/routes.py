from flask import Blueprint, jsonify, request

# Defina services_data globalmente ou importe-o de onde quer que seja definido
services_data = [
    {"id": "1a", "category": "Cortes", "title": "Bob Curto", "description": "Descrição do Bob Curto...", "price": "R$70", "offer": "Nova tendência!"},
    {"id": "1b", "category": "Cortes", "title": "Long Layers", "description": "Descrição do Long Layers...", "price": "R$80", "offer": "Mais vendido!"},
    {"id": "1c", "category": "Cortes", "title": "Pixie Cut", "description": "Descrição do Pixie Cut...", "price": "R$90", "offer": "Disponível agora!"},
    {"id": "2a", "category": "Pedicure", "title": "Pedicure Simples", "description": "Descrição da Pedicure Simples...", "price": "R$30", "offer": "Novo!"},
    {"id": "2b", "category": "Pedicure", "title": "Pedicure Completa", "description": "Descrição da Pedicure Completa...", "price": "R$45", "offer": "Últimos lugares!"},
    {"id": "3a", "category": "Manicure", "title": "Manicure Básica", "description": "Descrição da Manicure Básica...", "price": "R$25", "offer": "Disponível!"},
    {"id": "3b", "category": "Manicure", "title": "Manicure Francesinha", "description": "Descrição da Manicure Francesinha...", "price": "R$35", "offer": "Promoção especial!"}
]

main = Blueprint('main', __name__)

# Lista todos os serviços
@main.route('/api/services', methods=['GET'])
def get_services():
    return jsonify(services=services_data)

# Retorna um serviço pelo ID
@main.route('/api/services/<service_id>', methods=['GET'])
def get_service(service_id):
    service = next((s for s in services_data if s['id'] == service_id), None)
    if service:
        return jsonify(service), 200
    else:
        return jsonify(message="Serviço não encontrado"), 404

# Adiciona um novo serviço
@main.route('/api/services', methods=['POST'])
def add_service():
    data = request.json
    services_data.append(data)
    return jsonify(message="Serviço adicionado com sucesso"), 201

# Atualiza um serviço existente
@main.route('/api/services/<service_id>', methods=['PUT'])
def update_service(service_id):
    data = request.json
    service = next((s for s in services_data if s['id'] == service_id), None)
    if service:
        service.update(data)
        return jsonify(message="Serviço atualizado com sucesso"), 200
    else:
        return jsonify(message="Serviço não encontrado"), 404

# Remove um serviço pelo ID
@main.route('/api/services/<service_id>', methods=['DELETE'])
def delete_service(service_id):
    global services_data
    services_data = [s for s in services_data if s['id'] != service_id]
    return jsonify(message="Serviço removido com sucesso"), 200
