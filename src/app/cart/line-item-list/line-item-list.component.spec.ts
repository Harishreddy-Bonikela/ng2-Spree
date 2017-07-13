import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LineItemListComponent } from './line-item-list.component';

describe('LineItemListComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ LineItemListComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(LineItemListComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

