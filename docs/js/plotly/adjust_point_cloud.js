var pc0_step1 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    x: x0_step1,
    y: y0_step1
};

var pc0_step1_add =
{
    mode: "markers",
    marker:
    {
        color: 'lime',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step1_add,
    y: y0_step1_add
};

var pc0_step2 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step2,
    y: y0_step2
};

var pc0_step2_delete =
{
    mode: "markers",
    marker:
    {
        color: 'red',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step2_delete,
    y: y0_step2_delete
};

var pc0_step2_add =
{
    mode: "markers",
    marker:
    {
        color: 'lime',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step2_add,
    y: y0_step2_add
};

var pc0_step3 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step3,
    y: y0_step3
};

var pc0_step3_delete =
{
    mode: "markers",
    marker:
    {
        color: 'red',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step3_delete,
    y: y0_step3_delete
};

var pc0_step3_add =
{
    mode: "markers",
    marker:
    {
        color: 'lime',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x0_step3_add,
    y: y0_step3_add
};

var pc1_step1 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x1_step1,
    y: y1_step1
};

var pc1_step1_add =
{
    mode: "markers",
    marker:
    {
        color: 'lime',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x1_step1_add,
    y: y1_step1_add
};

var pc1_step2 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x1_step2,
    y: y1_step2
};

var pc1_step3 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x1_step3,
    y: y1_step3
};

var pc1_step3_delete =
{
    mode: "markers",
    marker:
    {
        color: 'red',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x1_step3_delete,
    y: y1_step3_delete
};

var pc1_step3_add =
{
    mode: "markers",
    marker:
    {
        color: 'lime',
        size: 5
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x1_step3_add,
    y: y1_step3_add
};

var pc2 =
{
    mode: "markers",
    marker:
    {
        size: 4
    },
    hoverinfo: 'x+y',
    visible: false,
    x: x2,
    y: y2
};

var states =
[
    [ true, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [ true,  true, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false,  true,  true,  true, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false,  true,  true,  true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,  true,  true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false,  true, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false,  true,  true,  true, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false,  true]
];

var aiming = '<b>Aiming:</b> fill distance &#x2264; 0.1000, separation &#x2265; 0.35000';

var operates =
[
    'Add points in the gap to decrease the fill distance',
    'Map interior points that are too close to the boundary',
    'Merge points to increase the separation between points'
];

var geometry =
[
    [0.1609480075137915, 0.0962865474446498], // original
    [0.117542370115179, 0.0001995642904477766], // after add
    [0.117542370115179, 0.0001995642904477766], // after map
    [0.117542370115179, 0.302953754018176], // after merge
    [0.0999083331838685, 0.1133078058832058], // after add
    [0.0999083331838685, 0.1133078058832058], // after map
    [0.0999083331838685, 0.356425746959986] // after merge
];

var data =
[
    pc0_step1,
    pc0_step1_add,
    pc0_step2,
    pc0_step2_delete,
    pc0_step2_add,
    pc0_step3,
    pc0_step3_delete,
    pc0_step3_add,
    pc1_step1,
    pc1_step1_add,
    pc1_step2,
    pc1_step3,
    pc1_step3_delete,
    pc1_step3_add,
    pc2
];

var layout = initialize();

var config =
{
    scrollZoom: true,
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: ['select2d', 'lasso2d', 'resetScale2d'],
    modeBarButtonsToAdd:
    [
        {
            name: 'Back',
            icon: Plotly.Icons.home,
            click: function(gd) {window.location.href = 'index.html'}
        }
    ]
};

var myPlot = document.getElementById('web_point_cloud');

Plotly.newPlot(myPlot, data, layout, config);

function initialize()
{
    var layout =
    {
        title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[0][0].toFixed(4) + ', separation = ' + geometry[0][1].toFixed(5),
        hovermode:'closest',
        xaxis:
        {
            autorange: true,
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: '',
            showticklabels: false
        },
        yaxis:
        {
            scaleanchor: 'x',
            scaleratio: 1,
            autorange: true,
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: '',
            showticklabels: false
        },
        shapes:
        [
            {
                type: 'circle',
                xref: 'x',
                yref: 'y',
                x0: -1,
                y0: -1,
                x1: 1,
                y1: 1,
                opacity: 0.2,
                fillcolor: 'gray'
            },
            {
                type: 'circle',
                xref: 'x',
                yref: 'y',
                x0: -1,
                y0: -1,
                x1: 1,
                y1: 1,
                line:
                {
                    color: 'black',
                    width: 0.5
                }
            },
            {
                type: 'rect',
                xref: 'x',
                yref: 'y',
                x0: -1.8,
                y0: -1.8,
                x1: 1.8,
                y1: 1.8,
                line:
                {
                    color: 'black',
                    width: 2
                }
            },
        ],
        annotations:
        [
            {
                text: "<span style='color:lime'>&#9673;</span>Green: Add          <span style='color:red'>&#9673;</span>Red: Delete",
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: 0.98,
                ax: 0,
                ay: 0,
                font:
                {
                    size: 18,
                }
            }
        ],
        updatemenus:
        [
            {
                buttons:
                [
                    {
                        args: [{visible: states[0]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[0][0].toFixed(4) + ', separation = ' + geometry[0][1].toFixed(5)}],
                        label: 'Origin',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[1]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[1][0].toFixed(4) + ', separation = ' + geometry[1][1].toFixed(5) + '<br>' + operates[0]}],
                        label: 'Loop 1: [Add]',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[2]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[2][0].toFixed(4) + ', separation = ' + geometry[2][1].toFixed(5) + '<br>' + operates[1]}],
                        label: 'Loop 1: [Map]',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[3]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[3][0].toFixed(4) + ', separation = ' + geometry[3][1].toFixed(5) + '<br>' + operates[2]}],
                        label: 'Loop 1: [Merge]',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[4]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[4][0].toFixed(4) + ', separation = ' + geometry[4][1].toFixed(5) + '<br>' + operates[0]}],
                        label: 'Loop 2: [Add]',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[5]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[5][0].toFixed(4) + ', separation = ' + geometry[5][1].toFixed(5) + '<br>' + operates[1] + ' (no change)'}],
                        label: 'Loop 2: [Map]',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[6]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[6][0].toFixed(4) + ', separation = ' + geometry[6][1].toFixed(5) + '<br>' + operates[2]}],
                        label: 'Loop 2: [Merge]',
                        method: 'update'
                    },
                    {
                        args: [{visible: states[7]}, {title: aiming + '<br><b>Current:</b> fill distance = ' + geometry[6][0].toFixed(4) + ', separation = ' + geometry[6][1].toFixed(5)}],
                        label: 'Result',
                        method: 'update'
                    }
                ],
                direction: 'top',
                showactive: true,
                type: 'buttons',
                x: 0,
                xanchor: 'left',
                y: 1,
                yanchor: 'top'
            }
        ],
        height: 1000,
        autosize: true,
        showlegend: false,
        dragmode: 'pan',
        margin:
        {
            t: 120,
            b: 0
        }
    }
    return layout;
}
