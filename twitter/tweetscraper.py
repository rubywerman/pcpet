from twython import Twython
import time
import csv
import api
import json

#get api keys
APP_KEY = api.APP_KEY
APP_SECRET = api.APP_SECRET
twitter = Twython(APP_KEY, APP_SECRET, oauth_version=2)
ACCESS_TOKEN = api.ACCESS_TOKEN

twitter = Twython(APP_KEY, access_token=ACCESS_TOKEN)
twitter.get_application_rate_limit_status()['resources']['search']

search = twitter.search(q='sustainability', result_type='popular', count=20000)

tweets = search['statuses']
out = []
for tweet in tweets:
	out.append([tweet['text']])

with open('tweets.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=4)