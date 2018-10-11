#!/bin/bash

/proj/app/phantomjs/phantomjs-2.1.1-linux-x86_64/bin/phantomjs testPhantom.js

value=`cat output.txt`
if [[ "$value" =~ "Login Error" && "$value" =~ "CAPS (Login)" ]]; then
   echo "matched"
else
   echo -e "Subject:Server Alert \n\n The node1 CAPS SSO is not working properly\n" | /usr/sbin/sendmail -f Idmadmin@creditacceptance.com -t xlian@creditacceptance.com
fi