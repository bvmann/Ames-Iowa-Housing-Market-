# Final-Project-Ames-Iowa-Property-Learning

# Kaggle Project

This is a Kaggle challenge we did for University of Oregon Data Analytics Bootcamp as our final group project. The original project challenge can be found here: https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data  The purpose of the challenge was to complete a machine learning model using either R or Python to predict housing prices in Ames,Iowa using 79 different variables. This data was collected by Dean DeCook of Truman State University and included 2390 observations of houses sold between 2006 and 2010. 

We have deployed this Heroku app to create a website which gives statistics on housing prices in the city of Ames, Iowa as well as hosting a machine-learning model that predicts housing prices. We hope this tool will provide valuable insights into general housing trends and the city of Ames specifically. 

Sales data is broken down on the Charts page by zoning, neighborhood and other factors, illustrating the influence of different factors on median housing price and filling in the data using D3. The Predictions page uses user input to make a prediction on a hypothetical sale. All the data is stored locally to the repo on CSV’s, as well as in an SQLite database.

## To see this on our Heroku app visit:
https://oregondataviz-predicting-price.herokuapp.com/

### To run this locally
## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed >= python 3.6
* You have installed a python virtial environment management tool
    i.e. `conda` or `pyenv`

## Quickstart

To run this application locally use the following steps:

* clone repo

* create and activate your python virtual environment

    ```
    conda activate <your_env_name>
    ```
* upgrade pip

    ```
    pip install --upgrade pip
    ```

* install dependencies

    ```
    pip install -r requirements.txt
    ```

* run flask app

    ```
    sh run.sh
    ```

## Contributors

Thanks to the following people who have contributed to this project:

* [@Bvmann] (https://github.com/bvmann) - Cleaned Data and Machine learning using Python master.
* [@stephenbpeters] (https://github.com/stephenbpeters) - Heroku manager, merger of HTML and Flask App.
* [@mgfogerson] (https://github.com/mgfogerson) - Interactive D3 graph Maker along with Analysis and CSS.
* [@HollyHeredia] (https://github.com/HollyHeredia) - Cleaned Data, made SQL databases, Git merger, documentation manager.
