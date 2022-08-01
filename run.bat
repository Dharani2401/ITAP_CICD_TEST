@echo off
For /d /R %%G IN (conf.js) do (
	IF EXIST %%G (
		echo  Test Case Started %%G
		protractor %%G
		echo Test Case Ended
	)
)
	
	
