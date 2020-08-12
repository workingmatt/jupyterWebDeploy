# Publish a Jupyter Notebook on Heroku

1. Create a local Jupyter notebook
1. Install Voila with `pip install voila`
1. Local test publish with `voila notebookName.ipynb`
1. Create 3 files, requirements.txt, runtime.txt, Procfile. <pre>
	* requirements.txt: `pip freeze > requirements.txt` creates and autofills with all files needed. 
	* runtime.txt: in the form python-x.x.x `python --version` tells you the version number in use.
	* Procfile: `web: voila --port=$PORT --no-browser notebookName.ipynb`</pre>
1. Push to a git repo, create a heroku app, push to heroku
1. Use `heroku domains:add jupyter.example.com`

# Create a virtual environment for Jupyter

`python -m venv venv`
`source venv/bin/activate`
`pip install jupyter numpy matplotlib`
`jupyter notebook`
 
