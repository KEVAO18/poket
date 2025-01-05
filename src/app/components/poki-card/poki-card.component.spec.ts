import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiCardComponent } from './poki-card.component';

describe('PokiCardComponent', () => {
  let component: PokiCardComponent;
  let fixture: ComponentFixture<PokiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokiCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
