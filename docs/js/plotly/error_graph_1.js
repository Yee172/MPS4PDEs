var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274933, 0.0222142151300385, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.0171833797376548, 0.00570106530712522, 0.00177606863464774, 0.000975991251843666, 0.00054031490282469, 0.000482095664072979, 0.000504659995161916, 0.000348935561957475, 0.000158557948082727, 0.000149589350221468, 7.58360905734889e-05, 0.000108011721179579, 0.000169457009060459, 6.58686013963461e-05, 6.8663743489239e-05, 4.91689944386309e-05, 4.32481901757598e-05, 3.00910994424086e-05, 3.98908085790239e-05, 4.56851200798525e-05, 2.39782510433884e-05, 8.06266380948273e-06, 6.1441177372501e-06, 2.77161149320193e-06, 3.24553521302562e-06, 2.19860334649269e-06, 1.25493410951805e-06, 1.3594945205142e-06],
[0.0219702492342151, 0.00722709088835316, 0.0016926746363044, 0.00134731495071527, 0.000644659672770054, 0.00063970895584653, 0.000442235765392596, 0.000283877052217107, 0.000273936302177091, 0.000192535529434323, 0.000169406375341907, 7.57588291824263e-05, 6.56793882711781e-05, 9.33531359734729e-05, 6.50311200534048e-05, 7.03215851904915e-05, 8.08277517956313e-05, 4.23102221960292e-05, 7.03587199577527e-05, 4.285608751875e-05, 2.85562554154239e-05, 8.09139618773713e-06, 5.59240072650624e-06, 5.19048768587993e-06, 2.24064995890672e-06, 4.50715275235325e-06, 1.95924777735001e-06, 1.1862939865992e-06],
[0.0142962023366531, 0.00491520976672088, 0.00270256823709314, 0.00185728687598363, 0.000804804031028006, 0.000634813915952215, 0.000456902447380614, 0.000272617726371216, 0.00024186228601053, 0.00018563162502172, 0.000131802495825895, 0.000285597879491561, 0.000110495579770387, 7.89696752709901e-05, 0.000105391600050631, 7.65547302545855e-05, 8.60107820077616e-05, 8.36702278821377e-05, 6.6280633448379e-05, 8.61594920333886e-05, 1.64982595878271e-05, 8.97632664020875e-06, 9.76151981646467e-06, 4.11677098011154e-06, 2.51525446426371e-06, 2.15741969178396e-06, 1.88682279222974e-06, 1.76102467719375e-06],
[0.0850814968640794, 0.0205573932483301, 0.0090978647050024, 0.00461828179580337, 0.00319876838726607, 0.00172235688229616, 0.00121527500843754, 0.00116710226659222, 0.00090393400386013, 0.000691859307361042, 0.000551380747529251, 0.000432189908917913, 0.000419053752578336, 0.000462207032358108, 0.000287722104408417, 0.000248215390145745, 0.000246100620023171, 0.000240703480308468, 0.000214688469560187, 0.000192809632864055, 7.69222985965712e-05, 4.3882885409019e-05, 2.08511521719856e-05, 1.87799145825451e-05, 1.47179850422674e-05, 8.15192485603689e-06, 6.72187012984438e-06, 5.34177145361525e-06],
[0.188716244350086, 0.0844454620831012, 0.0407392036532155, 0.0192858717500641, 0.0114819969624786, 0.00645026388080439, 0.00507365639986546, 0.00410349858560455, 0.00358301252789239, 0.00304014157828369, 0.00239174092621397, 0.0022816358379032, 0.00208417891640167, 0.00169597822806189, 0.00123869988964209, 0.00121737036540814, 0.000943159351805889, 0.000975703767682745, 0.000868512451162928, 0.000785337149645571, 0.000268120608136968, 0.000156632803776091, 0.000100370154189733, 6.90022503473386e-05, 4.49398001567403e-05, 3.62635402950673e-05, 4.01431088228321e-05, 2.51224072291834e-05],
[0.201245861461347, 0.079039441339205, 0.0336062795931031, 0.0155400930848604, 0.0134392904422915, 0.00654901598208912, 0.00538835544509375, 0.00461053750851548, 0.00337417952735386, 0.002734084339723, 0.00254910066347591, 0.0021229455237286, 0.00158422395464264, 0.00176488794229712, 0.00138549224739037, 0.00120755734059941, 0.00115368236304469, 0.00107416761085055, 0.000825029778027897, 0.000676331067969826, 0.000336520697839404, 0.000183334907067234, 9.57769953959797e-05, 6.71877247455654e-05, 5.46152019964552e-05, 4.46167374619222e-05, 3.80438995115639e-05, 2.68988227087874e-05]
];

