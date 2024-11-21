#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    echo -e "${GREEN}==>${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}WARNING:${NC} $1"
}

print_error() {
    echo -e "${RED}ERROR:${NC} $1"
}

# Function to check if command was successful
check_status() {
    if [ $? -eq 0 ]; then
        print_message "$1 ✅"
    else
        print_error "$2 ❌"
        exit 1
    fi
}

# Main update process
print_message "Starting GitHub update process..."

# 1. Add all changes
print_message "Adding changes to git..."
git add .
check_status "Changes added successfully" "Failed to add changes"

# 2. Prompt for commit message
echo -n -e "${GREEN}Enter commit message:${NC} "
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update site content"
    print_warning "No commit message provided, using default: '$commit_message'"
fi

# 3. Commit changes
print_message "Committing changes..."
git commit -m "$commit_message"
check_status "Changes committed successfully" "Failed to commit changes"

# 4. Push to main branch
print_message "Pushing to main branch..."
git push origin main
check_status "Main branch updated successfully" "Failed to push to main branch"

# 5. Switch to gh-pages branch
print_message "Switching to gh-pages branch..."
git checkout gh-pages
check_status "Switched to gh-pages branch" "Failed to switch to gh-pages branch"

# 6. Merge changes from main
print_message "Merging changes from main branch..."
git merge main
check_status "Changes merged successfully" "Failed to merge changes"

# 7. Push to gh-pages branch
print_message "Pushing to gh-pages branch..."
git push origin gh-pages
check_status "Gh-pages branch updated successfully" "Failed to push to gh-pages branch"

# 8. Switch back to main branch
print_message "Switching back to main branch..."
git checkout main
check_status "Switched back to main branch" "Failed to switch back to main branch"

print_message "🎉 GitHub update completed successfully! 🎉"
print_message "Main repository: https://github.com/artemsvit/Story-of-Comic-Sans"
print_message "Live site: https://artemsvit.github.io/Story-of-Comic-Sans/"
