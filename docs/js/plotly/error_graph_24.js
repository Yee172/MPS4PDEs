var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274932, 0.0222120342891224, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.00495822281742431, 0.000537626117014911, 0.000403952762829229, 0.000261068106903517, 0.000170593551652942, 0.000131632331937581, 0.000127010899908075, 9.44711498138684e-05, 5.0123616780251e-05, 5.31141059634255e-05, 4.44336335154727e-05, 3.39806405655896e-05, 3.41981908229538e-05, 1.98944549050228e-05, 1.74136127213398e-05, 1.77425434904066e-05, 1.63756317768105e-05, 1.34772925228788e-05, 1.19092845694002e-05, 1.2589082330372e-05, 4.37398938490929e-06, 2.92766224940788e-06, 1.76808503793424e-06, 1.39367636875498e-06, 8.40289105408232e-07, 7.51353345540551e-07, 6.2943117551395e-07, 4.59016727072381e-07],
[0.00367405766954865, 0.000825442147578626, 0.000505471045714634, 0.000289289442731544, 0.000167782052021836, 0.000130393984836052, 8.86403049993323e-05, 6.61150719054593e-05, 4.48323619102187e-05, 3.93311320125989e-05, 2.42487440411665e-05, 2.45805604954796e-05, 2.66927883265655e-05, 1.67642759894004e-05, 2.16721020596111e-05, 1.54228867063066e-05, 1.56531997623777e-05, 1.46379201408919e-05, 1.08533546927525e-05, 9.01020925336837e-06, 3.18629858320207e-06, 2.53956321283333e-06, 1.59757023032725e-06, 1.02308372285087e-06, 9.61419515110862e-07, 1.11003577063506e-06, 6.70005177116906e-07, 4.40787066402493e-07],
[0.00827258074808501, 0.00185132686025735, 0.000964104660222009, 0.000389804655466897, 0.000281165604295808, 0.000137051818874356, 0.000165568768598634, 0.000142559726989511, 9.32620394271666e-05, 9.06127293103243e-05, 5.97579804032522e-05, 6.53051503134439e-05, 3.29655494504255e-05, 2.73611262504581e-05, 2.99309716500495e-05, 2.58122389715787e-05, 1.96297214778429e-05, 2.18227315234021e-05, 1.47336036815382e-05, 1.18439324523489e-05, 5.60026141460668e-06, 4.10083927049332e-06, 3.48785199566493e-06, 1.92275134880404e-06, 1.56999213185571e-06, 9.77763418452682e-07, 9.04614207319909e-07, 5.57786162591611e-07],
[0.0129636936467716, 0.0035880534185968, 0.00222818171573946, 0.00167357268563939, 0.000681334615033835, 0.000462173913778563, 0.000300468044250879, 0.000190759807912944, 0.000149618029338772, 0.00013492051822106, 0.00012382834894975, 9.46838362529956e-05, 8.52548239167472e-05, 5.99287620803857e-05, 5.27751265237963e-05, 4.27784272201137e-05, 4.72808189468932e-05, 2.72501151872273e-05, 3.05564867192354e-05, 2.33164966125798e-05, 1.12771859221983e-05, 5.36551757934767e-06, 3.88813776930341e-06, 2.64599830690493e-06, 1.68022297231119e-06, 2.10677190481956e-06, 1.26325650828818e-06, 1.16063176958114e-06],
[0.0151889645785013, 0.00502493781271662, 0.00232210178250658, 0.00145251280531666, 0.000646064192522222, 0.000499838697604393, 0.000322418386991874, 0.000220380805784792, 0.000161496695750274, 0.000124871875204047, 0.000155554487049736, 9.38295098598108e-05, 9.59555134549817e-05, 6.48002702217099e-05, 5.48042845432972e-05, 5.30371545137687e-05, 5.07712331230259e-05, 4.1075157216186e-05, 4.56421539074547e-05, 4.3946217246793e-05, 1.45959288304631e-05, 5.02839904492625e-06, 4.11351363738266e-06, 2.30770720688334e-06, 1.47335693845285e-06, 1.59918790232361e-06, 1.73227310806823e-06, 1.3515422249144e-06],
[0.00429556692385713, 0.00145768954121439, 0.000500325801855217, 0.000287281827618502, 0.000272771906498326, 0.000179104908440086, 0.000143373504853272, 7.65318088313816e-05, 4.44676922979337e-05, 4.91434075442498e-05, 5.62569602269303e-05, 4.66742337907888e-05, 3.38283224809999e-05, 2.57559362006887e-05, 2.5916684037508e-05, 1.69662746880572e-05, 1.74118525091416e-05, 1.52745160639789e-05, 1.68413854431115e-05, 7.55489494741468e-06, 6.52800923162111e-06, 2.08806210566514e-06, 1.76073331759063e-06, 1.75054602236102e-06, 7.14739797569308e-07, 6.69577362666374e-07, 8.03244678992954e-07, 4.12017454376468e-07]
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

var myPlot = document.getElementById('web_error_graph_24');

Plotly.newPlot(myPlot, data, layout, config);

function initialize()
{
    var layout =
    {
        title: '<b>Unit Disk Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = exp(x<sub>1</sub>x<sub>2</sub>)',
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
