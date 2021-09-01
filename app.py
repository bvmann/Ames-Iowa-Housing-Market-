# stephen.peters@gmail.com
# Final Project
# Data Analytics Bootcamp, spring 2021

# let's make an API with Flask
from flask import Flask, jsonify, render_template, request, redirect, url_for 
import numpy as np
import pandas as pd
import datetime as dt
import joblib

# log some things to the shell console
print('Hello Friendly User!')

model = joblib.load("random_forest.joblib")

pre_cols = ['MSSubClass',
 'LotFrontage',
 'HouseStyle',
 'OverallCond',
 'Exterior1st',
 'Exterior2nd',
 'MasVnrType',
 'MasVnrArea',
 'Foundation',
 'BsmtQual',
 'BsmtFinType1',
 'HeatingQC',
 'BsmtFullBath',
 'BedroomAbvGr',
 'KitchenQual',
 'Fireplaces',
 'FireplaceQu',
 'GarageType',
 'GarageFinish',
 'outdoorAreaSF']
input_cols = ['YearBuilt','FullBath','TotRmsAbvGrd','GrLivArea','TotalBsmtSF','GarageCars','GarageArea','LotArea','Neighborhood','OverallQual']
pre_values = [20.0,
 90.4186046511628,
 2.0,
 5.0,
 11.0,
 13.0,
 2.0,
 0.0,
 2.0,
 3.0,
 5.0,
 0.0,
 0.0,
 3.0,
 3.0,
 0.0,
 5.0,
 1.0,
 2.0,
 0.0]

# setup our Flask app
app = Flask(__name__)

# create index route
@app.route("/")
def home():
  return render_template("index.html")

@app.route('/start')
def home2(): 
    return render_template("predict_.html")

@app.route('/predict', methods = ['POST'])
def predict(): 
    input = [x for x in request.form.values()]
    features = pre_values + input
    final = np.array(features)
    cols = pre_cols + input_cols
    data = pd.DataFrame([final], columns = cols)

    prediction = model.predict(data).round() 
   
    return render_template('predict_.html', pred = "Expected home value {}".format(prediction))

@app.route("/charts")
def chartspage():
  return render_template("charts_index.html") 

@app.route("/static1")
def staticpage():
  return render_template("static-page.html")    
 
  
if __name__ == "__main__":
  app.run(debug=True)  
  
  
