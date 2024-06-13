import { Component,OnInit,DoCheck} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  constructor(private api:DataService) { }


//   ngDoCheck(): void {
//     console.log('working while change')
//     // this.getmessage() 

//   }
// //  @Input() someInput: string;
//   ngOnChanges(): void {
//     // if (changes.someInput) {
//       // Perform actions based on the change in someInput
//       console.log('someInput changed to:');
//     }
  // }
 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getmessage() 
    this.getcontact()
    // this.timer = Observable.timer(10000);
    // this.timer.subscribe((t) => this.getcontact());
  }

  startTimer() {
      setInterval( () => {
        // this.getmessage() 
        this.getnewmessage()
        // ngOnInit()
        // console.log("-------popop--------");
    }, 5000);
}
stopTimer() {
  // clearInterval("");
  // this.chatprocess=!this.chatprocess
  // // this.loginprocess=!this.loginprocess
  // this.registerprocess=true
  window.location.reload();
  console.log("---------------");
  
}
  message_person=""
  message_person2=""
  messages:any=[]
  sender=""
  receiver=""
  receiverno=""
  show=true
  // receiverList=['jai','a','jgjhg','jhgjhg']
  receiverList:any=[]

  friendname=""
  friendcontactno=""
  notification=0
  // =====================================
  addcontactdetails:boolean=true
  Sfix:boolean=false
  Rfix:boolean=false
  // =========================================

  regusername=""
  regusermobileno=""
  reguserpassword=""

  loginmobileno=""
  loginpassword=""
// ===========================================
  loginprocess:boolean=false
  registerprocess:boolean=true
  chatprocess:boolean=false
  // ==========================================
  // message2:any=[]

  // send1(){
  //   this.messages.push({'person1':this.message_person1})
  //   this.message_person1=""
  //   console.log(this.messages)
  // }
  // send2(){
  //   this.messages.push({'person2':this.message_person2})
  //   this.message_person2=""
  //   console.log(this.messages)
  //   }

    senderfix(){
      this.Sfix=true
    }

    receiverchoose(index:any){
      this.receiverno=this.receiverList[index].mobileNO
      this.getmessage() 
      this.show=false

      if(this.receiverno == this.loginmobileno){
        this.receiver="You"
      }
      else{
        this.receiver=this.receiverList[index].name
      }
      
    }
   
// ----------------------------------------------------------------------  REGISTRATION PROCESS
    showreg(){
            this.loginprocess=false
            this.registerprocess=true
              }

    userreg(){
      if(this.regusername && this.regusermobileno && this.reguserpassword){
        var data={'name':this.regusername,'no':this.regusermobileno,'password':this.reguserpassword}
      this.api.api_post('chatappuserreg/',data).subscribe((res)=>{
        // console.log(res)
      this.regusername=""
      this.regusermobileno=""
      this.reguserpassword=""
      this.loginprocess=!this.loginprocess 
      
    })

      }
      else{
        alert('enter all details')
      }
    }
// --------------------------------------------------------------------------  LOGIN PROCESS
    shoelogin(){
      this.loginprocess=true
      this.registerprocess=false
    }

    userlogin(){

      if(this.loginmobileno && this.loginpassword){
      var data= {'no':this.loginmobileno,'password':this.loginpassword}
      this.api.api_post('chatappuserlogin/',data).subscribe((res)=>{
        if(res.status=="success"){
          // console.log(res)
          this.getcontact()
          this.sender=res.name
            this.loginpassword=""
            this.loginprocess=!this.loginprocess
            this.registerprocess=false
            this.chatprocess=!this.chatprocess
            console.log(this.receiverno,this.loginmobileno)
                }
        else{
          // console.log(res)
          alert('invalid credentials')
        }
            
      })
    }
    else{
      alert('enter all details')
    }
    }
// ------------------------------------------------------------------------------- AFTER LOGIN
    send()
  {
    
    var data={'sender':this.loginmobileno,'message':this.message_person,'receiver':this.receiverno}
    if(this.message_person==""){
      alert("enter any message")
    }
    // console.log(data,"mmmmmmmmmmmmmmmmmmmm")
    else{
      this.api.api_post('chatapp/',data).subscribe((data:any)=>{
      this.getmessage() 
      this.message_person=""})
    }
    
      // alert('added successfully')
      
    
  }
  getmessage(){
    // alert("message")
    if(this.loginmobileno){
      var data={senderno:this.loginmobileno,receiverno:this.receiverno}
    this.api.api_post('getmessage/',data).subscribe((data)=>{
      this.messages=data
        console.log(this.messages,"---000-------------------")
      })
    }
  }

  getnewmessage(){
      // var data={receno:this.receiverno,sendno:this.loginmobileno}
      var data={msg:this.messages.length,senderno:this.loginmobileno,receiverno:this.receiverno}
      // console.log("ooonnnnnoo",data)
      this.api.api_post('get_newmessage/',data).subscribe((data)=>{
        if(data!=""){
          // console.log("ooonnnnnoo",data)
          this.getmessage()
         }
        // else{
        //   this.messages=data
        //   
        // }
        
      })
  }


  addcontact(){
    this.addcontactdetails=!this.addcontactdetails
    
  }
  sendforadd(){
    var data={name:this.friendname,mobileno:this.friendcontactno,usermno:this.loginmobileno}
    // console.log(data)
    this.api.api_post('addcontactchat/',data).subscribe((data)=>{
      this.friendcontactno=""
      this.friendname=""
      // console.log(data)
      this.getcontact()
      
    })
  }
  getcontact(){
    var data={usermno:this.loginmobileno}
    this.api.api_post('getcontactchat/',data).subscribe((data)=>{
      this.receiverList=[]
      console.log(data,"0----contact",this.loginmobileno)
      for( var i=0;i<data.length;i++)
        {
          if(data[i].usermno == this.loginmobileno)
            {
               this.receiverList.push(data[i])
               
            }

         
        }
      // this.receiverList=data

  })
}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

