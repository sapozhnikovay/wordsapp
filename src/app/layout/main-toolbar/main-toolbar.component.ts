import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  OnDestroy,
  ComponentFactory,
  Type
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, NavigationEnd, Data } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit, OnDestroy {
  @ViewChild('toolbarTarget', { read: ViewContainerRef, static: true }) toolbarTarget: ViewContainerRef;
  toolbarComponents: ComponentRef<Component>[] = new Array<ComponentRef<Component>>();
  private routerEventSubscription: Subscription;
  public showBackButton: boolean;
  public title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: Location,
    public titleService: TitleService
  ) {
    this.titleService.title$.subscribe(data => (this.title = data));
    this.routerEventSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.showBackButton = route.data.showBackButton as boolean;
        this.updateToolbarContent(route.data);
      });
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
    // this.router.navigate(['../']);
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
  }

  private updateToolbarContent(data: Data): void {
    this.clearToolbar();
    const toolbar: any = (data as { toolbar: Type<Component> }).toolbar;
    if (toolbar instanceof Type) {
      const factory: ComponentFactory<Component> = this.componentFactoryResolver.resolveComponentFactory(toolbar);
      const componentRef: ComponentRef<Component> = this.toolbarTarget.createComponent(factory);
      this.toolbarComponents.push(componentRef);
    }
  }

  private clearToolbar() {
    if (this.toolbarTarget) {
      this.toolbarTarget.clear();
    }
    for (const toolbarComponent of this.toolbarComponents) {
      toolbarComponent.destroy();
    }
  }
}
