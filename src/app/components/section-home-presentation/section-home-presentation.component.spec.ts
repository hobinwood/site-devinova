import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomePresentationComponent } from './section-home-presentation.component';

describe('SectionHomePresentationComponent', () => {
  let component: SectionHomePresentationComponent;
  let fixture: ComponentFixture<SectionHomePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHomePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHomePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
