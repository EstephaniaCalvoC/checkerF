#!/usr/bin/env bash
# Script to set an install dependances for checkerF program.
url_="https://intranet.hbtn.io/users/auth_token.json -H \"Content-Type: application/json\" -d"
command_="curl $url_ $values"
succes=0
echo "****************************************************"
echo "*                   ¡CheckerF!                     *"
echo "----------------------------------------------------"
echo "         Hey, We hope you are very Well!"
echo "----------------------------------------------------"
echo "Then you must provide your holberton information."
echo "->Reminder:You can see your Holberton API KEY here:"
echo "https://intranet.hbtn.io/dashboards/my_tools"
echo "...................................................."
while [ $succes -eq 0 ]
do
	echo -n "  -> Holberton Intranet email: "
	read -r email
	echo -n "  -> Holberton Intranet password: "
	read -sr passw
	echo ""
	echo -n "  -> Holberton API Key: "
	read -r api_k
	values="'{\"api_key\": \"$api_k\", \"email\": \"$email\", \"password\": \"$passw\", \"scope\": \"checker\"}'"
	command_="curl $url_ $values"
	response=$(eval "$command_")
	a=$(eval echo "$response" | grep "user_id")

	if [ -z "$a" ]
	then
        	echo "...................................................."
		echo "***Credentials failed***"
		echo "***Try again"
		succes=0
	else
		echo "...................................................."
		echo "Correct authentication"
        	succes=1
	fi
done
echo "Saving email..."
echo export HBTON_ADDRESS="${email}">>~/.bashrc
echo "Saving password..."
echo export HBTON_PWD="${passw}">>~/.bashrc
echo "Saving API key..."
echo export HBTON_APIKEY="${api_k}">>~/.bashrc
npm install

