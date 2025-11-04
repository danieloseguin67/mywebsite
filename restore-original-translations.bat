@echo off
echo Restoring original translations...

REM Check if backup exists
if not exist "c:\local\angulardev\mywebsite\src\assets\i18n\backup\*.json" (
    echo No backup found. Cannot restore original translations.
    pause
    exit /b 1
)

REM Restore original translations
copy "c:\local\angulardev\mywebsite\src\assets\i18n\backup\*.json" "c:\local\angulardev\mywebsite\src\assets\i18n\" > nul

echo Original translations restored!
echo You can delete the backup folder if no longer needed.