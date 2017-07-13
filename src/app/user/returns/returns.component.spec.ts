import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReturnsComponent } from './returns.component';

describe('ReturnsComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ ReturnsComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(ReturnsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

