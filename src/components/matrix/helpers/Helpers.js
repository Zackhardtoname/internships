import {columnDelimiter, maxColWidth, adjColWidthThres} from "../Constants";

export function parseCSV(cur_instance, data) {
    let parseData = [];
    let lines = data.split("\n");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== "") {
            let toPush = lines[i].split(columnDelimiter);
            toPush.forEach((str) => (
                    str.replace(/^"|"$/g, '')
                )
            );
            parseData.push(toPush);
        }
    }

    cur_instance.loadData(parseData);
}

export function modifyColWidth(width, col){
    if(width > adjColWidthThres){
        return maxColWidth
    }
}
