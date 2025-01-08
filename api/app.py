from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Sample data
email_stats = {
    "total": 120,
    "unread": 35,
    "read": 70,
    "replied": 10,
    "drafted": 5,
}

email_activity = [
    {"time": "09:00", "emails": 5},
    {"time": "10:00", "emails": 8},
    {"time": "11:00", "emails": 12},
]


@app.route("/email-stats", methods=["GET"])
def get_email_stats():
    return jsonify(email_stats), 200


@app.route("/email-activity", methods=["GET"])
def get_email_activity():
    return jsonify(email_activity), 200


@app.route("/invoke", methods=["POST"])
def invoke_workflow():
    data = request.json
    workflow_input = data.get("input", {})

    # Simulate a workflow response
    response = {
        "status": "success",
        "message": "Workflow executed successfully",
        "input": workflow_input,
    }
    return jsonify(response), 201


if __name__ == "__main__":
    app.run(debug=True, port=8000)
