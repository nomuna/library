import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

import { LibraryTestModule } from '../../../test.module';
import { LbrMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { LbrMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
  describe('LbrMetricsMonitoringComponent', () => {
    let comp: LbrMetricsMonitoringComponent;
    let fixture: ComponentFixture<LbrMetricsMonitoringComponent>;
    let service: LbrMetricsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [LibraryTestModule],
        declarations: [LbrMetricsMonitoringComponent]
      })
        .overrideTemplate(LbrMetricsMonitoringComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LbrMetricsMonitoringComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(LbrMetricsService);
    });

    describe('refresh', () => {
      it('should call refresh on init', () => {
        // GIVEN
        const response = {
          timers: {
            service: 'test',
            unrelatedKey: 'test'
          },
          gauges: {
            'jcache.statistics': {
              value: 2
            },
            unrelatedKey: 'test'
          }
        };
        spyOn(service, 'getMetrics').and.returnValue(of(response));

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(service.getMetrics).toHaveBeenCalled();
      });
    });
  });
});
