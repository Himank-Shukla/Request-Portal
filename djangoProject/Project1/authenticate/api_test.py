import json
import requests
resp=requests.get('http://aproach.muc.amadeus.net/aproach-acaas/v1.0/authenticationChecks')
data=resp.json()
print(data)