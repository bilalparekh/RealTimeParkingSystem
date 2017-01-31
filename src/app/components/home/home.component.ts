import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myRoute:Router) { }

  ngOnInit() {
  }
userReg(){
    this.myRoute.navigate(['/Register']);
  }
  LoginPage(){
    this.myRoute.navigate(['/login']);
  }
}
