import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    isLoading = new Subject<boolean>();

    public loader: any = {
        show: false,
        pendingService: 0,
    };

    constructor() {}

    /**
     * Method to show the loader
     * */
    show() {
        this.loader.show = true;
        this.loader.pendingService += 1;
        this.isLoading.next(true);
    }

    /**
     * Method to hide the loader
     * */
    hide() {
        this.loader.pendingService -= 1;
        if (this.loader.pendingService === 0) {
            this.isLoading.next(false);
            this.loader.show = false;
        }
    }
}
