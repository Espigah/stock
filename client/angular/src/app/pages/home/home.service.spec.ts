import { ApiService } from './../../api/api.service';
import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {

  let homeService: HomeService;
  //let valueServiceSpy: jasmine.SpyObj<ValueService>;


  beforeEach(() => {
    //const spy = jasmine.createSpyObj('ApiService', ['getValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        HomeService,
        { provide: ApiService/*, useValue: spy  */}
      ]
    });

    homeService = TestBed.get(HomeService);
  });

  it('should be created', () => {
    expect(homeService).toBeTruthy();
  });
});
