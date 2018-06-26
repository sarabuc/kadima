import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import {DbService} from './db.service' ;
@Injectable()
export class MessageService {

 private messageRef: AngularFirestoreCollection<any>;
  public auth;
  private myMessage: any[];
  private messages: any[];
  private messageArray: any[]= new Array();
  public temp: number;
   private city;
   private categories: string[] = new Array();
   private itemdoc: AngularFirestoreDocument<any>;
   private flag: number;
   private col: AngularFirestoreCollection<any>;
   private firstTime = true;
   private returnMessageRef: AngularFirestoreCollection<any>;
   private _id:string;
   public id: string;
   public detail_name:string;
   public detail_lastname:string;
   public detail_phone:number;
   public detail_cat:string;
   public detail_address:string;
   public detail_details:string;
   public detail_city:string;
   public date=new Date();
   public date1:any;


  constructor(private afsDocument: AngularFirestore, public afAuth: AngularFireAuth, public firebaseService: DbService) {
    this.returnMessageRef = this.afsDocument.collection('return_messages');
    this._id='';

      this.date1 =this.format(this.date);

    this.itemdoc=this.afsDocument.doc('volunteers/' +this.firebaseService.getEmail());


    this.itemdoc.valueChanges().subscribe(res=>{

      this.city=res.city;
      this.categories=res.helpCategory;

    });




























  console.log(this.city);
   this.col=this.afsDocument.collection('messages');
    this.col.valueChanges().subscribe(mess=>{
      this.messages=mess;




      if(this.messages!=null)
      {
        this.temp=this.messages.length;
       this.messageArray=[];
      this.messages.forEach(element => {
        this.flag=0;

        this.categories.forEach(Celement => {
          if(Celement==element.category||Celement=='אחר')
          {
             this.flag=1;


           }


         });


        if(element.city==this.city&&this.flag==1)
        {

         this.messageArray.push(element);
         if(element.date>=this.date1)
         {
           this.date1=element.date;
           let audio=new Audio('assets/2.mp3');
           audio.play();
         }
       }
      this. messageArray.sort( (a,b) => b.date.localeCompare(a.date) );


       });
      }


    });


  }


  add(message: any) :void{
    this.col.add(message).then(res=>{

    });
  }

  addReturnMessages(return_message: any): void {
    this.returnMessageRef.add(return_message).then(res => {



    })

  }

  public get_id_message() {
    this.id = this.afsDocument.createId();
    return this.id;
  }


  format(curr){
    var dd = curr.getDate();
  var mm = curr.getMonth()+1; //January is 0!
  var yyyy =curr.getFullYear();
  var time=curr.getHours();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  var today = dd+'/'+mm+'/'+yyyy+'  '+curr.getHours()+':'+curr.getMinutes()+':'+curr.getSeconds();
  return today;
  }

  public get allMessage()
  {
    return this.myMessage ? this.myMessage :[]
  }

  public current_mess(_name:string, _lastname:string, _phone:number,_category:string,_city:string,_address:string,_details:string)
  {

    this.detail_name=_name;
    this.detail_lastname=_lastname;
    this.detail_phone=_phone;
    this.detail_cat=_category;
    this.detail_city=_city;
    this.detail_address=_address;
    this.detail_details=_details;

  }
  public get_curr_name()
  {
    return this.detail_name;
  }
  public get_curr_last()
  {
    return this.detail_lastname;

  }

  public get_curr_phone()
  {
    return this.detail_phone;

  }
  public get_curr_cat()
  {

 return this.detail_cat;
  }
  public get_curr_address()
  {
    return this.detail_address;
  }
  public get_curr_city()
  {
    return this.detail_city;

  }
public get_curr_details()
{
  return  this.detail_details;

}



}
