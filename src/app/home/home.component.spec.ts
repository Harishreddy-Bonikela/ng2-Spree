import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ HomeComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

