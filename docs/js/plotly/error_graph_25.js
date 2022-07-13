var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274932, 0.0222120342891224, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.0101540814311301, 0.00105436110746669, 0.0006261400967736, 0.00039732983990377, 0.000260866800782824, 0.00021799807559425, 8.72411461666847e-05, 7.01631151381818e-05, 4.60933879034425e-05, 5.69203043380897e-05, 5.12621168306734e-05, 3.16781090674203e-05, 2.12609923837676e-05, 3.05198853241817e-05, 2.23559356768658e-05, 2.25911135562848e-05, 2.02544102082224e-05, 1.78269105495996e-05, 1.7619377665052e-05, 1.43869986690068e-05, 6.82946709335344e-06, 2.3371347711923e-06, 2.25036689966568e-06, 1.16233908643674e-06, 1.13827038335929e-06, 8.24898764736209e-07, 7.90293668059133e-07, 4.82501240919864e-07],
[0.00723015980188363, 0.00107389069917125, 0.000716393317279726, 0.000326016666495114, 0.000169827530791582, 0.000139320750415575, 0.000120819807801379, 8.41389558721498e-05, 6.35432563882363e-05, 4.82837827237414e-05, 4.22464071599318e-05, 2.80516174827744e-05, 3.00532663003138e-05, 2.27327146906098e-05, 1.84258020703917e-05, 2.45594592911402e-05, 1.71177099761721e-05, 1.51507347025889e-05, 1.62515484922049e-05, 1.74984857099561e-05, 4.95963097658925e-06, 2.51849035947174e-06, 2.20796083047134e-06, 1.0548501952869e-06, 1.1989722246801e-06, 1.18027874895787e-06, 6.21638735848196e-07, 5.39095094807818e-07],
[0.0113753134876109, 0.00283614655073224, 0.00146087119877962, 0.000673861674422339, 0.000468470179349333, 0.000228972822833622, 0.000262767380843123, 0.000214941719783451, 0.000146939901280024, 0.000130169270509444, 9.8906758561116e-05, 7.88187029566122e-05, 5.31530083766451e-05, 5.1719002325968e-05, 4.73074252277314e-05, 4.20557600348016e-05, 3.40594046919374e-05, 2.79248612483959e-05, 2.45488935816081e-05, 2.5016377809787e-05, 8.62018240269102e-06, 6.03919228338561e-06, 4.67152172494746e-06, 2.93110661908624e-06, 2.74071971840054e-06, 1.68867319776458e-06, 1.4699626586373e-06, 9.66273099756165e-07],
[0.0564100127619691, 0.0235599103946869, 0.00890874212346394, 0.00746191900267058, 0.00238694723506988, 0.00198956827747592, 0.00131915962676016, 0.000985898133317332, 0.000595234185073631, 0.000545677578439754, 0.000461562486613874, 0.000389043166135482, 0.000409725935448219, 0.000277323845114074, 0.000232647068110448, 0.000251772042939375, 0.000204839899336932, 0.00015502565021292, 0.000126764466088297, 0.000120243611843202, 4.09373538147002e-05, 3.52220738265702e-05, 1.54317584395241e-05, 1.09249869805874e-05, 8.14805112553732e-06, 8.01948521160652e-06, 6.5639478550211e-06, 3.98078134829574e-06],
[0.0650419098826412, 0.0284886584333646, 0.00991810948097466, 0.00714799763862311, 0.00307218489607921, 0.00230326044095604, 0.00154558901390433, 0.000843895146646187, 0.0006743913570902, 0.000505500700128414, 0.000563089058562462, 0.000371953513664475, 0.000407727339701165, 0.000224110030720676, 0.000329970413651073, 0.000235196743203124, 0.000228073990505379, 0.000168708814530246, 0.000181428358059708, 0.000153309293340248, 5.7861353927418e-05, 2.35675701641699e-05, 1.6150704602251e-05, 1.1116914457768e-05, 7.67802779689207e-06, 6.11453041176311e-06, 6.74700100751979e-06, 5.78505742413089e-06],
[0.0131311328358769, 0.00337958329464839, 0.00117308429042236, 0.0010167285595539, 0.00074535250089316, 0.000640255217240454, 0.000387961938006908, 0.000201663894261796, 0.000204371850637361, 0.000152904895858084, 0.000143193049100505, 9.39070115882614e-05, 9.91263132307111e-05, 0.000104473514320599, 7.6877564178934e-05, 6.3073151846328e-05, 4.03171141492033e-05, 3.94712431661332e-05, 4.3487443964824e-05, 4.11353382409091e-05, 1.07624539384525e-05, 5.76870302600391e-06, 4.8373326287693e-06, 2.84978766944104e-06, 2.32428793395605e-06, 1.26355750555002e-06, 1.24913823089292e-06, 9.12971855119432e-07]
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
    y: error[5]
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
    y: error[3]
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
    y: error[4]
}

var data = [error_graph_0, error_graph_1, error_graph_2, error_graph_3, error_graph_4, error_graph_5];

var layout = initialize();

var myPlot = document.getElementById('web_error_graph_25');

Plotly.newPlot(myPlot, data, layout);

function initialize()
{
    var layout =
    {
        title: '<b>Unit Disk Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = (x<sub>1</sub>x<sub>2</sub>)<sup>3</sup>',
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
            tickformat: '.0e',
            showticklabels: true,
            hoverformat: '.3e'
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
