import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ FooterComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(FooterComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

