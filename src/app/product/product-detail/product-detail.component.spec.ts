import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ ProductDetailComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(ProductDetailComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

