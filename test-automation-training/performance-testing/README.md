# Installation #

Ensure pip is installed.
`pip --version`

Ensure python is in path.

Ensure jupyter notebook is installed:
`jupyter --version`

Otherwise run `pip install jupyter` (since notebooks can come in handy I would recommend installing globally instead of within the venv only.)

Create a virtual environment:
`py -m venv venv` 

Activate the venv:
`.\venv\Scripts\activate`
If you get permission errors use a PowerShell with administrator access and execute:
`Set-Executionpolicy RemoteSigned`

Install dependencies: 
`pip install -r requirements.txt`

Continue within the notebook.