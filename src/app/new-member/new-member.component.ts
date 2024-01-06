import { Component } from '@angular/core';
import { MemberModel } from '../models/member.model';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrl: './new-member.component.css',
})
export class NewMemberComponent {
  constructor(private httpService: HttpService, private router: Router) {}
  newMember: MemberModel = {
    name: '',
    from: '',
    to: '',
    birthDate: '',
    email: '',
    mobil: '',
  };
  alertVisible: boolean = false;

  close(){
    this.alertVisible = false;
  }

  allFieldsAreFiled(){
    return this.newMember.name!= '' && this.newMember.email!= '' && this.newMember.birthDate!= '' && this.newMember.mobil != '';
  }

  saveData(){
    if (this.allFieldsAreFiled()){

      this.postNewMember();
    }
    else{
      this.alertVisible = true;
    }
  }

  postNewMember() {
    if (this.newMember){
      console.log(this.newMember);
      this.httpService
      .addNewMember(this.newMember)
      .subscribe({
        next: (result: {id: number}) => alert(`A rögzített tag olvasójegyének szám: ${result.id}`),
        error: (err) => console.log(err),
      });
    }
  }
}
