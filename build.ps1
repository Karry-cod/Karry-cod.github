Write-Host "Migrating..."

# # 将打包文件迁移到预览包中
Copy-Item -Path "./dist/*" -Destination "../blog-preview" -Recurse -Force

Write-Host "Migrate Completed!"

# 执行上传脚本，确保路径正确
. "../blog-preview/upload.ps1"