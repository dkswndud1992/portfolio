import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly secretKey = 'johny';
  private readonly storageKey = 'portfolio-unlocked';
  
  // Initialize BehaviorSubject from sessionStorage
  private unlocked = new BehaviorSubject<boolean>(sessionStorage.getItem(this.storageKey) === 'true');
  
  public unlocked$ = this.unlocked.asObservable();

  constructor() { }

  checkPassword(password: string): void {
    if (password === this.secretKey) {
      sessionStorage.setItem(this.storageKey, 'true');
      this.unlocked.next(true);
    } else {
      sessionStorage.removeItem(this.storageKey);
      this.unlocked.next(false);
    }
  }

  public get isUnlocked(): boolean {
    return this.unlocked.getValue();
  }

  // Optional: Method to lock the content again
  lock(): void {
    sessionStorage.removeItem(this.storageKey);
    this.unlocked.next(false);
  }
}