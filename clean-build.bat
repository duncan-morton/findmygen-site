@echo off
echo Cleaning Next.js build cache...
if exist .next (
    rmdir /s /q .next
    echo .next directory removed
)
if exist node_modules\.cache (
    rmdir /s /q node_modules\.cache
    echo node_modules\.cache removed
)
echo Build cache cleared successfully!
echo You can now run: npm run build
