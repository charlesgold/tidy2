/**
* JS for help page
**/

var uvHelp = Tidy.Model.extend({  
     
  'helpFunctions': [
          {
            earthling: function(){
              return $('#humanCheck').is(':checked');
            }
            ,heartBeat: function(){
              setInterval(function(){
                var heartB = $('#heartBeat');
                
                if(heartB.css('color')==='rgb(153, 153, 153)'){
                  $('#heartBeat').css('color','#FF0013');
                } else {
                  $('#heartBeat').css('color','#999999');
                }
                
              },200);
           
            }
            ,formData: 0            
            ,setForm: function(){
              var scopeFormData = {
                customerEmail: $('#customerEmail').val()
                ,orderNumber: $('#orderNumber').val()
                ,codeLink: $('#codeLink').val()
                ,redemptionSite: $('#redemptionSite').val()
                ,supportType: $('#supportType').val()
                ,supportDescription: $('#supportDescription').val()                        
              };

              this.formData = scopeFormData;

            }
            ,validateEmail: function(eString){
              //regex
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(eString);
            }
            ,formValid: function(){

              //valid Flag
              var valFlag = 0;
              //email regex
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              //test email
              if(!re.test(this.formData.customerEmail)){
                this.setErrState('customerEmail');
                valFlag++;
              }

              if(this.formData.supportType == '-1'){ 
                this.setErrState('supportType');
                valFlag++;
              }

              if(this.formData.redemptionSite =='-1'){
                this.setErrState('redemptionSite');
                valFlag++;
              }

              if(this.formData.supportDescription.length < 10){
                this.setErrState('supportDescription');
                valFlag++;
              }

              return valFlag;
            }
            ,setErrState: function(ctrl){
              //state var needs to be class
              //err-state, reset-state
              $('#'+ctrl).addClass('err-state');
            }
            ,setResetState: function(ctrl){
              $(ctrl).removeClass('err-state');
            }
            ,sendContact: function(data, endPoint){
              var _this = this;
              //show customer submitting
              $('#helpSubmit').html('<i class="fa fa-circle-o-notch fa-spin"></i> Thinking...');
              $('#helpSubmit').prop('disabled',true);
              $.getJSON(
                    endPoint
                    ,data
                    ,function(json){
                          //console.log(json.emailSent);
                          if(json.emailSent){
                            _this.formSent(json.emailSent);
                          }
                    }
              );               
            }
            ,formSent: function(sId){
              $('.help-active').hide();

              //show supportId
              $('#supportId').html(sId);

              $('.help-complete').show();
            }
          }
    ]
}); 

/* JQUERY */
$(document).ready(function(){

  app.Model['helpFunctions'].heartBeat();

	$('#helpSubmit').on('click',function(){
      //shorten the App object
      var hlpApp  = app.Model['helpFunctions'];
          //bot check
          var human = hlpApp.earthling();
          if(!human){ //unchecked

            //collect form data
            hlpApp.setForm();

            //validate the form
            if(hlpApp.formValid()){ //true is bad
              $('err-state-block').show();
            } else { //good send
              //send form              
              hlpApp.sendContact(hlpApp.formData,'http://web.regtize.com/6e5b598f88f5e4b81673b62dda9327a4.php');
            }            
            

          } else { //not a human or can't read 
            console.log('not human');
          }
          
                           
	});

});