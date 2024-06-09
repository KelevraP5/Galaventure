import { TestBed } from '@angular/core/testing';
import { JoueurComponent } from './joueur.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoueurComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JoueurComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'front' title`, () => {
    const fixture = TestBed.createComponent(JoueurComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JoueurComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, front');
  });
});
