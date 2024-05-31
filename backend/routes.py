from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/api/example', methods=['GET'])
def example():
    return jsonify(message="Hello from Flask!")
