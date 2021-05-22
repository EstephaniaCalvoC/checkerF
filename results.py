#!/usr/bin/python3
"""Make a request endemoniado"""
import requests
from sys import argv

url = argv[1]
#auth_token = argv[2]
#print("data_id".format(data_id))
#print("token".format(auth_token))

#url = "https://intranet.hbtn.io/correction_requests/{}.json?auth_token={}".format(data_id, auth_token)
#url = "https://intranet.hbtn.io/correction_requests/5030869.json?auth_token=13dc8cd3670c39b0110fd5e715d0cd45c8cbcf409fcf0b0e9bb6bed613526ce0"
response = requests.get(url)
data = response.text
print(data)
# os.environ["resultCheck"] = data


# #!/usr/bin/python3
# """Make a request endemoniado"""
# from sys import argv
# import requests
# import os

# data_id = argv[1]
# auth_token = argv[2]

# url = "https://intranet.hbtn.io/correction_requests/{}.json?auth_token={}".format(data_id, auth_token)
# response = requests.get(url)
# data = response.text
# print(type(data))
# # print(data)
# os.environ["resultCheck"] = data
