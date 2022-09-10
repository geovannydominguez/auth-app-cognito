import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';
import { CognitoService } from '../../services/cognito.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  loading: boolean;
  user: UserInterface;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as UserInterface;
  }

  public signIn(): void {
    this.loading = true;
    this.cognitoService.signIn(this.user)
    .then((resp) => {
      console.log(resp);
      this.router.navigate(['/profile']);
    }).catch(() => {
      this.loading = false;
    });
  }


}
