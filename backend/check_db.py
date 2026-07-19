import sqlite3
import pandas as pd

conn = sqlite3.connect("abformer.db")

print("🔹 Predictions Table:")
df = pd.read_sql_query("SELECT * FROM predictions", conn)

# ❌ remove timestamp column
df = df.drop(columns=["timestamp"])

print(df)

print("\n🔹 Experiments Table:")
df2 = pd.read_sql_query("SELECT * FROM experiments", conn)
print(df2)


#opening the database and displaying its contents.