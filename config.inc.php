<?php

if (! getenv('VCAP_SERVICES')) {
	$envjson = '{
	  "mysql-5.5": {
	    "name": "mysql-t1",
	    "label": "mysql-5.5",
	    "plan": "300",
	    "credentials": {
	      "name": "katofeed",
	      "hostname": "localhost",
	      "host": "localhost",
	      "port": 3306,
	      "user": "katofeed",
	      "username": "katofeed",
	      "password": "katofeed",
	      "uri": "xxx"
	    }
	  }
	}';
	
	if(! putenv('VCAP_SERVICES='.$envjson)) {
		echo 'Cannot putenv()';
	}
}