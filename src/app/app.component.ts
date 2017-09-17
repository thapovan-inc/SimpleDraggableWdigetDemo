import { Component } from '@angular/core';
import { Container } from './Container';
import { Widget } from './Widget';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`.dnd-drag-start {
    -moz-transform:scale(0.8);
    -webkit-transform:scale(0.8);
    transform:scale(0.8);
    opacity:0.7;
    border: 2px dashed #000;
}

.dnd-drag-enter {
    opacity:0.7;
    border: 2px dashed #000;
}

.dnd-drag-over {
    border: 2px dashed #000;
}

.dnd-sortable-drag {
  -moz-transform:scale(0.9);
  -webkit-transform:scale(0.9);
  transform:scale(0.9);
  opacity:0.7;
  border: 1px dashed #000;
}`],
  template: `
  <div class="row">
      <div class="col-sm-8">
          <div class="panel panel-success">
          <div class="panel-heading">
          Widgets
      </div>
              <div class="panel-body">
                  <ul class="list-group" dnd-sortable-container [sortableData]="listOne">
                      <li *ngFor="let item of listOne; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="col-sm-6">
          <div class="panel panel-default">
              <div class="panel-body">
                  My prefence:<br/>
                  <span *ngFor="let item of listOne; let i = index">{{i + 1}}) {{item}}<br/></span>
              </div>
          </div>
      </div>
  </div>`
})
export class AppComponent {
    listOne: Array<string> = ['Widget A', 'Widget B', 'Widget C', 'Widget D', 'Widget E'];
}


