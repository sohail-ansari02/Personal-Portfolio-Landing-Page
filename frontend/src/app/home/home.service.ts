import { BehaviorSubject, from, map, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import { homeDataConst } from './home.const';
import imageUrlBuilder from '@sanity/image-url';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly sanityClientCredentials = {
    option: createClient({
      projectId: '0b59bqps',
      dataset: 'production',
    }),
  };
  private builder = imageUrlBuilder(this.sanityClientCredentials.option);

  // private masterData$ = new BehaviorSubject({
  //   heroSection: undefined,
  //   technology: undefined,
  //   aboutMe: undefined,
  //   services: undefined,
  //   stats: undefined,
  //   projects: undefined,
  //   testimonials: undefined,
  //   contact: undefined,
  // });
  // get masterData() {
  //   return this.masterData$.asObservable();
  // }

  constructor() {
    this.getAllData();
  }
  private urlFor(source: any) {
    return this.builder.image(source).url();
  }
  getAllStaticData() {
    return of(homeDataConst);
  }
  getAllData() {
    return from(this.sanityClientCredentials.option.fetch(`*`)).pipe(
      map((val: any[]) => {
        let masterData = {
          heroSection: val.find((e) => e._type == 'heroSection'),
          technology: val.find((e) => e._type == 'technology'),
          aboutMe: val.find((e) => e._type == 'aboutMe'),
          services: val.find((e) => e._type == 'services'),
          stats: val.find((e) => e._type == 'stats'),
          projects: val.find((e) => e._type == 'projects'),
          testimonials: val.find((e) => e._type == 'testimonials'),
          contact: val.find((e) => e._type == 'contact'),
        };
        masterData.technology.technologyList =
          masterData.technology.technologyList.map((data: any) => {
            return { ...data, imageUrl: this.urlFor(data.logo) };
          });

        masterData.heroSection.profilePhoto = this.urlFor(
          masterData.heroSection.profilePhoto
        );

        masterData.aboutMe.profilePhoto = this.urlFor(
          masterData.aboutMe.profilePhoto
        );

        masterData.projects.projectsList = masterData.projects.projectsList.map(
          (data: any) => {
            return { ...data, imageUrl: this.urlFor(data.image) };
          }
        );
        // console.log('masterData', masterData);
        // this.masterData$.next(masterData);
        return masterData;
      })
    );
  }
}
