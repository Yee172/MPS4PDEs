var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274933, 0.0222142151300385, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.532196729952306, 0.0578136352284621, 0.0441945181899315, 0.0274761797598311, 0.0205283069990205, 0.0107288052516559, 0.00635733479950318, 0.00457829279596123, 0.00466049670348756, 0.00316570822359719, 0.0026815078163791, 0.00219125057373937, 0.00187053641281087, 0.00163037261956944, 0.00160835799167636, 0.00130053817427389, 0.00113133937212662, 0.00092058862808031, 0.000798623738038629, 0.000842143401502682, 0.000330701593088456, 0.000166747846041204, 0.000143040607409439, 0.000118422509312488, 8.7927120631548e-05, 5.17076560511143e-05, 3.95651033189282e-05, 3.09677529211072e-05],
[0.467679271489857, 0.0725640946400105, 0.0463633429424112, 0.0252244083934945, 0.0205054109187834, 0.0109131125705275, 0.00853425270646913, 0.00600978874903169, 0.00509551423507704, 0.00351178297901145, 0.00340773908455727, 0.00245330389487375, 0.00194333611213171, 0.00161841329438595, 0.00166937296779679, 0.00129665905118248, 0.00130653756413124, 0.0013054903639822, 0.00126709114648049, 0.00128790670806778, 0.000356106698963465, 0.000163487309421839, 0.000146974482544415, 0.000107465874020107, 8.41857271032254e-05, 6.26148387546932e-05, 4.21229122915534e-05, 3.20381245606516e-05],
[0.633342896842903, 0.150656428357858, 0.0975689999948437, 0.047604453394233, 0.0265278117510466, 0.0198534175577256, 0.0152566348554266, 0.0110824188006839, 0.0076999572510672, 0.0094170155545239, 0.0059246217907658, 0.00489484130607981, 0.00373835786848886, 0.00362640095677236, 0.00381953516629707, 0.00263954139288225, 0.002771298700325, 0.00230429976819924, 0.0021608829800579, 0.00236223202992214, 0.000811219268253005, 0.000560404535738357, 0.000273361563770891, 0.000198323578709747, 0.000145860111283924, 9.98065952302341e-05, 7.46150278603253e-05, 8.16622912473974e-05],
[1.12047207780175, 0.301137956277438, 0.134232564720814, 0.115967079338686, 0.0615120468775014, 0.0389408159573232, 0.0315216082934366, 0.0312601891288455, 0.0197315787675212, 0.0159935157180771, 0.0117067931639641, 0.0116152086708512, 0.00853424498001409, 0.00925563019539943, 0.00789180531771816, 0.00534026722809244, 0.00512677140358975, 0.00426758711668818, 0.00417902238183121, 0.00354961672066434, 0.00158877969473803, 0.00105901345512027, 0.000778792317826849, 0.000391908202216129, 0.000257052269174274, 0.000275998351320972, 0.00021823393601661, 0.000185129892452451],
[5.4528489395251, 1.53310428056222, 0.776073804764142, 0.415559264307627, 0.259674144590963, 0.225317056524972, 0.226104515456186, 0.159425133634821, 0.134384590971655, 0.102199857241837, 0.0615203747453998, 0.0587067321837749, 0.0490847336351932, 0.0373570841165085, 0.0422663977656645, 0.0359263300991, 0.0293269946913304, 0.0264390890453132, 0.0209178699118997, 0.0209423663899218, 0.00886908118485241, 0.00518655652262412, 0.00282465745324512, 0.00211020149361119, 0.00129633815179542, 0.00118810878760112, 0.00107008241243367, 0.000818635162453507],
[6.474578935465, 1.74128578293502, 0.626298699299243, 0.488159870174862, 0.325896821087021, 0.236721708148858, 0.228427507215523, 0.142800827524901, 0.108945158333805, 0.0916030033331063, 0.0521278021821567, 0.0423344154946044, 0.0567676099967285, 0.0370401641700147, 0.0329370136414475, 0.0307489343673009, 0.0298412122463239, 0.0234116405034364, 0.0180171546006402, 0.0197273733504153, 0.00716160501356988, 0.00473650667786263, 0.00285254368462695, 0.00213076848450244, 0.00117695171748267, 0.00107171923417138, 0.00100453589155602, 0.000817498461751498]
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

var myPlot = document.getElementById('web_error_graph_2');

Plotly.newPlot(myPlot, data, layout);

function initialize()
{
    var layout =
    {
        title: '<b>Unit Disk Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = (x<sub>1</sub> + x<sub>2</sub>)<sup>4</sup>cos(x<sub>1</sub>(x<sub>1</sub> + 2x<sub>2</sub>))',
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
                y0: 10,
                x1: 1e-03,
                y1: 1e-02,
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
                y0: 10,
                x1: 1e-03,
                y1: 1e-05,
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
                y0: 10,
                x1: 1e-02,
                y1: 1e-05,
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
                y: -2
            },
            {
                text: '2nd order',
                x: -3,
                y: -5
            },
            {
                text: '3rd order',
                ax: 0,
                ay: 0,
                x: -2,
                y: -5
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
