import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeditorComponent } from './heroeditor.component';

describe('HeroeditorComponent', () => {
  let component: HeroeditorComponent;
  let fixture: ComponentFixture<HeroeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
