<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

define('APP_ID', '772835426129526');
define('APP_SECRET', 'd0d9c4c214132eb4f276496075997e52');

define('FBGRAPH', 'https://graph.facebook.com/');

// http://stackoverflow.com/questions/9373645/can-you-get-a-public-facebook-pages-feed-using-graph-api-without-asking-a-user
function fetchUrl($url) {

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 20);
	// You may need to add the line below
	// curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);

	$feedData = curl_exec($ch);
	curl_close($ch);

	return $feedData;

}

// http://php.net/manual/en/function.array-multisort.php
function array_orderby()
{
    $args = func_get_args();
    $data = array_shift($args);
    foreach ($args as $n => $field) {
        if (is_string($field)) {
            $tmp = array();
            foreach ($data as $key => $row)
                $tmp[$key] = $row[$field];
            $args[$n] = $tmp;
            }
    }
    $args[] = &$data;
    call_user_func_array('array_multisort', $args);
    return array_pop($args);
}

// cache na szybko...
$CACHEFILE = 'fbjsoncache';
$CACHETIME = 300; // w sek.
if (! file_exists($CACHEFILE) or (time() - filemtime($CACHEFILE) > $CACHETIME)) {
	$fb_profiles = array(
			'pastsilesia',
			'StareKatowice',
			'Katowice50',
			'SlaskieKamienice',
			'uliceiplacekatowic',
			'KatowickaModerna',
			'259561394057841', // Katowicki-Modernizm
			'OdkrywajacSlask',
			'SCDK.Katowice',
			'zietekplakaljakbudowal',
			'1506802376232052', // Slask ktorego nie bylo
	);
	
	$fb_profiles_all = implode(',', $fb_profiles);
	
	//App Info, needed for Auth
	$app_id = APP_ID;
	$app_secret = APP_SECRET;
	
	//Retrieve auth token
	$authToken   = fetchUrl(FBGRAPH . "oauth/access_token?grant_type=client_credentials&client_id={$app_id}&client_secret={$app_secret}");
	
	$json_object = fetchUrl(FBGRAPH . "v2.2/posts?ids=$fb_profiles_all&fields=type,created_time,id,object_id&$authToken");
	
	$json_posts = json_decode($json_object, true);
	//print_r($json_posts);die();
	
	$FBStream = array();
	if (is_array($json_posts)) {
		foreach ($json_posts as $profile) {
			if (is_array($profile['data'])) {
				foreach ($profile['data'] as $idx => $row) {
					if (isset($row['type']) and $row['type'] == 'photo' and isset($row['object_id']) and isset($row['created_time'])) {
						$FBStream[ $row['object_id'] ][ 'data' ] = date('Y-m-d H:i', strtotime($row['created_time']));
					}
				}
			}
		}
	}
	
	$c = 1;
	$ids_tmp = array();
	$MAX_IDS_PER_REQUEST = 25;
	//print_r($FBStream);die();
	$FBStreamForLoop = $FBStream;
	foreach ($FBStreamForLoop as $object_id => $row) {
		//print_r($object_id);die();
		$ids_tmp[] = $object_id;
		$c++;
		if ($c >= $MAX_IDS_PER_REQUEST) {
			$c = 1;
			
			$obj_ids = implode(',', $ids_tmp);
			//print_r($ids_tmp);die();
			$json_object = fetchUrl(FBGRAPH . "v2.2/?ids=$obj_ids&fields=from,name,link,images&$authToken");
			$json_photos = json_decode($json_object, true);
			//print_r($json_photos);die();
			foreach ($json_photos as $obj_id => $obj_row) {
				$FBStream[ $obj_id ]['photo_url'] = $obj_row['images'][0]['source'];
				$FBStream[ $obj_id ]['autor']     = $obj_row['from']['name'];
				$FBStream[ $obj_id ]['opis']      = isset($obj_row['name']) ? $obj_row['name'] : '';
				$FBStream[ $obj_id ]['fb_link']   = $obj_row['link'];
			}
			
			$ids_tmp = array();
		}
			
	}
	
	$FBStream_reindexed = array();
	foreach ($FBStream as $id => $row) {
		if (isset($row['photo_url'])) {
			$FBStream_reindexed[] = $row;
		}
	}
	$FBStream_reindexed = array_orderby($FBStream_reindexed, 'data', SORT_DESC);
	$json = json_encode($FBStream_reindexed);
	echo $json;
	
	if ($json) {
		$fh = @fopen($CACHEFILE, 'w');
		if ($fh) {
			fwrite($fh, $json);
			@close($fh);
		}
	}
	
} else {
	echo file_get_contents($CACHEFILE);
}
