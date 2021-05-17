'use strict'

class AddArrow {
    constructor({
        wrap,
        wrapName,
        placeName,
    })
    {
        this.wrap = document.querySelector(wrap);
        this.prevBtn = document.createElement('button');
        this.nextBtn = document.createElement('button');
        this.wrapName = wrapName;
        this.placeName = placeName;
    }
    setBtn() {
        this.prevBtn.className = `${this.wrapName}-arrow prev ${this.placeName}-prev`;
        this.nextBtn.className = `${this.wrapName}-arrow next ${this.placeName}-next`;
        this.prevBtn.innerHTML = '<span><img src="./images/arrow-left.png"></span>';
        this.nextBtn.innerHTML = '<span><img src="./images/arrow-right.png"></span>';
        this.wrap.append(this.prevBtn);
        this.wrap.append(this.nextBtn);
    }
    init() {
        this.setBtn();
    }
}
export default AddArrow;