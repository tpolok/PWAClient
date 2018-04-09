import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class ConnectionService {
  _connection;
  constructor(service: CommonService) {
    this._connection = service._connection;
   }
   getClients = function () {
    // jsstore returns promise, when you dont specify OnSuccess
    return this._connection.select({
      From: 'Client'
    });
  }

  addClient = function (client) {
    return this._connection.insert({
      Into: 'Client',
      Values: [client]
    });
}
}
