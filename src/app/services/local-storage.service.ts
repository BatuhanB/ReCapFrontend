import { Injectable } from '@angular/core';
import { CartKey } from '../models/localStorageKey';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  items: any = [];

  setToStorage(key: string, value: any) {
    this.items.push(value);
    let json = JSON.stringify(this.items);
    localStorage.setItem(key, json);
  }

  isSetToStorage(key: string): boolean {
    return !localStorage.getItem(key) ? false : true;
  }

  getStorage(key: string): any {
    let json = localStorage.getItem(key);
    let value = JSON.parse(json);
    return value;
  }

  getStorageItems(){
    this.items = JSON.parse(localStorage.getItem(CartKey)) ?? [];
    return this.items;
  }

  getByType<T>(key: string): T {
    let json = localStorage.getItem(key);
    let value: T = Object.assign({}, JSON.parse(json));
    return value;
  }

  removeFromStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearStorage() {
    this.items = [];
  }

  removeStorage() {
    localStorage.clear();
  }
}
