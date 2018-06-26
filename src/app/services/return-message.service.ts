import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';



@Injectable()
export class ReturnMessageService {

  private messages_list: AngularFirestoreCollection<any>;
  private messages_details: any[];
 
  public curr_name:string;
  public curr_lastname:string;
  public curr_id:string;
 


  constructor(public afs:AngularFirestore) { }

  public currentMessage(name:string,lastname:string,id:string)
  {
    this.curr_name=name;
    this.curr_lastname=lastname;
    this.curr_id=id;
  }

 





 
  public get_currname()
  {
    return this.curr_name;

  }

  public get_currlastname()
  {
    return this.curr_lastname;
    
  }

  public get_currid()
  {
    return this.curr_id;
    
  }

}
