import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmultipleComponent } from './uploadmultiple.component';

describe('UploadmultipleComponent', () => {
  let component: UploadmultipleComponent;
  let fixture: ComponentFixture<UploadmultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadmultipleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
