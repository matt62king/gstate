import {Component, OnInit} from '@angular/core';
import {FetchState} from '../../projects/gstate-lib/src/lib/fetch/fetch-state';

export function testFn(first: string, second: string): string {
  return first + ' then ' + second;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gstate';

  @FetchState(testFn, 'first arg', 'next arg')
  private fetchTest: string;

  ngOnInit(): void {
    console.log(this.fetchTest);
  }
}
