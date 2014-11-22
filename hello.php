<?php
#Error
error_reporting(-1);
ini_set('display_errors', 'On');

include 'config.inc.php';
# BLUEMIX...
/*
echo '<h2>VCAP_SERVICE Environment variable</h2>';
echo "----------------------------------" . "</br>";
$key = "VCAP_SERVICES";
$value = getenv ( $key );
echo $key . ":" . $value . "</br>";
echo "----------------------------------" . "</br>";*/
$vcap_services = json_decode($_ENV["VCAP_SERVICES" ]);
$db = $vcap_services->{'mysql-5.5'}[0]->credentials;
$mysql_database = $db->name;
$mysql_port=$db->port;
$mysql_server_name =$db->host . ':' . $db->port;
$mysql_username = $db->username; 
$mysql_password = $db->password; 
/*
echo $mysql_database . "<br />";
echo $mysql_server_name . "<br />";
echo $mysql_username . "<br />";
echo $mysql_password . "<br />";
*/
try {
    # MySQL with PDO_MYSQL
    $DBH = new PDO("mysql:host=$mysql_server_name;dbname=$mysql_database", $mysql_username, $mysql_password);
}
catch(PDOException $e) {
    echo $e->getMessage();
}

/*
try {
    $SQL="
        CREATE TABLE ACCESS_HISTORY (
        ID bigint(20) NOT NULL AUTO_INCREMENT,
        TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        BROWSER varchar(64) DEFAULT NULL,
        IP_ADDRESS varchar(32) DEFAULT NULL,
        PRIMARY KEY (ID)
        ) ENGINE=NDB DEFAULT CHARSET=utf8
    ";
    $QUERY = $DBH->prepare($SQL);
    $QUERY->execute();
}
catch(PDOException $E){
    echo $E->getMessage();
}
*/

try {
    $SQL="
        SELECT VERSION()
    ";
    $QUERY = $DBH->prepare($SQL);
    $QUERY->execute();

    $result = $QUERY->fetchAll();
    echo '<pre><tt>';
    print_r($result);
}
catch(PDOException $E){
    echo $E->getMessage();
}

