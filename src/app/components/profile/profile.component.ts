import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  loading: boolean;
  user: UserInterface;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as UserInterface;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
      .then((user: any) => {
        console.log(user);        
        this.user = user.attributes;
      });
  }

  public update(): void {
    this.loading = true;

    this.cognitoService.updateUser(this.user)
      .then(() => {
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
  }

}
