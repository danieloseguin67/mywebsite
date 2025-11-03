@echo off
echo Demo Translation Switcher
echo ========================
echo.
echo 1. Restaurant Demo
echo 2. Manufacturing Demo  
echo 3. Church Demo
echo 4. Service Demo
echo.
set /p choice="Select demo type (1-4): "

if "%choice%"=="1" (
    echo Switching to Restaurant translations...
    xcopy "src\app\components\demo\restaurant\assets\i18n\*" "src\assets\i18n\" /Y > nul
    echo Restaurant translations activated!
)
if "%choice%"=="2" (
    echo Switching to Manufacturing translations...
    xcopy "src\app\components\demo\manufacturing\assets\i18n\*" "src\assets\i18n\" /Y > nul
    echo Manufacturing translations activated!
)
if "%choice%"=="3" (
    echo Switching to Church translations...
    xcopy "src\app\components\demo\church\assets\i18n\*" "src\assets\i18n\" /Y > nul
    echo Church translations activated!
)
if "%choice%"=="4" (
    echo Switching to Service translations...
    xcopy "src\app\components\demo\service\assets\i18n\*" "src\assets\i18n\" /Y > nul
    echo Service translations activated!
)

echo.
echo Translation switch complete! Open the demo website to see the changes.
pause