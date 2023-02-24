import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUptade } from '../user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id! : string;
  request! : RequestUptade;

  constructor(
    private userservice : UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')!;
    this.userservice.getOneUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    });
  }

  uptade(){
    this.userservice.putUser(this.id, this.request).subscribe(res => {
      alert(`ATUALIZADO EM: ${res.updatedAt}, NOME: ${res.name}, PROFISSÃO: ${res.job}`)
    });
  }
}
