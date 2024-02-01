# Installation #

Ensure Python is installed. I have found python to use various keywords to execute it from the command prompt, but one of these should work:
`py --version`
`py3 --version`
`python --version`
`python3 --version`

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


# use
`locust -f path.py`


save to csv:
`locust -f path.py --csv {name}`

headless:
`locust -f path.py --headless -u {#users} -r {spawn-rate}`
runtime in headless `--run-time 60` default in secs (can do `1h30m`)