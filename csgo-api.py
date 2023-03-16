import requests

api_key = 'SUA_CHAVE_DE_API_AQUI'
endpoint = 'https://api.sportsdata.io/v3/csgo/scores/json/PlayerStatsByMatchID/{}'
match_id = '12345' # substitua pelo ID da partida desejada

url = endpoint.format(match_id)
headers = {'Ocp-Apim-Subscription-Key': api_key}
response = requests.get(url, headers=headers)