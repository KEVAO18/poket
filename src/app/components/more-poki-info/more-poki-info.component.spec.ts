import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePokiInfoComponent } from './more-poki-info.component';

describe('MorePokiInfoComponent', () => {
  let component: MorePokiInfoComponent;
  let fixture: ComponentFixture<MorePokiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorePokiInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorePokiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
