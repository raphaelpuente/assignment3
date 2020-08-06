// IIFE module
"use strict";
export class Paragraphs {
    constructor(firstParagraph = "", secondParagraph = "", thirdParagraph = "", fourthParagraph = "") {
        this.firstParagraph = firstParagraph;
        this.secondParagraph = secondParagraph;
        this.thirdParagraph = thirdParagraph;
        this.fourthParagraph = fourthParagraph;
    }
    toString() {
        let outputstring = "";
        outputstring += "First Paragraph  : " + this.firstParagraph + "\n";
        outputstring += "Second Paragraph : " + this.secondParagraph + "\n";
        outputstring += "Third Paragraph  : " + this.thirdParagraph + "\n";
        outputstring += "Fourth Paragraph : " + this.fourthParagraph + "\n";
        return outputstring;
    }
    toJSON() {
        let JSONObject = {
            firstParagraph: this.firstParagraph,
            secondParagraph: this.secondParagraph,
            thirdParagraph: this.thirdParagraph,
            fourthParagraph: this.fourthParagraph,
        };
        return JSONObject;
    }
    setParagraph(JSON_Data) {
        this.firstParagraph = JSON_Data.firstParagraph;
        this.secondParagraph = JSON_Data.secondParagraph;
        this.thirdParagraph = JSON_Data.thirdParagraph;
        this.fourthParagraph = JSON_Data.fourthParagraph;
    }
}
//# sourceMappingURL=paragraphs.js.map