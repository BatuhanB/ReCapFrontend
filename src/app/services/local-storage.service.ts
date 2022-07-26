import { Injectable } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToStorage(key:string,value:any){
    let json = JSON.stringify(value);
    localStorage.setItem(key,json);
  }
  
  isSetToStorage(key:string):boolean{
    return !localStorage.getItem(key) ? false : true;
  }
  
  getStorage(key:string):any{
    let json = localStorage.getItem(key);
    let value = JSON.parse(json);
    return value;
  }

  getByType<T>(key:string):T{
    let json = localStorage.getItem(key);
    let value:T = Object.assign({},JSON.parse(json));
    return value;
  }

  removeFromStorage(key:string){
    localStorage.removeItem(key);
  }

  removeStorage(){
    localStorage.clear();
  }
}