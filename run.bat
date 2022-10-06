@echo off
for /d /r %%G IN (conf.js) do (
IF EXIST %%G (
echo  Test Case Started %%G
protractor %%G
echo Test Case Ended
)
)

	
	
