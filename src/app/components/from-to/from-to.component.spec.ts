import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromWhereComponent } from './from-to.component';

describe('FromWhereComponent', () => {
  let component: FromWhereComponent;
  let fixture: ComponentFixture<FromWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromWhereComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FromWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
