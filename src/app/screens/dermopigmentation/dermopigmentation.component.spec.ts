import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermopigmentationComponent } from './dermopigmentation.component';

describe('DermopigmentationComponent', () => {
  let component: DermopigmentationComponent;
  let fixture: ComponentFixture<DermopigmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DermopigmentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermopigmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
