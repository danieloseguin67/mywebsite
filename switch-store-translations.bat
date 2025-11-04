@echo off
echo Switching to Store Demo translations...

REM Backup current translations
if not exist "c:\local\angulardev\mywebsite\src\assets\i18n\backup" mkdir "c:\local\angulardev\mywebsite\src\assets\i18n\backup"
copy "c:\local\angulardev\mywebsite\src\assets\i18n\*.json" "c:\local\angulardev\mywebsite\src\assets\i18n\backup\" > nul

REM Copy store translations
copy "c:\local\angulardev\mywebsite\src\assets\demos\store\assets\i18n\*.json" "c:\local\angulardev\mywebsite\src\assets\i18n\" > nul

echo Store Demo translations activated!
echo To restore original translations, run switch-demo-translations.bat again or manually restore from backup folder.