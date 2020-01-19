import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-template',
  template: `
    <!--showcase how ng-template works-->
    <ng-container *ngTemplateOutlet="greet">
    </ng-container>

    <hr>

    <ng-container *ngTemplateOutlet="eng; context: {$implicit: 'World', localSk: 'Svet'}">
    </ng-container>

    <hr>

    <ng-container *ngTemplateOutlet="svk; context: {$implicit: 'World', localSk: 'Svet'}">
    </ng-container>


    <ng-template #greet>
      <span>Hello</span>
    </ng-template>

    <ng-template #eng let-name>
      <span>Hello {{name}}!</span>
    </ng-template>

    <ng-template #svk let-person="localSk">
      <span>Ahoj {{person}}!</span>
    </ng-template>

    <!--showcase end-->

  `,
})
export class DemoTemplateComponent {
}
