import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ UserComponent ]
        })
    });

    it('exists', async(() => {
        const fixture = TestBed.createComponent(UserComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
})

