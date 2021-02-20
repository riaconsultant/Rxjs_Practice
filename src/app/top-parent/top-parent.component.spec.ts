import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopParentComponent } from './top-parent.component';

describe('TopParentComponent', () => {
  let component: TopParentComponent;
  let fixture: ComponentFixture<TopParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
