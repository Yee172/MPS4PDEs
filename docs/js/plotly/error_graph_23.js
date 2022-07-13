var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274932, 0.0222120342891224, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.00893966610191453, 0.00128891048488673, 0.000612940074639592, 0.0004697739209832, 0.000320287616660198, 0.000194638073445729, 0.000222922794515206, 0.000175344731011263, 0.00010111437258831, 0.000104519941270629, 8.61235270119524e-05, 5.61099354296404e-05, 6.57494388504912e-05, 3.66059580035401e-05, 2.8575959793456e-05, 3.38048290535988e-05, 2.99695911571659e-05, 2.60247746653114e-05, 2.50987722890915e-05, 2.40937130715712e-05, 8.45927119789373e-06, 5.61802323613715e-06, 3.22064037714661e-06, 2.50423316404814e-06, 1.633014682537e-06, 1.43419983011429e-06, 1.33564363200434e-06, 8.73107064691751e-07],
[0.00580610186681921, 0.00149907141866806, 0.000903118793870589, 0.000488500810027666, 0.000334919254891388, 0.0002606859067172, 0.000156180628178151, 9.96721039644995e-05, 7.51952171598224e-05, 6.41343065159632e-05, 5.28974591684659e-05, 4.35751653216285e-05, 4.54589280746757e-05, 3.05690467145537e-05, 3.76775844797539e-05, 3.06258095545896e-05, 3.23975785315022e-05, 2.59273646549841e-05, 1.87301044669322e-05, 1.45338288163859e-05, 6.07702829935754e-06, 4.40982353328533e-06, 3.13063731721729e-06, 1.87776276797803e-06, 1.55816872304555e-06, 1.78812043977183e-06, 1.27294220460592e-06, 8.41206900085729e-07],
[0.0124666801803243, 0.00291394483949471, 0.00145896135986766, 0.00056665171311641, 0.000364768222843766, 0.00018526270173469, 0.000223894654702284, 0.000215094391863303, 0.000140418726573431, 0.00014270216880554, 9.54783508243164e-05, 0.000101240746127701, 4.88562392560059e-05, 3.77601335586218e-05, 4.28576045324425e-05, 3.69362048291387e-05, 3.00303542716195e-05, 3.35590541580881e-05, 2.19531113188522e-05, 1.70846118447299e-05, 8.64227114970935e-06, 6.33377094891865e-06, 5.41546670361268e-06, 2.85922952165618e-06, 2.09418663609008e-06, 1.44946860420586e-06, 1.39678651207738e-06, 8.04824300386061e-07],
[0.0140147008489957, 0.00295757467794881, 0.0019185470433179, 0.000942723229298233, 0.000615489238669917, 0.000235488567353573, 0.000151668750356909, 0.00013467590164034, 0.000143931662827869, 9.42516608304148e-05, 6.5039925295135e-05, 8.46370271057753e-05, 5.51014257681781e-05, 5.29477673433211e-05, 3.47645096168995e-05, 3.64517718081919e-05, 2.30561814169583e-05, 2.36407235797362e-05, 2.35864879983578e-05, 2.03808256776928e-05, 6.18468779663454e-06, 4.72705623339289e-06, 2.7826022825847e-06, 1.80731876438418e-06, 1.14452095466683e-06, 1.13502017973395e-06, 1.35704477123664e-06, 9.78941770559544e-07],
[0.0105856691976193, 0.00306615092050239, 0.00284474609667022, 0.000780033890200157, 0.000529132884150608, 0.000310458525356144, 0.000211179808914087, 0.000124856067606264, 0.000119500497275753, 8.83958982992457e-05, 8.81213266151534e-05, 6.69386752283463e-05, 6.01521242845483e-05, 3.85002970109516e-05, 4.71778628417981e-05, 3.72161301229728e-05, 2.55844063213953e-05, 2.68680925831757e-05, 2.05508358933977e-05, 2.35505078989668e-05, 8.62414799989667e-06, 3.23820710949364e-06, 2.24883055135842e-06, 1.65064279551708e-06, 1.33700583537528e-06, 1.28060800259552e-06, 1.31636987117461e-06, 1.09883445529799e-06],
[0.00982381902414962, 0.00186796662940133, 0.000810063973917358, 0.000509520804774502, 0.00026231804288164, 0.00022681906945749, 0.000172225213086465, 0.00011213140439021, 9.45037920902433e-05, 4.93953267528685e-05, 5.99342504856823e-05, 5.40906326161827e-05, 4.51504378151859e-05, 3.59764460629609e-05, 2.8677822334424e-05, 3.04318355440029e-05, 2.69786953506698e-05, 2.81576675341306e-05, 3.25141059463394e-05, 1.61126195216132e-05, 7.82400941581538e-06, 4.12791030016449e-06, 3.3953880286485e-06, 2.92186009391571e-06, 7.75832106614249e-07, 9.86242325084173e-07, 1.00351784908075e-06, 6.47159083684914e-07]
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

var myPlot = document.getElementById('web_error_graph_23');

Plotly.newPlot(myPlot, data, layout);

function initialize()
{
    var layout =
    {
        title: '<b>Unit Disk Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = (x<sub>1</sub>x<sub>2</sub>)<sup>2</sup>',
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