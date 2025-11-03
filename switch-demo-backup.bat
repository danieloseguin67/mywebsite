@echo off
echo Demo Translation Switcher (Using Backup Files)
echo ===============================================
echo.
echo 1. Restaurant Demo ("The Gourmet Bistro")
echo 2. Manufacturing Demo ("Manufacturing Excellence")
echo 3. Church Demo ("Catholic Parish") 
echo 4. Service Demo ("Service Business")
echo.
set /p choice="Select demo type (1-4): "

if "%choice%"=="1" (
    echo Switching to Restaurant translations...
    copy "src\assets\i18n-restaurant\en.json" "src\assets\i18n\en.json" > nul
    copy "src\assets\i18n-restaurant\es.json" "src\assets\i18n\es.json" > nul
    copy "src\assets\i18n-restaurant\fr.json" "src\assets\i18n\fr.json" > nul
    echo Restaurant translations activated! ("The Gourmet Bistro")
)
if "%choice%"=="2" (
    echo Switching to Manufacturing translations...
    copy "src\assets\i18n-manufacturing\en.json" "src\assets\i18n\en.json" > nul
    copy "src\assets\i18n-manufacturing\es.json" "src\assets\i18n\es.json" > nul
    copy "src\assets\i18n-manufacturing\fr.json" "src\assets\i18n\fr.json" > nul
    echo Manufacturing translations activated! ("Manufacturing Excellence")
)
if "%choice%"=="3" (
    echo Switching to Church translations...
    copy "src\assets\i18n-church\en.json" "src\assets\i18n\en.json" > nul
    copy "src\assets\i18n-church\es.json" "src\assets\i18n\es.json" > nul
    copy "src\assets\i18n-church\fr.json" "src\assets\i18n\fr.json" > nul
    echo Church translations activated! ("Catholic Parish")
)
if "%choice%"=="4" (
    echo Switching to Service translations...
    copy "src\assets\i18n-service\en.json" "src\assets\i18n\en.json" > nul
    copy "src\assets\i18n-service\es.json" "src\assets\i18n\es.json" > nul
    copy "src\assets\i18n-service\fr.json" "src\assets\i18n\fr.json" > nul
    echo Service translations activated! ("Service Business")
)

echo.
echo Translation switch complete! 
echo Clear your browser cache and refresh the demo websites to see the changes.
echo.
pause