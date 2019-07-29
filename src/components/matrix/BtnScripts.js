import {columnDelimiter, initialData as curData} from "./Constants";
import {parseCSV} from "./helpers/InputHelpers";

export function exportBtnSetup(hotTableComponent) {
    let btn = document.getElementById('export-file');
    const cur_instance = hotTableComponent.current.hotInstance;
    btn.addEventListener('click', function () {
        let exportPlugin = cur_instance.getPlugin('exportFile');
        exportPlugin.downloadFile('csv', {
            bom: false,
            columnDelimiter: columnDelimiter,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: 'internships_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            columnHeaders: true,
            rowHeaders: true,
        });
    });
}

export function importCSV(hotTableComponent) {
    const cur_instance = hotTableComponent.current.hotInstance;

    let input = document.getElementById('dealCsv');
    input.addEventListener('change', async function (e) {
        let reader = new FileReader();

        reader.addEventListener('load', function (e) {
            let csvData = e.target.result;
            parseCSV(cur_instance, csvData);
        });

        reader.readAsText(e.target.files[0]);
    });
}