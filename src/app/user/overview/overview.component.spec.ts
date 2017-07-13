import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ OverviewComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(OverviewComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

