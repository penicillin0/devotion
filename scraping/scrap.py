import requests
import bs4
import re
import json

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# credentials
project_id = 'devotion-e7bd5'
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': project_id,
})
db = firestore.client()


# パース
url = 'https://qiita.com/e869120/items/eb50fdaece12be418faa'
res = requests.get(url)
soup = bs4.BeautifulSoup(res.text, "html.parser")
p_DOM_soup_list = soup.find_all('p')


for p_DOM_soup in p_DOM_soup_list:
    result = re.match('.*<strong>\d+<\/strong>.*', str(p_DOM_soup))
    if result != None:

        # p DOM ごとの操作
        problem_id_list = [
            strong_dom.text for strong_dom in p_DOM_soup.find_all('strong')]
        tile_list = [a_dom.text for a_dom in p_DOM_soup.find_all('a')]
        url_list = [a_dom.get('href') for a_dom in p_DOM_soup.find_all('a')]

        n = len(problem_id_list)
        for i in range(n):
            problem = {
                'problem_id': int(problem_id_list[i]),
                'title': tile_list[i],
                'url': url_list[i],
                'description': "",
            }

            # データ追加
            doc_ref = db.collection(u'practices').document(
                str(problem['problem_id']))
            doc_ref.set(problem)
