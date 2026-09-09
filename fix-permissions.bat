@echo off
REM Grants BUILTIN\Users full control over C:\local recursively and resets read-only attributes.
REM Must be run as Administrator.

net session >nul 2>&1
if %errorLevel% neq 0 (
    echo This script must be run as Administrator.
    echo Right-click this file and select "Run as administrator".
    pause
    exit /b 1
)

echo Removing Read-Only flags on C:\local\angulardev\mywebsite ...
attrib -r "C:\local\angulardev\mywebsite\*.*" /s /d

echo Taking ownership of C:\local ...
takeown /F "C:\local" /R /D Y

echo Resetting ACL permissions on C:\local ...
icacls "C:\local" /reset /T /C

echo Granting Users full control on C:\local ...
icacls "C:\local" /grant "Users:(OI)(CI)F" /T /C

echo Done fixing permissions.
pause
