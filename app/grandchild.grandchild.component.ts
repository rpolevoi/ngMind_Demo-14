import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-grandchild-component',
  template: `<h3>The following number is a PROJECTED grandchild component property bound to input from the parent component property</h3>
            <h3>{{grandchildProp}}</h3>`,
  styleUrls: ['grandchild.component.css']
})
export class GrandchildComponent {
  
  @Input() grandchildProp;
  


}
