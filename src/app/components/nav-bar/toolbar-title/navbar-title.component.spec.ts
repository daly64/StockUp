import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NavBarTitleComponent} from "./navbar-title.component";


describe('ToolbarTitleComponent', () => {
  let component: NavBarTitleComponent;
  let fixture: ComponentFixture<NavBarTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBarTitleComponent]
    });
    fixture = TestBed.createComponent(NavBarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
