$registry = "registry.wimiip.eu"

# Building and pushing back-end
Write-Host "Building and pushing back-end image..."
docker build -t neuromet/front -f Dockerfile .
docker tag neuromet/front $registry/neuromet/front:latest
docker push $registry/neuromet/front:latest

Write-Host "Images pushed successfully"
