import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor(private _router:ActivatedRoute) {
    this._router.parent.params.subscribe(params => {
      console.log("Ruta Hija");
      console.log(params);
      
    });
   }

  ngOnInit() {
  }

}
