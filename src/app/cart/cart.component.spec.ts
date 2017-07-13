import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';

describe('HomeComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ CartComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(CartComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

