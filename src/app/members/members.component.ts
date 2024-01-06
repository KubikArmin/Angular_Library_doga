import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MemberModel } from '../models/member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent {
  name: string = '';
  showAlert: boolean = false;

  close() {
    this.showAlert = false;
  }

  constructor(private httpService: HttpService, private router: Router) {}
  members: MemberModel[] = [];

  navigateNewMember() {
    this.router.navigate(['newmember']);
  }

  getMembers() {
    if (this.name == '') {
      this.showAlert = true;
    } else {
      this.members = [];
      // alert(this.name);
      this.httpService.listMembers(this.name).subscribe({
        next: (result: MemberModel[]) => {
          this.members = result;
          // alert(this.members[0].name);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
