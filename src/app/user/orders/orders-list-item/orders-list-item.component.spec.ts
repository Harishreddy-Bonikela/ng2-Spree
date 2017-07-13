import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderListItemComponent } from './orders-list-item.component';

describe('OrderListItemComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ OrderListItemComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(OrderListItemComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

