import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private auhtService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auhtService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, erro => {
      console.log(erro);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
