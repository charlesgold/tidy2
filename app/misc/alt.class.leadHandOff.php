 <?php
 /**
 * uses phpmailer to setup a leadhandoff
 **/
 include('class.phpmailer.php');
 class leadHandOff {
     
     private $lhoEmail      =   '';
     private $lhoSubject    =   '';
     private $lhoMessage    =   '';          
     
     function __construct($email,$subject,$message){
         $this->lhoEmail    = $email;
         $this->lhoSubject  = $subject;
         $this->lhoMessage  = $message;
     }
     
     public function getLead(){
         
     }
     
     public function sendEmail(){
        
            $mail   =   new PHPMailer;      
$mail->IsSMTP(); // Use SMTP
$mail->Host        = "smtp.gmail.com"; // Sets SMTP server
$mail->SMTPDebug   = 2; // 2 to enable SMTP debug information
$mail->SMTPAuth    = TRUE; // enable SMTP authentication
$mail->SMTPSecure  = "tls"; //Secure conection
$mail->Port        = 587; // set the SMTP port
$mail->Username    = 'charlietopjian@gmail.com'; // SMTP account username
$mail->Password    = 'Ashlee143$'; // SMTP account password
$mail->Priority    = 1; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
$mail->Encoding    = '8bit';
$mail->Subject     = 'Test Email Using Gmail';
$mail->ContentType = 'text/html; charset=utf-8\r\n';
$mail->From        = 'charlietopjian@gmail.com';
$mail->FromName    = 'GMail Test';
$mail->WordWrap = 50; // set word wrap to 50 characters
$mail->IsHTML(true);       
$mail->Body = 'testing';
$mail->addAddress('charlietopjian@gmail.com');
            
            if(!$mail->send()){
                return $mail->ErrorInfo;           
            }   else {        
                return true;        
            }                
     }
     
 }
?>
