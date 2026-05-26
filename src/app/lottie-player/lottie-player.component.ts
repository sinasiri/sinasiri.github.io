import {Component, Input, Output, EventEmitter, input, computed, inject, PLATFORM_ID, OnInit} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {LottieComponent, AnimationOptions, LottieTransferState} from 'ngx-lottie';

@Component({
    selector: 'app-lottie-player',
    standalone: true,
    imports: [CommonModule, LottieComponent],
    template: `
        <div class="lottie-container">
            @if (isBrowser) {
                <ng-lottie
                        [options]="computedOption()"
                        (complete)="complete.emit($event)">
                </ng-lottie>
            }

        </div>
    `,
    styles: [`
      .lottie-container {
        width: 100%;
        display: block;
      }

      ng-lottie {
        width: 100%;
        height: 100%;
        display: block;
      }
    `]
})
export class LottiePlayerComponent implements OnInit{
    options = input<AnimationOptions>();
    showPlaceholder = input<boolean>(false);
    @Output() complete = new EventEmitter<any>();
    private platformId = inject(PLATFORM_ID);

    isBrowser = false;
    ngOnInit(): void {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }
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




}