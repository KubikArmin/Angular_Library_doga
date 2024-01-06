import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { MembersComponent } from './members/members.component';
import { NewMemberComponent } from './new-member/new-member.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'book-search', component: BookSearchComponent},
  {path: 'members', component: MembersComponent},
  {path: 'newmember', component: NewMemberComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
