import { Injectable } from '@angular/core';
import {Instance} from 'jsstore';


declare var JsStore:any;
export class CommonService {
  _connection:Instance;

  constructor() {
    this._connection = new JsStore.Instance();
    const DatabaseName = 'Client';
    
    JsStore.isDbExist(DatabaseName).then(isExist => {
      if (isExist) {
        this._connection.openDb(DatabaseName);
      }
      else {
        const DataBase = this.getDatabase();
        this._connection.createDb(DataBase);
      }
    }).catch(err => {
      // this will be fired when indexedDB is not supported.
      alert(err.Message);
    });
   }
   private getDatabase = function () {
    const TblClient = {
      Name: 'Client',
      Columns: [{
        Name: 'Id',
        PrimaryKey: true,
        AutoIncrement: true
      },
      {
        Name: 'Name',
        NotNull: true,
        DataType: 'string'
      },
      {
        Name: 'Gender',
        DataType: 'string',
        Default: 'male'
      },
      {
        Name: 'Country',
        NotNull: true,
        DataType: 'string'
      },
      {
        Name: 'City',
        NotNull: true
      },
      {
        Name: 'Password',
        NotNull: true,
        DataType: 'string'
      }
      ]
    };
    const DataBase = {
      Name: 'Clients',
      Tables: [TblClient]
    };

    return DataBase as any;
  }
}
