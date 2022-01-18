import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { inject, TestBed} from "@angular/core/testing";
import { HttpClientService } from './http-client.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
describe('HttpClientService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService]
    });
  });




it(
  "search should return leaderboard",
  inject(
    [HttpTestingController, HttpClientService],
    (httpMock: HttpTestingController, service: HttpClientService) => {
      let response = {
          results: [
              {
                  username: "lameiraatt",
                  name: "",
                  clan: "turntabl",
                  honour: 4,
                  languages: [
                    {
                      name : "java",
                      rank : -8
                    }
                  ],
                  overall_rank : -8
              }
          ]
      };

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.getLeaderboard()
      .subscribe((event:any) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(response);
      }
      });

      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(response);

      httpMock.verify();

  }))

});
