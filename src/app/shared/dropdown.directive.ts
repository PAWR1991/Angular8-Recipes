import {Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
    /**
     * closes the dropdown from the second click anywhere on the page
     * @param event 
     */
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
}