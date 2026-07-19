# consists of db operns:

#Create database tables
       
#Store prediction results
       
#Store experiment metrics
       
#Retrieve later if needed



import sqlite3

def create_tables():

    conn = sqlite3.connect("abformer.db")

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS predictions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        antibody TEXT,
        antigen TEXT,
        prediction_score REAL,
        predicted_label INTEGER,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS experiments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        epoch INTEGER,
        loss REAL,
        accuracy REAL,
        mcc REAL,
        prauc REAL
    )
    """)

    conn.commit()

    conn.close()


def save_prediction(ab, ag, score, label):

    conn = sqlite3.connect("abformer.db")

    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO predictions (
        antibody,
        antigen,
        prediction_score,
        predicted_label
    )
    VALUES (?, ?, ?, ?)
    """, (ab, ag, score, label))

    conn.commit()

    conn.close()


def save_metrics(epoch, loss, acc, mcc, prauc):

    conn = sqlite3.connect("abformer.db")

    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO experiments (
        epoch,
        loss,
        accuracy,
        mcc,
        prauc
    )
    VALUES (?, ?, ?, ?, ?)
    """, (epoch, loss, acc, mcc, prauc))

    conn.commit()

    conn.close()


create_tables()