from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# 🧠 Helper: connect to local database
def get_db_connection():
    conn = sqlite3.connect('appointments.db')
    conn.row_factory = sqlite3.Row
    return conn

# 🧱 Create table if not exists
with get_db_connection() as conn:
    conn.execute('''
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT,
            phone TEXT,
            appointment_date TEXT,
            appointment_time TEXT,
            reason TEXT
        )
    ''')
    conn.commit()

# 📨 POST route for saving form
@app.route('/api/appointments', methods=['POST'])
def create_appointment():
    data = request.json
    conn = get_db_connection()
    conn.execute('INSERT INTO appointments (full_name, phone, appointment_date, appointment_time, reason) VALUES (?, ?, ?, ?, ?)',
                 (data['full_name'], data['phone'], data['appointment_date'], data['appointment_time'], data['reason']))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Appointment saved successfully!'}), 201

# 🔍 Optional: Get all appointments
@app.route('/api/appointments', methods=['GET'])
def get_appointments():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM appointments').fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

if __name__ == '__main__':
    app.run(debug=True, port=5000)
