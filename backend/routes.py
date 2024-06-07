from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

# Mocked Data for services
services = [
    {
        "id": "1a",
        "category": "Cortes",
        "title": "Bob Curto",
        "description": "Perfeito para quem busca um visual prático e moderno. Este corte na altura do queixo oferece versatilidade e estilo.",
        "price": "R$70",
        "offer": "Nova tendência!"
    },
    {
        "id": "1b",
        "category": "Cortes",
        "title": "Long Layers",
        "description": "Camadas longas que adicionam movimento e leveza aos cabelos longos. Ideal para dar volume e forma sem sacrificar o comprimento.",
        "price": "R$80",
        "offer": "Mais vendido!"
    },
    {
        "id": "1c",
        "category": "Cortes",
        "title": "Pixie Cut",
        "description": "Corte super curto que combina praticidade e ousadia. Fácil de manter e perfeito para um look cheio de atitude.",
        "price": "R$90",
        "offer": "Disponível agora!"
    },
    {
        "id": "2a",
        "category": "Pedicure",
        "title": "Pedicure Simples",
        "description": "Tratamento essencial com corte e lixamento das unhas, remoção de cutículas, esfoliação leve e esmaltação.",
        "price": "R$30",
        "offer": "Novo!"
    },
    {
        "id": "2b",
        "category": "Pedicure",
        "title": "Pedicure Completa",
        "description": "Pedicure simples com esfoliação profunda, massagem relaxante e hidratação intensiva, finalizada com esmaltação.",
        "price": "R$45",
        "offer": "Últimos lugares!"
    },
    {
        "id": "3a",
        "category": "Manicure",
        "title": "Manicure Básica",
        "description": "Corte e lixamento das unhas, remoção de cutículas e esmaltação para mãos bem cuidadas.",
        "price": "R$25",
        "offer": "Disponível!"
    },
    {
        "id": "3b",
        "category": "Manicure",
        "title": "Manicure Francesinha",
        "description": "Manicure básica com estilo francesinha: linha branca nas pontas das unhas para um acabamento elegante.",
        "price": "R$35",
        "offer": "Promoção especial!"
    }
]

@main.route('/api/services', methods=['GET'])
def get_services():
    return jsonify({"services": services})

@main.route('/api/service/<service_id>', methods=['GET'])
def get_service(service_id):
    service = next((service for service in services if service['id'] == service_id), None)
    if service is None:
        return jsonify({"error": "Service not found"}), 404
    return jsonify(service)

@main.route('/api/appointments', methods=['POST'])
def schedule_service():
    data = request.get_json()
    print("Agendamento recebido:", data)
    return jsonify({"message": "Agendamento recebido com sucesso"}), 201