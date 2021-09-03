from flask import Flask, jsonify, render_template, request, redirect, url_for 
import joblib
import pandas as pd 
import numpy as np 


app = Flask(__name__)

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
@app.route('/')
def home(): 
    return render_template("predict_.html")

@app.route('/predict', methods = ['POST'])
def predict(): 
    input = [x for x in request.form.values()]
    features = pre_values + input
    final = np.array(features)
    cols = pre_cols + input_cols
    data = pd.DataFrame([final], columns = cols)

    prediction = int(model.predict(data).round()[0])   

    return render_template('predict_.html', pred = f"Expected home value ${'{:,}'.format(prediction)}")
   

if __name__ == '__main__':
    app.run(debug=True)
