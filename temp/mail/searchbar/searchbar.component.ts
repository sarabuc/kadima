
import {fromEvent as observableFromEvent} from 'rxjs';

import {distinctUntilChanged, debounceTime, map} from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/Observable';



@Component({
  selector: 'app-mail-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  inputValue;

  @Input() placeholder = 'חיפוש...';
  @Input() delay = 200;
  @Output() onSearch = new EventEmitter();
  @Output() onSearchChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const event$ = observableFromEvent(elementRef.nativeElement, 'keyup').pipe(
      map(() => this.inputValue),
      debounceTime(this.delay),
      distinctUntilChanged(),);
    event$.subscribe(input => this.onSearchChange.emit(input));
  }

  enterUp() {
    this.onSearch.emit(this.inputValue);
  }

}
