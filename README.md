# INST377-FA2020

This is the lab support repository for the Fall 2020 version of INST377. 

### Installation
* Clone this repository into Github Desktop using the large green Code button.
* Open it using the "open this repository in VSCode" button within Github Desktop.
* In VSCode, open a new terminal window by going to the Terminal option and selecting New Terminal.
* Type `npm install` in that window.
* Your labs should now be set up well enough for week one.

### Keeping Up To Date With The Course Repository
* You cannot publish your changes to the course repository.
* Instead, you will need to add a remote to your code base, and publish your work there.

#### Github Pages
So: First, get set up with Github Pages by following the instructions present here: https://pages.github.com/
- "User or Organization site"
- You are using Github Desktop.

#### Back to VSCode ---> This portion is experimental.
In your terminal window, in your INST377 repository (folder):
* type `git remote -v` - this will list all the remote places you can save your code. It should list one: this repo, called "origin"
* type `git remote rename origin classfiles`
* type `git remote -v` and confirm you now have one remote, called "classfiles"
* in Github, find the link to your **Github Pages** repository. It should be something like "https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git"
* type `git remote add origin [THE LINK YOU JUST FOUND]` and hit enter.
* type `git remote -v` and check that you have two possible remote repositories: the course repo, and your Github Pages repo.
* Type `git push origin master --force-with-lease`
    * `--force-with-lease` is like saying "Do it now but don't overwrite any serious local changes."
* You have now **overwritten your Github Pages repository**
* You should be able to check that your labs are visible online by visiting `https://YOUR-GITHUB-USERNAME.github.io/public/lab_1/index.html`
* Changes to your repository should be visible in Github Desktop

#### A Slight Problem: Github Desktop Does Not Like This Situation
It will not let you keep tabs on both remotes at once, there's a four-year-long conversation on the topic available below if you care.
Link For Reference: [Github Desktop supports only one remote](https://github.com/desktop/desktop/issues/1442)

##### How To Update Your Own Remote From The Main Lab Files
You will need to pull from the class repository periodically as we go through the semester, though hopefully not for the first few weeks.
To do this, in VSCode:
* Open a terminal window.
* Type `git pull classfiles master`, and you should have the updated files.
* If it messes with you, which it may do, please join us for office hours and we'll work it out.
