import { Component, EventEmitter, Input, Output, type OnInit, type OnDestroy } from "@angular/core"
import { CommonModule } from "@angular/common"

interface SlideImage {
  defaultUrl: string
  hoverUrl: string
}

@Component({
  selector: "app-slider-four",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./slider-four.html",
  styleUrls: ["./slider-four.scss"],
})
export class SliderFour implements OnInit, OnDestroy {
  @Input() imagesArry: Array<string | SlideImage> = []
  @Output() valueChange = new EventEmitter<string>()
  @Output() valueChange1 = new EventEmitter<{ flag: boolean; message: string }>()

  filteredImages: SlideImage[] = []
  currentIndex = 0
  private resizeListener: () => void = () => {}
  slidesToShow = 4 

  private imagesToRemove = [6, 7, 11]

  private readonly HOVER_PLACEHOLDER = "https://placehold.co/800x1200?text=Hover+Preview"

  ngOnInit() {
    this.prepareImages()
    this.updateSlidesToShow()
    this.resizeListener = this.onResize.bind(this)
    window.addEventListener("resize", this.resizeListener)
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener)
    }
  }

  onResize() {
    this.updateSlidesToShow()
  }

  updateSlidesToShow() {
    const width = window.innerWidth
    if (width <= 480) this.slidesToShow = 1
    else if (width <= 768) this.slidesToShow = 2
    else if (width <= 1024) this.slidesToShow = 3
    else this.slidesToShow = 4
  }

  prepareImages() {
    const filtered = this.imagesArry.filter((_, index) => !this.imagesToRemove.includes(index))

    this.filteredImages = filtered.map((item) => {
      if (typeof item !== "string") {
        return {
          defaultUrl: item.defaultUrl,
          hoverUrl: item.hoverUrl || this.HOVER_PLACEHOLDER,
        }
      }

      if (item.includes(",")) {
        const [def, hov] = item.split(",").map((s) => s.trim())
        return {
          defaultUrl: def || this.HOVER_PLACEHOLDER,
          hoverUrl: hov || this.HOVER_PLACEHOLDER,
        }
      }

      return {
        defaultUrl: item,
        hoverUrl: this.HOVER_PLACEHOLDER,
      }
    })
  }

  buttonClicked(val: string) {
    this.valueChange1.emit({ flag: true, message: val })
  }

  sendValue(val: string) {
    console.log(val)
    this.valueChange.emit(val)
  }

  moveSlide(direction: number) {
    const totalSlides = this.filteredImages.length
    const maxIndex = totalSlides - this.slidesToShow
    if (direction === 1) {
      if (this.currentIndex >= maxIndex) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    } else if (direction === -1) {
      if (this.currentIndex <= 0) {
        this.currentIndex = maxIndex
      } else {
        this.currentIndex--
      }
    }
  }

  calculateTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.slidesToShow)}%)`
  }
}
