var chart = c3.generate({

    bindto: '#month-to-date',

    data: {
        columns: [
            ['Air', 289812],
            ['Hotel', 194033],
            ['Ground', 76302],
        ],
        type: 'donut'
    },
    donut: {
        title: '$560,147'
    }
});
