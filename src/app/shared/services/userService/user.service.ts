import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {create} from "domain";
import {getAll} from "@angular/fire/remote-config";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) {}

    //CRUD

    create(user: User){
      return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
    }

    getAll(){
      return this.afs.collection<User>(this.collectionName).valueChanges();
    }

    getById(id: string){
      return this.afs.collection<User>(this.collectionName).doc(id).valueChanges();
      //ez tlehet where-rel is csak ugy tan tombot ad vissza
    }

    update(user: User){
      return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
    }

    delete(id: string){
      return this.afs.collection<User>(this.collectionName).doc(id).delete();
    }

}