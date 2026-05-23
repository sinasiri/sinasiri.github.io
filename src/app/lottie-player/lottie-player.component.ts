import { Component, Input, Output, EventEmitter, OnInit, Inject, PLATFORM_ID, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-lottie-player',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="lottie-container">
            <div #lottieContainer></div>
            @if (!isBrowser && showPlaceholder) {
                <div class="lottie-placeholder">
                    <ng-content select="[placeholder]"></ng-content>
                </div>
            }
        </div>
    `,
    styles: [`
      .lottie-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lottie-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `]
})
export class LottiePlayerComponent implements OnInit {
    @Input() options!: AnimationOptions;
    @Input() showPlaceholder = false;

    @Output() complete = new EventEmitter<any>();
    @Output() loopComplete = new EventEmitter<any>();
    @Output() enterFrame = new EventEmitter<any>();

    @ViewChild('lottieContainer', { read: ViewContainerRef })
    lottieContainer!: ViewContainerRef;

    isBrowser = false;
    private lottieComponentRef?: ComponentRef<any>;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    async ngOnInit() {
        if (this.isBrowser) {
            // Dynamically import LottieComponent only in browser
            const { LottieComponent } = await import('ngx-lottie');

            // Create the component dynamically
            this.lottieComponentRef = this.lottieContainer.createComponent(LottieComponent);

            // Set inputs
            this.lottieComponentRef.setInput('options', this.options);

            // Subscribe to outputs
            this.lottieComponentRef.instance.complete.subscribe((event: any) => {
                this.complete.emit(event);
            });

            this.lottieComponentRef.instance.loopComplete.subscribe((event: any) => {
                this.loopComplete.emit(event);
            });

            this.lottieComponentRef.instance.enterFrame.subscribe((event: any) => {
                this.enterFrame.emit(event);
            });
        }
    }

    ngOnDestroy() {
        this.lottieComponentRef?.destroy();
    }
}