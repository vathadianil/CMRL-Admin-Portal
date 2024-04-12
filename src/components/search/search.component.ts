import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  searchTextChanged = new Subject<string>();

  @Output() searchEmit = new EventEmitter<string>();

  ngOnInit() {
    this.searchTextChanged
      .pipe(
        debounceTime(500) // you can adjust the debounce time as needed
      )
      .subscribe((searchText) => {
        this.onSearch();
      });
  }

  onSearch() {
    this.searchEmit.emit(this.searchText);
  }

  ngOnDestroy() {
    this.searchTextChanged.unsubscribe();
  }
}
