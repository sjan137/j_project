#dash_html_components - html 작업 관련
# https://dash.plotly.com/dash-html-components

# dash_core_components - 
# https://dash.plotly.com/dash-core-components

# plotly.express - 그래프 관련
# https://plotly.com/python/plotly-express/


# plotly + dash + pandas
import plotly.express as px

import dash
import dash_core_components as dcc
import dash_html_components as html

import pandas as pd


df = pd.read_excel('E:/ASJ/AS_J(SW)/MyProjects/j_projects/yeardream/19-01~21-10.xlsx')

fig = px.line(#그래프 종류 정할 수 있음
    df, x="연도", y="관객수")

fig.show()
fig.write_html('movie.html')

'''
app = dash.Dash()
app.layout = html.Div([
    
    html.H1('dash_html_components'),
    html.Div([
        html.H3('Hello Dash'),
        html.P('Dash converts Python classes into HTML'),
        html.P("This conversion happens behind the scenes by Dash's JavaScript front-end")
    ]),
    
    html.H1('Graph'),
    dcc.Graph(figure=fig),
    
    html.Div([
    html.H1('dash_core_components'),
    dcc.RangeSlider(
        marks={i: 'Label{}'.format(i) for i in range(-5, 7)},
        min=-5,
        max=6,
        value=[-3, 4]
    ),
    dcc.Checklist(
        options=[
            {'label': 'New York City', 'value': 'NYC'},
            {'label': 'Montréal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'}
        ],
        value=['MTL', 'SF'],
        labelStyle={'display': 'inline-block'}
    )
    ])
    
])

app.run_server(debug=True, use_reloader=False)  # Turn off reloader if inside Jupyter'''