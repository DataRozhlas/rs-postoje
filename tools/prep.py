#%%
import pandas as pd
import json

#%%
d = pd.read_csv('./data/odpovedi.csv')

#%%
out = {}
for q in list(d.columns)[29:66]:
    for clas in d.LCA6.unique():
        if q not in out:
            out[q] = {}
        tmp = d[d.LCA6 == clas]
        out[q][clas] = (tmp[[q, 'vaha']].groupby(q).sum()['vaha']/tmp['vaha'].sum()).to_dict()

#%%
# unfuck špatně pojmenovaných a seřazených tříd/odpovědí
ord = [
    'Rozhodně nesouhlasím',
    'Spíše nesouhlasím',
    'Spíše souhlasím',
    'Rozhodně souhlasím'
]

ren = {
    'Etablovana stredni trida': 'Zajištěná střední třída',
    'Nastupujici kosmopolitni trida': 'Nastupující kosmopolitní třída',
    'Tradicni pracujici trida': 'Tradiční pracující třída',
    'Obyvatelstvo lokalnich vazeb': 'Třída místních vazeb',
    'Ohrozena servisni trida': 'Ohrožená třída',
    'Prekarizovana stradajici trida': 'Strádající třída',
}

o = {}
for q in out:
    if q == 'cont1':
        continue
    tmp = {}
    for clas in ren:
        tmp[clas] = []
        for a in ord:
            tmp[clas].append(out[q][clas][a])
    o[q] = list(tmp.values())

#%%
with open('./js/stats.js', 'w', encoding='utf-8') as f:
    f.write('export const data = ' + json.dumps(o, ensure_ascii=False))

#%%
qu = pd.read_csv('./data/sloupce_labels.csv')
qu = dict(zip(qu['id'].values, qu['Resp ID'].values))

#%%

#%%
qu['r01_a1']

#%%
{k: v for k, v in qu.items() if k in list(d.columns)[29:66]}

#%%
