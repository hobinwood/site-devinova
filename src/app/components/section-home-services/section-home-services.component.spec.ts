import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomeServicesComponent } from './section-home-services.component';

describe('SectionHomeServicesComponent', () => {
  let component: SectionHomeServicesComponent;
  let fixture: ComponentFixture<SectionHomeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHomeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHomeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
