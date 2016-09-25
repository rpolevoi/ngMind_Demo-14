import { Component, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `
             <h3>The following number is a parent component property</h3>
             <h3>{{parentProp}}</h3>
             <br><br>
             <app-child-component [childProp]="parentProp">
                <app-grandchild-component [grandchildProp]="parentProp"></app-grandchild-component>
             </app-child-component>
             `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  parentProp = 567;
  
}
