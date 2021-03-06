var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274933, 0.0222142151300385, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.00872694014445075, 0.00138704527296629, 0.000647186729497484, 0.000335093812234621, 0.00025741168450466, 0.000202210974882711, 0.000149294684790746, 0.000114567329942306, 6.02140160684828e-05, 5.85936277828214e-05, 5.1711923833464e-05, 4.27138821454953e-05, 4.05422696994062e-05, 3.27851890347119e-05, 2.02222816079178e-05, 2.29441345978021e-05, 2.10511059808294e-05, 1.71472450338772e-05, 1.4679594098066e-05, 1.54380559791445e-05, 7.10469518372392e-06, 3.51222610306401e-06, 2.90690504312074e-06, 1.7663995468542e-06, 1.18443127350432e-06, 8.88794040143637e-07, 7.68961472497054e-07, 5.76949368502611e-07],
[0.00598171970311823, 0.00136306882662351, 0.000770501010662006, 0.000375739627528127, 0.000233417669801783, 0.000195834144853357, 0.000128977084673298, 0.000106252390778661, 5.23322472454346e-05, 4.91976082681589e-05, 3.1517377153456e-05, 2.92941890873699e-05, 3.38971427715773e-05, 2.9715640317951e-05, 2.66131584203411e-05, 1.86768529736314e-05, 1.99371756899325e-05, 1.99328585412939e-05, 1.94610258583694e-05, 1.92587973721903e-05, 6.98283155031731e-06, 3.14615620111702e-06, 1.99468053296847e-06, 1.27394521731716e-06, 1.33595011631016e-06, 1.42486719356683e-06, 8.11480287632449e-07, 5.89361737857175e-07],
[0.00914260055379201, 0.00211885842083381, 0.00171877295129264, 0.000707628798336302, 0.000433075691873341, 0.000263873312496443, 0.000219981852624729, 0.000229227126586462, 0.000120024799431517, 0.00013394271816991, 8.14515168723329e-05, 9.38113342792146e-05, 4.95313957669108e-05, 4.49385575913563e-05, 4.89084200043788e-05, 4.70957947686923e-05, 3.0455030839649e-05, 3.13195356409501e-05, 2.22086413477207e-05, 2.42424203729108e-05, 7.63642168033485e-06, 6.33258560123195e-06, 5.41768023065714e-06, 3.1281810086714e-06, 2.66917320601578e-06, 1.69519809856133e-06, 1.39297724444098e-06, 1.14860468891642e-06],
[0.0298002194836858, 0.0108660299740111, 0.00365074145801025, 0.00252666251333089, 0.00107677563882613, 0.00070743553305519, 0.000411053817315432, 0.00037822694223677, 0.000406577096400351, 0.000267312416595722, 0.000247174099110792, 0.000244082148723956, 0.000197832986427837, 0.000203462736050763, 0.000125007055029602, 0.000100514961825837, 0.000127934488787895, 0.000107687286395874, 7.93890208212744e-05, 7.89741414939371e-05, 1.8901322652809e-05, 1.15034695526983e-05, 8.44729996318794e-06, 7.03368168752938e-06, 4.19230900861045e-06, 4.40038506965834e-06, 3.58136500167028e-06, 2.22386599402213e-06],
[0.0380479357619525, 0.0108563428635366, 0.00445152914232416, 0.00342716112063435, 0.00120155255611798, 0.00082985692354387, 0.000532804384968055, 0.000444005993107011, 0.000404491690263464, 0.000468462019477922, 0.000389774915723562, 0.000249177194834971, 0.000200639927496971, 0.000180736705995166, 0.000172295104541087, 0.0001231318722974, 0.000118191420702685, 9.93873370851439e-05, 0.000112707188420713, 8.06957662633501e-05, 2.64331515803518e-05, 1.85572155539937e-05, 1.07734025114326e-05, 7.53391508845347e-06, 5.45066685675444e-06, 4.29860091966106e-06, 4.08523129946659e-06, 2.74621124640717e-06],
[0.0108257978155206, 0.00221802427110029, 0.000841155746427846, 0.000459955253432565, 0.0004332448173896, 0.000264606807546031, 0.000259136832880147, 0.000100482120349188, 9.26029328331968e-05, 0.00010759794302273, 9.1322906850877e-05, 7.61247012757149e-05, 4.11209550998937e-05, 3.80394912107285e-05, 4.13094292597282e-05, 2.70007352074497e-05, 2.36655558727428e-05, 2.63034146890107e-05, 2.53628289403895e-05, 1.76758731409432e-05, 1.37198689600382e-05, 2.86924291859059e-06, 3.71782077235316e-06, 2.42244596071473e-06, 1.81318812386699e-06, 9.35254819811604e-07, 1.15391379829077e-06, 7.21012748172711e-07]
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
};

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
};

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
};

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
    y: error[5]
};

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
    y: error[3]
};

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
    y: error[4]
};

var data = [error_graph_0, error_graph_1, error_graph_2, error_graph_3, error_graph_4, error_graph_5];

var layout = initialize();

var config =
{
    responsive: true,
    modeBarButtonsToRemove: ['select2d', 'lasso2d', 'resetScale2d']
};

var myPlot = document.getElementById('web_error_graph_14');

Plotly.newPlot(myPlot, data, layout, config);

function initialize()
{
    var layout =
    {
        title: '<b>[-1, 1]<sup>2</sup> Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = exp(x<sub>1</sub>x<sub>2</sub>)',
        hovermode:'closest',
        xaxis:
        {
            type: 'log',
            autorange: true,
            showgrid: true,
            zeroline: true,
            showline: true,
            autotick: false,
            ticks: 'outside',
            tickformat: '.0e',
            showticklabels: true,
            hoverformat: '.3e',
            title:
            {
                text: 'fill distance'
            }
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
            tickformat: '.0e',
            showticklabels: true,
            hoverformat: '.4e',
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
        height: 650,
        autosize: true,
        showlegend: true,
        dragmode: 'pan',
        margin:
        {
            r: 20,
            t: 150
        },
        legend:
        {
            'orientation': 'h',
            y: -0.15
        }
    }
    return layout;
}
