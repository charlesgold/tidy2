 <?php
 /**
 * uses phpmailer to setup a leadhandoff
 **/
 include('class.phpmailer.php');
 class leadHandOff {
     
     private $lhoEmail      =   '';
     private $lhoSubject    =   '';
     private $lhoMessage    =   '';          
     
     function __construct($email,$subject,$message,$supportId){
         $this->lhoEmail    = $email;
         $this->lhoSubject  = $subject;
         $this->lhoMessage  = $message;
         $this->lhoSupportId = $supportId;
     }
     
     public function getLead(){
         
     }

     
     public function sendEmail($customerEmail){
        
            $mail   =   new PHPMailer;      
            $mail->isSMTP();
            $mail->SMTPAuth     =   true;       
            $mail->SMTPSecure   =   'ssl';
            //$mail->SMTPDebug  =   2;  
            $mail->Host         =   'ssl://smtp.gmail.com';
            $mail->Port         =   465;
            $mail->Username     =   'cs@uvgrab.com';
            $mail->Password     =   'Ashlee143$';
            
                     
            $mail->setFrom('cs@uvgrab.com', 'UVGrab Help');
            $mail->clearReplyTos();            
            $mail->addReplyTo($customerEmail,'UVGrab Help');   
            //$mail->From         =   'cs@uvgrab.com';
            //$mail->FromName     =   'Regtize';
            $mail->addAddress('cs@uvgrab.com');
            //$mail->addCC('9498875618@txt.att.net');
            $mail->isHTML(true);
             
            $mail->Subject      =   $this->lhoSubject;
            
            $mail->Body         =   $this->lhoMessage;
            
            if(!$mail->send()){
                //return $mail->ErrorInfo;           
                return false;
            }   else {  
                
                return $this->lhoSupportId;        
            }                
     }
     
 }
?>
