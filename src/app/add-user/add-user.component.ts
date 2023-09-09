import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user = { firstName: '', lastName: '' };

  constructor(private http: HttpClient) {}

  addUser() {
    this.http.post('http://localhost:8080/users', this.user).subscribe(() => {
      // Handle success or navigation here
    });
  }
}










// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.css']
// })
// export class AddUserComponent {
//
// }
