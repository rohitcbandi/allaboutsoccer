import json
import csv

league_list = []

file1 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/bundesligastandings.json'
file2 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/bundesligatopscorers.json'
file3 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/bundesligatopassists.json'

# Load the contents of the first JSON file into a variable
with open(file1, 'r') as f1:
    data1 = json.load(f1)
  
# Load the contents of the second JSON file into a variable
with open(file2, 'r') as f2:
    data2 = json.load(f2)

# Load the contents of the second JSON file into a variable
with open(file3, 'r') as f3:
    data3 = json.load(f3)

# Merge the two dictionary objects
ger_data = {
    'id': data1['response'][0].get('league').get('id'),
    'name': data1['response'][0].get('league').get('name'),
    'country': data1['response'][0].get('league').get('country'),
    'teams' : ', '.join([item.get('team').get('name') for item in data1['response'][0].get('league').get('standings')[0]]),
    'top_scorers': f"{data2['response'][0].get('player').get('name')} {data2['response'][1].get('player').get('name')} {data2['response'][2].get('player').get('name')}",
    'top_assists': f"{data3['response'][0].get('player').get('name')} {data3['response'][1].get('player').get('name')} {data3['response'][2].get('player').get('name')}",
    'image': data1['response'][0].get('league').get('logo')
}

league_list.append(ger_data)

file4 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/eplstandings.json'
file5 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/epltopscorers.json'
file6 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/epl_topassists.json'

# Load the contents of the first JSON file into a variable
with open(file4, 'r') as f4:
    data4 = json.load(f4)
  
# Load the contents of the second JSON file into a variable
with open(file5, 'r') as f5:
    data5 = json.load(f5)

# Load the contents of the second JSON file into a variable
with open(file6, 'r') as f6:
    data6 = json.load(f6)

# Merge the two dictionary objects
epl_data = {
    'id': data4['response'][0].get('league').get('id'),
    'name': data4['response'][0].get('league').get('name'),
    'country': data4['response'][0].get('league').get('country'),
    'teams' : ', '.join([item.get('team').get('name') for item in data4['response'][0].get('league').get('standings')[0]]),
    'top_scorer' : ', '.join([f"{item.get('player').get('firstname')} {item.get('player').get('lastname')}" for item in data5['response']][:3]),
    'top_assists' : ', '.join([f"{item.get('player').get('firstname')} {item.get('player').get('lastname')}" for item in data6['response']][:3]),
    'image': data4['response'][0].get('league').get('logo')
}

league_list.append(epl_data)

file7 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/laligastandings.json'
file8 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/laligatopscorers.json'
file9 = '/home/rohitcbandi/cs331e/cs331e/backend/json/leagues/laligatopassists.json'

# Load the contents of the first JSON file into a variable
with open(file7, 'r') as f7:
    data7 = json.load(f7)
  
# Load the contents of the second JSON file into a variable
with open(file8, 'r') as f8:
    data8 = json.load(f8)

# Load the contents of the second JSON file into a variable
with open(file9, 'r') as f9:
    data9 = json.load(f9)

# Merge the two dictionary objects
esp_data = {
    'id': data7['response'][0].get('league').get('id'),
    'name': data7['response'][0].get('league').get('name'),
    'country': data7['response'][0].get('league').get('country'),
    'teams' : ', '.join([item.get('team').get('name') for item in data7['response'][0].get('league').get('standings')[0]]),
    'top_scorer' : ', '.join([f"{item.get('player').get('firstname')} {item.get('player').get('lastname')}" for item in data8['response']][:3]),
    'top_assists' : ', '.join([f"{item.get('player').get('firstname')} {item.get('player').get('lastname')}" for item in data9['response']][:3]),
    'image': data7['response'][0].get('league').get('logo')
}

league_list.append(esp_data)

myFile = open('csv/leagues.csv', 'w')
writer = csv.writer(myFile)
writer.writerow(['league_id', 'name', 'country', 'teams', 'top_scorer', 'top_assists', 'image'])
for dictionary in league_list:
    writer.writerow(dictionary.values())
myFile.close()

    