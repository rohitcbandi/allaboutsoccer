import json
import os
import csv
import pandas as pd

directory = './json/players'

player_list = []

for filename in os.listdir(directory):
        with open(os.path.join(directory, filename), 'r') as f:
            data = json.load(f)

            for item in data['response']:
                row = {
                    'player_id': item.get('player').get('id'),
                    'name': f"{item.get('player').get('firstname')} {item.get('player').get('lastname')}",
                    'age': item.get('player').get('age'),
                    'nationality': item.get('player').get('nationality'),
                    'team': item['statistics'][0].get('team').get('name'),
                    'position': item['statistics'][0].get('games').get('position'),
                    'league' : item['statistics'][0].get('league').get('name'),
                    'image' : item.get('player').get('photo')
                }
                if row in player_list:
                    pass
                else:
                    player_list.append(row) 
#print(player_list)

myFile = open('./csv/players.csv', 'w')
writer = csv.writer(myFile)
writer.writerow(['player_id', 'name', 'age', 'nationality', 'team', 'position', 'league', 'image'])
for dictionary in player_list:
    writer.writerow(dictionary.values())
myFile.close()


df = pd.read_csv('./csv/players.csv')
df.drop_duplicates(subset=['player_id'], inplace=True)
df.to_csv('./csv/players.csv', index=False)

def stats(team):
    directory = './json/players'

    rating_list = []

    for filename in os.listdir(directory):
            with open(os.path.join(directory, filename), 'r') as f:
                data = json.load(f)

                for item in data['response']:
                    if(item['statistics'][0].get('team').get('name') == team):
                        if(item['statistics'][0].get('goals').get('total')):
                            row = {
                                'name' : f"{item.get('player').get('firstname')} {item.get('player').get('lastname')}",
                                'goals' : item['statistics'][0].get('goals').get('total')
                            }
                            rating_list.append(row)
                        else:
                            pass
                     
    sorted_list = sorted(rating_list, key=lambda x: x['goals'], reverse=True)
    #print(len(sorted_list))
    return ", ".join([dct['name'] for dct in sorted_list[:3]])

    