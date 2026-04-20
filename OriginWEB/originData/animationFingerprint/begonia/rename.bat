@echo off

echo Dang copy va dat ten file...

rem Loop tu 0 den 59
for /l %%i in (0,1,59) do (
    if exist begonia_%%i.png (
        echo begonia_%%i.png --> kgd_fingerprint_element_%%i.png
        copy "begonia_%%i.png" "kgd_fingerprint_element_%%i.png" >nul
    )
)

echo Xong!
pause
