install jenkins locally
via jenkinsfile?


Ideally every step in your pipeline is a 'quality-gate'. If it doesnt pass the tests/checks in this step then the pipeline is halted and the relevant people are contacted to resolve the issue. 

SonarQube for static code analysis (?) Also has a free package (?)