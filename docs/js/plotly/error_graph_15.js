var fill_distance = [0.198983854587716, 0.0998705812472178, 0.0666408526555842, 0.0499910849999656, 0.0399982806717673, 0.0333321068124764, 0.0285696201019069, 0.0249919930274933, 0.0222142151300385, 0.0199999963261506, 0.0181812956477009, 0.0166651641450463, 0.015384328963273, 0.0142856175244916, 0.0133326387907105, 0.0124986840340357, 0.0117645043173365, 0.0111102401232889, 0.0105261748821938, 0.00999921217628962, 0.00666657614059933, 0.00499998131875709, 0.00399999800442724, 0.00333331174692903, 0.0028571421843815, 0.00249999897088586, 0.00222222129568555, 0.00199999219026464];
var error =
[
[0.0181106271826466, 0.00311172879832944, 0.00140679145194136, 0.000656360406313977, 0.000374963197706479, 0.00034229670912922, 0.00021604436991865, 0.000155067423942973, 0.000149977767411116, 0.000132215978653372, 8.40828622060419e-05, 6.56162071439037e-05, 7.73190138195212e-05, 5.77363963207289e-05, 4.21726328466709e-05, 4.57461693451622e-05, 3.54328912584023e-05, 3.26589805561828e-05, 3.0089098890157e-05, 3.40916198444119e-05, 1.53115091674205e-05, 5.70260529882127e-06, 5.26829885055813e-06, 3.17129569551988e-06, 2.01124458860946e-06, 1.15484371399077e-06, 1.18428298878648e-06, 1.0173192471763e-06],
[0.014655512218883, 0.00308265160812743, 0.00137706145965272, 0.000712732579495175, 0.000507678835794181, 0.000345576692965699, 0.000231041486793426, 0.000178888524610656, 0.000151037641209939, 0.000111778507535729, 9.98283337439176e-05, 8.5407250400793e-05, 8.80380331816366e-05, 5.8262070161838e-05, 4.59285612236515e-05, 5.43219507669335e-05, 3.13316796548141e-05, 3.75509056889239e-05, 3.62883489803956e-05, 3.89716912153337e-05, 1.58661428613094e-05, 4.99353978930528e-06, 4.1867777260951e-06, 3.30775770190916e-06, 2.39765645307366e-06, 2.02053616771281e-06, 1.46093803576886e-06, 1.11116993710414e-06],
[0.0212035981475252, 0.00498898353913863, 0.00324940777783106, 0.00155094232122205, 0.00100847655782485, 0.000619393205295721, 0.000391019271139971, 0.000440462548825404, 0.000256859383769618, 0.000258783675129541, 0.000155147954703016, 0.000172688163369183, 0.000117156761622259, 0.000100275498292397, 0.000110953994915924, 9.84263126464976e-05, 6.82956613185307e-05, 5.9903099640754e-05, 5.24887798020526e-05, 5.64165382664489e-05, 1.71058120851941e-05, 1.39779543856799e-05, 1.08885570952871e-05, 6.93580505138278e-06, 5.66092105824811e-06, 3.69842572126022e-06, 2.76633776869623e-06, 2.74033746290592e-06],
[0.142067867409127, 0.0337968203222294, 0.01115726816551, 0.0102780469226275, 0.00327601228182561, 0.00305857845306927, 0.001404400022419, 0.00203198731341595, 0.000818944065621063, 0.00121097125189994, 0.000657084355919907, 0.000704276275046167, 0.000473619662524693, 0.00059588523951257, 0.000277760778125406, 0.000276170748954588, 0.000341208927090644, 0.000254457721666622, 0.000240451744080793, 0.000194679380917523, 6.97036921521853e-05, 5.42841665068785e-05, 3.28799125735926e-05, 2.16656522255623e-05, 1.12845534279531e-05, 1.24807480503387e-05, 8.02638677112333e-06, 5.10530974734066e-06],
[0.12373732757373, 0.0525927075103476, 0.0164965458738324, 0.0148185077533564, 0.00429774745873834, 0.00248156491149935, 0.00195373865760079, 0.00175975423470512, 0.00138686927962914, 0.00163234864951751, 0.000933555535933781, 0.000566083520191427, 0.000551308081409877, 0.000522778702523043, 0.000570055813214062, 0.000286509458733097, 0.000373369548262787, 0.000376498725763478, 0.000407643264495012, 0.0002328456765525, 7.82009623879545e-05, 5.33065896705515e-05, 2.6837824185232e-05, 1.89241866084475e-05, 1.53063660390321e-05, 1.1726848601179e-05, 1.16406883629804e-05, 8.00654618979496e-06],
[0.0274188988384449, 0.00864124554130473, 0.00205872340694526, 0.00114271373028829, 0.000885232011062886, 0.000656919922153684, 0.000459604889316987, 0.000331515489644371, 0.000255931456146132, 0.000261374141673681, 0.000193937335764413, 0.000135094456747725, 0.000117826405738765, 0.000139074840554611, 0.000130352199619981, 9.93282607271023e-05, 8.33878448471687e-05, 7.45015906657431e-05, 5.48791610390734e-05, 5.7439987685203e-05, 2.40356995956231e-05, 1.55899610329024e-05, 7.99473230792729e-06, 5.07875031063518e-06, 3.52406954245987e-06, 1.71266425585959e-06, 1.92649715690697e-06, 1.24145861435387e-06]
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

var myPlot = document.getElementById('web_error_graph_15');

Plotly.newPlot(myPlot, data, layout, config);

function initialize()
{
    var layout =
    {
        title: '<b>[-1, 1]<sup>2</sup> Domain</b><br>d = 2, p = 2<br>u(x<sub>1</sub>, x<sub>2</sub>) = (x<sub>1</sub>x<sub>2</sub>)<sup>3</sup>',
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
