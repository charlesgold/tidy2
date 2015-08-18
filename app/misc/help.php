<?php
header('Access-Control-Allow-Origin: http://www.uvgrab.com');  //I have also tried the * wildcard and get the same response
header('Access-Control-Allow-Origin: http://uvgrab.com');  //I have also tried the * wildcard and get the same response
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');


include('class.leadHandOff.php');



$visitorInfo  =   array(
                                            $_SERVER['REMOTE_ADDR']
                                            //,$_SERVER['HTTP_REFERER']
                                            ,$_SERVER['HTTP_USER_AGENT']                                            
);


$formVars	=	$_GET;
$supportI  =   uniqid('UVG-',true);


//** Help Email **


$email =	'Order #: '	. $_GET['orderNumber'].'<br/>';
$email .=	'Email: '	. $_GET['customerEmail'].'<br/>';
$email .=	'Support Type:' . $_GET['supportType'].'<br/>';
$email .=	'Code Link:'    . $_GET['codeLink'].'<br/>';
$email .=	'<br/>'.'----------------------------<br/>';
$email .=	'Comments: '.'<br/>';
$email .=	$_GET['supportDescription'].'<br/>';
$email .=	'<br/>'.'----------------------------<br/>';
$email .=	'Redemption Site: '. $_GET['redemptionSite'].'<br/>';
$email .=	'<br/>'.'----------------------------<br/>';
$email .=	'SupportID: '. $supportI.'<br/>';
$email .= 	'Date: '.date('m/d/Y g:i:s T').'<br/>';
$email .=	'IP: '. $visitorInfo[0].'<br/>';
$email .=	'Browser: '. $visitorInfo[1].'<br/>';
$email .=	'<br/><br/>*********************************<br/>';
$email .=	'*********  Support Shortcuts *********<br/>';
$email .=	'Search Order'.'<br/>';
$email .=	'By Email: '. 'https://uvgrab.myshopify.com/admin/orders?query='.$_GET['customerEmail'].'<br/>';
$email .=	'By Order: '. 'https://uvgrab.myshopify.com/admin/orders?query='.$_GET['orderNumber'];





//$lead = new leadHandOff('test','Sample Request',print_r($visitorInfo,TRUE));
$lead	= new leadHandOff($_GET['customerEmail'],'SUPPORT-'.$_GET['supportType'], $email, $supportI);

$emailSent  =   $lead->sendEmail();
$returnI    =   array(
                                        'emailSent'=>$emailSent
);

echo json_encode($returnI);

?>