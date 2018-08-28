import { Component, OnInit, ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery'; /* Para usar o $ */
import 'datatables.net';
import 'datatables.net-bs4'; /* datatables com ui do bootstrap */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  clients: any[]; // Array de clientes

  dataTable: any; // Futura instancia do datatable

  constructor(
    private http: HttpClient,
    private chDF: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
      .subscribe((data: any[]) => {
        this.clients = data;

        /* this.chDF.detectChanges(); */

      });
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    // Pode usar o datatales apos os dados estiverem
    const table: any = $('table');
    this.dataTable = table.DataTable();
  }
}
