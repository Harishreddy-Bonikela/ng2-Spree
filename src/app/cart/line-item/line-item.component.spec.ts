import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LineItemComponent } from './line-item.component';

describe('LineItemComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ LineItemComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(LineItemComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

