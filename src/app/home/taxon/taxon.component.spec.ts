import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaxonComponent } from './taxon.component';

describe('TaxonComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ TaxonComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(TaxonComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

