Error 1:
```
$ git push heroku master
fatal: 'heroku' does not appear to be a git repository
fatal: Could not read from remote repository.
```

ran $ heroku git:remote -a findapet2 successfully, and then got error 2.

Error 2:
```
$ git push heroku master
Counting objects: 1163, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (1129/1129), done.
Writing objects: 100% (1163/1163), 552.28 KiB | 0 bytes/s, done.
Total 1163 (delta 686), reused 14 (delta 3)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote:  !     No default language could be detected for this app.
remote: 			HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
remote: 			See https://devcenter.heroku.com/articles/buildpacks
remote: 
remote:  !     Push failed
remote: Verifying deploy...
remote: 
remote: !	Push rejected to findapet2.
remote: 
To https://git.heroku.com/findapet2.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/findapet2.git'
```

