from fastapi import APIRouter
import sqlite3

router = APIRouter()

@router.get("/history")
def get_history():

    conn = sqlite3.connect("abformer.db")

    cursor = conn.cursor()

    cursor.execute("""
        SELECT antibody,
               antigen,
               prediction_score,
               predicted_label
        FROM predictions
        ORDER BY id DESC
        LIMIT 10
    """)

    rows = cursor.fetchall()

    conn.close()

    history = []

    for row in rows:

        history.append({
            "antibody": row[0][:10] + "...",
            "antigen": row[1][:10] + "...",
            "score": round(row[2], 4),
            "label": "ACTIVE" if row[3] == 1 else "INACTIVE"
        })

    return history



#Its just used to get last 10 predicns from db
# and send to frontend.