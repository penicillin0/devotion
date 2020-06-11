import requests
import bs4
import re
import json

url = 'https://qiita.com/e869120/items/eb50fdaece12be418faa'

res = requests.get(url)
soup = bs4.BeautifulSoup(res.text, "html.parser")
p_DOM_soup_list = soup.find_all('p')

problem_list = []

for p_DOM_soup in p_DOM_soup_list:
    result = re.match('.*<strong>\d+<\/strong>.*', str(p_DOM_soup))
    if result != None:
        problem = {
            'problem_num': p_DOM_soup.strong.text,
            'problem_name': p_DOM_soup.a.text,
            'problem_url': p_DOM_soup.a.get('href')
        }
        problem_list.append(problem)
        
problem_list_json = json.dumps(problem_list, indent=2)
