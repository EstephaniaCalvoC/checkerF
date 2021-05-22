email="2177@holbertonschool.com"
passw="uogxrl-0767"
api_k="5fc7e48d3c57dd5c2c17ad825d8c35e0"

values="'{\"api_key\": \"$api_k\", \"email\": \"$email\", \"password\": \"$passw\", \"scope\": \"checker\"}'"

url="-XPOST https://intranet.hbtn.io/users/auth_token.json -H \"Content-Type: application/json\" -d"
# echo $url
# echo $url $values
c= eval "curl $url $values >> info.txt"

echo "$c" >> info.txt
#curl -XPOST https://intranet.hbtn.io/users/auth_token.json -H \"Content-Type: application/json\" -d ${values}
