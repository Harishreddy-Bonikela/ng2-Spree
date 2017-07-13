import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ HeaderComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

