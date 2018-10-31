import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationOfExperiencePreviewComponent } from './curation-of-experience-preview.component';

describe('CurationOfExperiencePreviewComponent', () => {
  let component: CurationOfExperiencePreviewComponent;
  let fixture: ComponentFixture<CurationOfExperiencePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationOfExperiencePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationOfExperiencePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
