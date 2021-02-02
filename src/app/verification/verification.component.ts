import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../admin/manage/users/shared/user.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(private userService : UserService,private route :ActivatedRoute) { }
  responseText:any = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      
      this.userService.verifySubscriber(params["token"]).subscribe((response) => {
        
        this.responseText = "Verification success!";
      },(error)=>{
        this.responseText = error.error.error;
        
      })
      
    });
  }

  verifySubscription() {
    

   /*  this.userService.verifySubscriber().subscribe((response) => {
      console.log(response);
    }); */
  }

}
