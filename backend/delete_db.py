import psycopg2

conn = psycopg2.connect(
    database="db",
    user="postgres",
    password="JpL|D?3~zVQ{E6.R",
    host='34.66.21.52',
)

table_list = ['league', 'teams', 'player']

# Create a cursor object
cursor = conn.cursor()

# Execute a SQL statement to drop a table
for table in table_list:
    cursor.execute(f"DROP TABLE IF EXISTS {table}")

# Commit the transaction
conn.commit()

# Close the cursor and connection
cursor.close()
conn.close()