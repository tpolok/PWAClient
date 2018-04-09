import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../service/connection.service';
import { Client, IClient } from '../model/client';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ConnectionService],
})
export class RegisterComponent implements OnInit {

  _clients: Array<Client> = [];
  _newClient: Client = new Client();
  private _service: ConnectionService;

  constructor(service: ConnectionService) {
    this._service = service;
   }

  ngOnInit() {
    this.getClients();
  }
  getClients = function() {
    this._service.getClients().then(clients => {
      this._clients = clients;
    }).catch(error => {
      console.error(error);
      alert(error.Message);
    });
  }

  addClient = function () {
    this._service.addClient(this._newClient).
      then(rowsAdded => {
        if (rowsAdded > 0) {
          this._clients.push(this._newClient);
          this.clearNewClient();
          alert('Successfully added');
        }
      }).catch(error => {
        console.error(error);
        alert(error.Message);
      });
  }

  clearNewClient = function () {
    this._newClient = new Client();
  }

}
