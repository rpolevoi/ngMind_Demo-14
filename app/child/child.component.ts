import { Component, Input, ContentChild} from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';


@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h3>The following number is a child component property bound to input from the parent component property</h3>
            <h3>{{childProp}}</h3>
            <button (click)="incGrandchild()">increment grandchild</button>
            <br><br>
            <ng-content></ng-content>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @ContentChild(GrandchildComponent) grandchild;
  
  @Input() childProp;
  
  incGrandchild(){this.grandchild.grandchildProp++;}
  
}
