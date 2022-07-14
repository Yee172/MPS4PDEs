var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274933, 0.0222142151300385, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.00343667594753194, 0.0011402130614242, 0.000355213726930481, 0.000195198250368289, 0.000108062980564538, 9.64191328095554e-05, 0.000100931999027498, 6.97871123964688e-05, 3.17115896143472e-05, 2.99178700449154e-05, 1.51672181174511e-05, 2.16023442409785e-05, 3.38914018187531e-05, 1.3173720281312e-05, 1.37327487033101e-05, 9.83379888364055e-06, 8.64963803426377e-06, 6.01821989865137e-06, 7.97816172704024e-06, 9.13702402360883e-06, 4.79565020006234e-06, 1.61253279129525e-06, 1.22882353670306e-06, 5.54322286738795e-07, 6.49107037231644e-07, 4.39720647449349e-07, 2.50986829430921e-07, 2.71898931369918e-07],
[0.00439404984684355, 0.00144541817767063, 0.000338534927261103, 0.00026946299014341, 0.0001289319345541, 0.000127941791169706, 8.84471530744335e-05, 5.67754104383589e-05, 5.47872604321764e-05, 3.85071058872644e-05, 3.3881275073977e-05, 1.51517658393274e-05, 1.31358776527257e-05, 1.86706271956272e-05, 1.30062240053519e-05, 1.40643170294386e-05, 1.61655503709834e-05, 8.46204444360232e-06, 1.40717439942595e-05, 8.57121750397205e-06, 5.71125108916881e-06, 1.61827925371227e-06, 1.1184801729236e-06, 1.0380975417057e-06, 4.48130005326064e-07, 9.01430617483712e-07, 3.91849509950859e-07, 2.37258790614092e-07],
[0.00285924046733088, 0.00098304195334431, 0.000540513647418805, 0.00037145737519384, 0.000160960806207644, 0.000126962783190576, 9.13804894753234e-05, 5.45235452724668e-05, 4.83724572069022e-05, 3.71263249998588e-05, 2.63604991634914e-05, 5.71195759047072e-05, 2.20991159498585e-05, 1.57939350493574e-05, 2.10783200127462e-05, 1.53109460523382e-05, 1.72021564006641e-05, 1.67340455767828e-05, 1.32561266832365e-05, 1.72318983882036e-05, 3.29965191503412e-06, 1.7952653312836e-06, 1.95230398336577e-06, 8.23354205703453e-07, 5.03050853639664e-07, 4.31483873075678e-07, 3.77364633097343e-07, 3.52204935882838e-07],
[0.0377432488700169, 0.0168890924166196, 0.00814784073064168, 0.00385717435001176, 0.00229639939249715, 0.00129005277616101, 0.00101473127997664, 0.000820699717122286, 0.000716602505579367, 0.000608028315656206, 0.000478348185242172, 0.000456327167577264, 0.000416835783278113, 0.000339195645622681, 0.000247739977927708, 0.000243474073081451, 0.000188631870360556, 0.000195140753539214, 0.000173702490234184, 0.000157067429919611, 5.36241216195776e-05, 3.13265607729818e-05, 2.00740308420322e-05, 1.38004500578326e-05, 8.98796004777935e-06, 7.25270803991762e-06, 8.02862173543417e-06, 5.02448145178747e-06],
[0.0402491722922691, 0.0158078882678399, 0.00672125591862027, 0.00310801861697296, 0.00268785808845617, 0.00130980319641805, 0.00107767108901902, 0.000922107501703184, 0.00067483590547246, 0.000546816867944555, 0.000509820132700511, 0.000424589104745854, 0.000316844790925863, 0.000352977588459424, 0.000277098449473545, 0.000241511468120237, 0.00023073647261862, 0.000214833522166558, 0.00016500595560176, 0.00013526621359361, 6.73041395666818e-05, 3.66669814122478e-05, 1.91553990842586e-05, 1.34375449643009e-05, 1.0923040369093e-05, 8.92334753199719e-06, 7.60877995054088e-06, 5.37976455960987e-06],
[0.017016299372816, 0.00411147864966477, 0.0018195729409991, 0.000923656359159697, 0.000639753677453614, 0.000344471376458544, 0.00024305500168964, 0.00023342045332031, 0.000180786800777266, 0.000138371861473141, 0.00011027614950665, 8.64379817804295e-05, 8.38107505125585e-05, 9.2441406474908e-05, 5.75444208794629e-05, 4.96430780314583e-05, 4.9220124007654e-05, 4.81406960672892e-05, 4.29376939232728e-05, 3.85619265756976e-05, 1.53844597097219e-05, 8.77657703934887e-06, 4.17023040300002e-06, 3.75598290824897e-06, 2.9435969592928e-06, 1.63038491285405e-06, 1.34437403631615e-06, 1.0683542113199e-06]
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

var myPlot = document.getElementById('web_error_graph_12');

Plotly.newPlot(myPlot, data, layout);

function initialize()
{
    var layout =
    {
        title: '<b>[-1, 1]<sup>2</sup> Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = x<sub>1</sub>x<sub>2</sub> + cos(x<sub>1</sub>)exp(x<sub>2</sub>)',
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
                y0: 0.1,
                x1: 1e-03,
                y1: 1e-04,
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
                y0: 0.1,
                x1: 1e-03,
                y1: 1e-07,
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
                y0: 0.1,
                x1: 1e-02,
                y1: 1e-07,
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
                y: -4
            },
            {
                text: '2nd order',
                x: -3,
                y: -7
            },
            {
                text: '3rd order',
                ax: 0,
                ay: 0,
                x: -2,
                y: -7
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
