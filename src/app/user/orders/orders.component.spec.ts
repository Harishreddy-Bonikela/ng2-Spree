import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ OrdersComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(OrdersComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

