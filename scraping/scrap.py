import requests
import bs4
import re

url = 'https://qiita.com/e869120/items/eb50fdaece12be418faa'

res = requests.get(url)
soup = bs4.BeautifulSoup(res.text, "html.parser")
rep = soup.find_all('p')
for r in rep:
    result = re.match('.*<strong>\d+<\/strong>.*', str(r))
    if result != None:
        print(r.strong.text)
        print(r.a.text)
        print(r.a.get('href'))
