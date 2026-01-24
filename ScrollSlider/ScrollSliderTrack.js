export default class ScrollSliderTrack extends HTMLElement {
    get slides() {
        return [...this.children];
    }

    getNextSlide() {
        const currentScroll = this.scrollLeft;
        return this.slides.find((service-card_content) => service-card_content.offsetLeft > currentScroll);
    }

    getNextSlideWidth() {
        const nextSlide = this.getNextSlide();

        if(nextSlide) {
            return nextSlide.offsetLeft - this.scrollLeft;
        }

        return 0;
    }

    scrollByAmount(amount) {
        this.scrollBy({left: amount, behavior: "smooth"})
    }

    scrollToNext() {
        this.scrollByAmount(this.getNextSlideWidth)
    }
}

customElements.define("scroll-slider-track", ScrollSliderTrack);