import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const homeResolver: ResolveFn<Observable<any>> = (route, state) => {
  return inject(HomeService).getAllData();
};
