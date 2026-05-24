import {Component, Input, Output, EventEmitter, input, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LottieComponent, AnimationOptions, LottieTransferState} from 'ngx-lottie';

@Component({
    selector: 'app-lottie-player',
    standalone: true,
    imports: [CommonModule, LottieComponent],
    template: `
        <div class="lottie-container">
            <ng-lottie
                    [options]="computedOption()"
                    (complete)="complete.emit($event)"
                    (configReady)="onConfigReady()"
                    (dataReady)="onDataReady()"
                    (domLoaded)="onDomLoaded()"
                    (error)="onError($event)">
            </ng-lottie>
        </div>
    `,
    styles: [`
      .lottie-container {
        width: 100%;
        height: 300px;
        display: block;
      }

      ng-lottie {
        width: 100%;
        height: 100%;
        display: block;
      }
    `]
})
export class LottiePlayerComponent {
    options = input<AnimationOptions>();
    showPlaceholder = input<boolean>(false);
    @Output() complete = new EventEmitter<any>();

    lottieTransferState = inject(LottieTransferState);

    computedOption = computed(() => {
        const opts = this.options();
        const path = (opts as any).path; // ← Type assertion
        const cachedData = this.lottieTransferState.get(path);


        // If cached data exists (SSR), use it; otherwise use the original options
        if (cachedData) {
            return { animationData: cachedData };
        }

        // Fallback to original options (with path)
        return opts;
    });

    onConfigReady() {
        console.log('✅ Lottie config ready');
    }

    onDataReady() {
        console.log('✅ Lottie data loaded');
    }

    onDomLoaded() {
        console.log('✅ Lottie DOM loaded');
    }

    onError(error: any) {
        console.error('❌ Lottie error:', error);
    }
}