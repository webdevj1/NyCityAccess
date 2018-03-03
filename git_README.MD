...
webdevjs-MacBook-Pro:NyCityAccess webdevj$ ls
README.MD
webdevjs-MacBook-Pro:NyCityAccess webdevj$ git checkout -b testBranch
Switched to a new branch 'testBranch'
webdevjs-MacBook-Pro:NyCityAccess webdevj$ git status
On branch testBranch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.MD

no changes added to commit (use "git add" and/or "git commit -a")
webdevjs-MacBook-Pro:NyCityAccess webdevj$ git add .
webdevjs-MacBook-Pro:NyCityAccess webdevj$ git status
On branch testBranch
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.MD

webdevjs-MacBook-Pro:NyCityAccess webdevj$ git push origin testBranch