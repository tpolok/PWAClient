import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../service/connection.service';
import { Client, IClient } from '../model/client';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from "@angular/router";
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
  providers: [ConnectionService],
})
export class ConnectionComponent implements OnInit {

  _clients: Array<Client> = [];
  private _service: ConnectionService;
  _newClient: Client = new Client();

  constructor(service: ConnectionService, private router: Router) {
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

  checkClient = function(){
    this._clients.forEach(function(Client) {
      if(Client == this._newClient.Name){
        if(Client.Password == this._newClient.Password){
          this.router.navigateByUrl(['connected']);
        }
      }

    });
  }

  clearNewClient = function () {
    this._newClient = new Client();
  }
}
