import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private auhtService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.auhtService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, erro => {
      this.alertify.error(erro);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
  loggedIn() {

    return this.auhtService.loggedIn();
  }

}
