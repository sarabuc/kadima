import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

  constructor(private http: Http) { }
  public getFiles() {
    return this.http.get('assets\\files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.json().data);
  }
}
