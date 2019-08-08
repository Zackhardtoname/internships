import React, {Fragment, useEffect} from 'react';
import {HotTable} from '@handsontable/react';
import {generalRenderer} from "./MatrixRenderers";
import {exportBtnSetup, importCSV} from "./BtnScripts";
import {colHeaders, initialData} from "./Constants";
import {modifyColWidth} from "./helpers/Helpers";
import './Matrix.css';

const Matrix = () => {
    const hotTableComponent = React.createRef();

    const settings = {
        // refactor out some of these settings
        licenseKey: "non-commercial-and-evaluation",
        data: initialData,
        rowHeaders: true,
        manualRowMove: true,
        modifyColWidth: modifyColWidth,
        manualColumnResize: true,
        contextMenu: true,
        colHeaders: colHeaders,
        width: '100%',
        height: 500,
        stretchH: "all",
        columnSorting: true,
        filters: true,
        dropdownMenu: true,
        cells: generalRenderer,
    };

    useEffect(() => {
        exportBtnSetup(hotTableComponent);
        importCSV(hotTableComponent);
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <HotTable ref={hotTableComponent} id="hot" settings={settings}/>
            <hr/>
            <div className="btn-group mb-5">
                <button id="export-file" className="btn intext-btn btn-primary">Download Data</button>
                {/*styling with the bootstrap intext-btn class for consistency*/}
                <input type="file" id="dealCsv" className="btn intext-btn btn-info"/>
            </div>
        </Fragment>
    );
};

export default Matrix;
