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
            $mail->isSMTP();
            $mail->SMTPAuth     =   true;       
            $mail->SMTPSecure   =   'ssl';
            //$mail->SMTPDebug  =   2;  
            $mail->Host         =   'ssl://smtp.gmail.com';
            $mail->Port         =   465;
            $mail->Username     =   'charlietopjian@gmail.com';
            $mail->Password     =   'Ashlee143$';
            
            
            $mail->From         =   'charlietopjian@gmail.com';
            $mail->FromName     =   'Regtize';
            $mail->addAddress('charlietopjian@gmail.com');
            //$mail->addCC('9498875618@txt.att.net');
            $mail->isHTML(true);
             
            $mail->Subject      =   $this->lhoSubject;
            
            $mail->Body         =   $this->lhoMessage;
            
            if(!$mail->send()){
                return false;           
            }   else {        
                return true;        
            }                
     }
     
 }
?>
