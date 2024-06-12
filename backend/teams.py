import json
import csv
import pandas as pd
import players as players
import os

directory = './json/teams'
team_list = []
country_dict = {'England' : 'Premier League', 'Spain' : 'La Liga', 'Germany' : 'Bundesliga'}

# read json file
for filename in os.listdir(directory):
    with open(os.path.join(directory, filename), 'r', encoding='utf-8') as f:
        data = json.load(f)
    
        # convert json to list of dictionaries
        for item in data['response']:
            row = {
                'team_id': item.get('team').get('id'),
                'name': item.get('team').get('name'),
                'country': item.get('team').get('country'),
                'league' : country_dict.get(item.get('team').get('country')),
                'venue': item.get('venue').get('name'),
                'city': item.get('venue').get('city'),
                'top_players' : players.stats(item.get('team').get('name')),
                'image' : item.get('team').get('logo')
            }
            team_list.append(row)

myFile = open('./csv/teams.csv', 'w', encoding='utf-8')
writer = csv.writer(myFile)
writer.writerow(['team_id', 'name', 'country', 'league', 'venue', 'city', 'top_players', 'image'])
for dictionary in team_list:
    writer.writerow(dictionary.values())
myFile.close()
