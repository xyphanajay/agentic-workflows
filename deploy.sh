#!/bin/bash

# AgenticFlow Quick Deploy Script for Ubuntu Server
# Usage: ./deploy.sh

set -e  # Exit on any error

echo "🚀 Starting AgenticFlow deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Set project directory
PROJECT_DIR="agentic-workflows"
PORT=${PORT:-8080}

# Clean up existing directory if it exists
if [ -d "$PROJECT_DIR" ]; then
    print_warning "Directory $PROJECT_DIR already exists. Removing..."
    rm -rf "$PROJECT_DIR"
fi

# Clone the repository
print_status "Cloning repository..."
git clone https://github.com/xyphanajay/agentic-workflows.git
cd "$PROJECT_DIR"

# Stop any existing containers
print_status "Stopping any existing containers..."
docker-compose down 2>/dev/null || true

# Build and start the application
print_status "Building and starting AgenticFlow..."
docker-compose up -d --build

# Wait for container to be ready
print_status "Waiting for application to start..."
sleep 5

# Check if container is running
if docker-compose ps | grep -q "Up"; then
    print_status "✅ AgenticFlow is now running!"
    echo -e "${BLUE}🌐 Access your website at: ${GREEN}http://localhost:$PORT${NC}"
    echo -e "${BLUE}🌐 Or access via server IP: ${GREEN}http://$(hostname -I | awk '{print $1}'):$PORT${NC}"
    echo ""
    echo -e "${YELLOW}📊 Container Status:${NC}"
    docker-compose ps
    echo ""
    echo -e "${YELLOW}📝 Logs: ${NC}docker-compose logs -f"
    echo -e "${YELLOW}🛑 Stop: ${NC}docker-compose down"
    echo -e "${YELLOW}🔄 Restart: ${NC}docker-compose restart"
else
    print_error "❌ Failed to start AgenticFlow"
    echo "Container logs:"
    docker-compose logs
    exit 1
fi

# Optional: Show resource usage
echo ""
print_status "Resource Usage:"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" | head -2