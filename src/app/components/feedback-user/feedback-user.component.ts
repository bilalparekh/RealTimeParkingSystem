import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute ,Router} from "@angular/router";
import { AngularFire , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-feedback-user',
  templateUrl: './feedback-user.component.html',
  styleUrls: ['./feedback-user.component.css']
})
export class FeedbackUserComponent implements OnInit {

 feedback: FirebaseListObservable<any[]>;
 constructor(private af: AngularFire, private myRoute: Router) {
  this.feedback = af.database.list('/userFeedback');
  }
saveFeedback(form): boolean {
    console.log("bbb",form);

    var feedbackForm = form;
    this.feedback.push(feedbackForm)
    console.log(this.feedback)
    return false;
}
  ngOnInit() {
  }

}
