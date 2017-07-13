import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ ProductComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(ProductComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

