@echo off
SET PATH=%PATH%;%~dp0
"%~dp0..\..\packages\Iojs.1.3.0\iojs.exe" %*
