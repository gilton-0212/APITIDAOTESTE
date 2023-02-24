import { UserService } from './../user.service';
import { RequestCreate, ResponseCreate } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response! : ResponseCreate;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.userservice.postUser(this.request).subscribe(res => {
      this.response = res;
      alert(`USUÁRIO CRIADO EM: ${res.createdAt},NOME: ${res.name}  |  PROFISSÃO: ${res.job}`)
    });

  }

}
