import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMembershipsComponent } from './project-memberships.component';

describe('ProjectMembershipsComponent', () => {
  let component: ProjectMembershipsComponent;
  let fixture: ComponentFixture<ProjectMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