var error_graph_0 =
{
    name: '&#x3BB; / &#x39B; = 1.0000',
    line:
    {
        color: 'red',
        width: 3
    },
    hoverinfo: 'x+y',
    x: fill_distance,
    y: error[0]
}

var error_graph_1 =
{
    name: '&#x3BB; / &#x39B; = 0.2500',
    line:
    {
        color: 'blue',
        width: 3
    },
    hoverinfo: 'x+y',
    x: fill_distance,
    y: error[1]
}

var error_graph_2 =
{
    name: '&#x3BB; / &#x39B; = 0.1459',
    line:
    {
        color: 'green',
        width: 3
    },
    hoverinfo: 'x+y',
    x: fill_distance,
    y: error[2]
}

var error_graph_3 =
{
    name: '&#x3BB; / &#x39B; = 0.0250',
    line:
    {
        color: 'lime',
        width: 3
    },
    hoverinfo: 'x+y',
    x: fill_distance,
    y: error[3]
}

var error_graph_4 =
{
    name: '&#x3BB; / &#x39B; = 0.0025',
    line:
    {
        color: 'orange',
        width: 3
    },
    hoverinfo: 'x+y',
    x: fill_distance,
    y: error[4]
}

var error_graph_5 =
{
    name: '&#x3BB; / &#x39B; = 0.0019',
    line:
    {
        color: 'cyan',
        width: 3
    },
    hoverinfo: 'x+y',
    x: fill_distance,
    y: error[5]
}

var data = [error_graph_0, error_graph_1, error_graph_2, error_graph_3, error_graph_4, error_graph_5];

var layout = initialize();

var myPlot = document.getElementById('web_error_graph_1');

Plotly.newPlot(myPlot, data, layout);

function initialize()
{
    var layout =
    {
        title: '<b>Unit Disk Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = x<sub>1</sub>x<sub>2</sub> + cos(x<sub>1</sub>)exp(x<sub>2</sub>)',
        hovermode:'closest',
        xaxis:
        {
            type: 'log',
            autorange: true,
            showgrid: true,
            zeroline: true,
            showline: true,
            autotick: true,
            ticks: 'outside',
            hoverformat: '.3g',
            showticklabels: true
        },
        yaxis:
        {
            type: 'log',
            autorange: true,
            showgrid: true,
            zeroline: true,
            showline: true,
            autotick: false,
            ticks: 'outside',
            hoverformat: '.2e',
            showticklabels: true,
            title:
            {
                text: 'max norm error'
            }
        },
        shapes:
        [
            {
                type: 'line',
                xref: 'x',
                yref: 'y',
                x0: 1,
                y0: 1,
                x1: 1e-03,
                y1: 1e-03,
                line:
                {
                    color: 'black',
                    width: 1.5
                }
            },
            {
                type: 'line',
                xref: 'x',
                yref: 'y',
                x0: 1,
                y0: 1,
                x1: 1e-03,
                y1: 1e-06,
                line:
                {
                    color: 'black',
                    width: 1.5
                }
            },
            {
                type: 'line',
                xref: 'x',
                yref: 'y',
                x0: 1,
                y0: 1,
                x1: 1e-02,
                y1: 1e-06,
                line:
                {
                    color: 'black',
                    width: 1.5
                }
            }
        ],
        annotations:
        [
            {
                xref: 'paper',
                yref: 'paper',
                x: 1.00,
                xanchor: 'left',
                y: 0.03,
                yanchor: 'top',
                text: 'fill distance',
                showarrow: false
            },
            {
                text: '1st order',
                ax: 0,
                ay: 0,
                x: -3,
                y: -3
            },
            {
                text: '2nd order',
                x: -3,
                y: -6
            },
            {
                text: '3rd order',
                ax: 0,
                ay: 0,
                x: -2,
                y: -6
            }
        ],
        height: 600,
        autosize: true,
        showlegend: true,
        legend:
        {
            'orientation': 'h'
        }
    }
    return layout;
}
