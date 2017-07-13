import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ ProductListComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(ProductListComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

