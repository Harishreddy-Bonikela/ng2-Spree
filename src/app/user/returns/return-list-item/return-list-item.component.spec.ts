import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReturnListItemComponent } from './return-list-item.component';

describe('ReturnListItemComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ ReturnListItemComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(ReturnListItemComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

