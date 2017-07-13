import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListItemComponent } from './product-list-item.component';

describe('ProductListItemComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ ProductListItemComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(ProductListItemComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

