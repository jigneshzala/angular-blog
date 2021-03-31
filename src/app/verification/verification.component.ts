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
  token:any = '';

  ngOnInit(): void {
    
    this.token = this.route.snapshot.params.token;
    this.userService.verifySubscriber(this.route.snapshot.params.token).subscribe((response) => {
        
      this.responseText = "Verification success!";
    },(error)=>{
      this.responseText = error.error.error;
      
    })

  }

}
