# About # 
Short introduction to git.

NOTE: Implement via notebook?

## Branches

Ideally, we would create a new branch for every feature we implement. Say, for our current app, we have the login functionality implemented
but we want to also incorporate users changing their password. In order to prevent breaking changes on our main branch we will create a new
branch using `git branch {branchName}`. This branch will track any new changes you make to the code. Change to this branch by executing
`git checkout {branchName}`.

The main benefit of this is that if you are isolating your code, so if you make any mistakes which are only later identified, then the normal
functionality of your project is not broken.

If you do succesfully implement your feature and want to integrate this in to your main branch you can do this in varying ways. The first step
will always be to `git add` the changed files you want to integrate. After this you commit these changes. If you are on your main branch to begin
with you can push this to your repository directly. This is however, not a very great way to do this as it can lead to defects pretty easily.

A better way to do this would be to merge your branch. You can either do this from your command line (`git checkout main` && `git merge {branchName}` && `git commit -m "merged {branchName}"`) and push `git push` it to the remote repository afterwards,
which is also not the best way: or create a pull request of your branch from your foreign respisotry. This way you can add reviewers so collaborators
can review your changes. If they think it is okay they can approve the changes and merge the branches from the remote repository.

Note: although merging will combine the code, the branch you merged will remain and if you want to delete this this has to be deleted manually (`git branch {branchName} -d`).


# Requirements # 
Git installed
Github account