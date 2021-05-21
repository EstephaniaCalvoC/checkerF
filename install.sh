#!/usr/bin/env bash
# Script to set an install dependances for checkerF program.
echo "****************************************************"
echo "*                   ¡CheckerF!                     *"
echo "----------------------------------------------------"
echo "         Hey, We hope you are very Well!"
echo "----------------------------------------------------"
echo "Then you must provide your holberton information."
echo "->Reminder:You can see your Holberton API KEY here:"
echo "https://intranet.hbtn.io/dashboards/my_tools"
echo "...................................................."
echo -n "  -> Holberton Intranet email: "
read -r email
echo -n "  -> Holberton Intranet password: "
read -sr passw
echo ""
echo -n "  -> Holberton API Key: "
read -r api_k
echo "Saving email..."
echo export HBTON_ADDRESS="${email}">>~/.bashrc
echo "Saving password..."
echo export HBTON_PWD="${passw}">>~/.bashrc
echo "Saving API key..."
echo export HBTON_PWD="${api_k}">>~/.bashrc
npm install
