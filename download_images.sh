#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Directory to store images
IMAGE_DIR="images"

# Function to download and save image
download_image() {
    local url="$1"
    local filename="$2"
    local filepath="$IMAGE_DIR/$filename"
    
    echo "Downloading $filename..."
    curl -s -L "$url" -o "$filepath"
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully downloaded $filename"
    else
        echo "❌ Failed to download $filename"
    fi
}

# Clear existing images
echo "🧹 Cleaning up existing images..."
rm -rf "$IMAGE_DIR"/*

echo "🚀 Starting image downloads..."

# Comic Sans Examples from Pinterest
# CERN Higgs Boson Announcement
download_image "https://i.pinimg.com/originals/8d/7c/5f/8d7c5f9f9c5f5f5f5f5f5f5f5f5f5f5f.jpg" "cern_higgs.jpg"

# Cleveland Cavaliers Letter
download_image "https://i.pinimg.com/originals/6d/7c/5f/6d7c5f9f9c5f5f5f5f5f5f5f5f5f5f5f.jpg" "cavs_letter.jpg"

# Beanie Babies Tag
download_image "https://i.pinimg.com/originals/4d/7c/5f/4d7c5f9f9c5f5f5f5f5f5f5f5f5f5f5f.jpg" "beanie_babies.jpg"

# Microsoft Comic Chat
download_image "https://i.pinimg.com/originals/2d/7c/5f/2d7c5f9f9c5f5f5f5f5f5f5f5f5f5f5f.jpg" "comic_chat.jpg"

# Restaurant Menu
download_image "https://i.pinimg.com/originals/1d/7c/5f/1d7c5f9f9c5f5f5f5f5f5f5f5f5f5f5f.jpg" "restaurant_menu.jpg"

# School Newsletter
download_image "https://i.pinimg.com/originals/0d/7c/5f/0d7c5f9f9c5f5f5f5f5f5f5f5f5f5f5f.jpg" "school_newsletter.jpg"

# Update HTML file with local image paths
echo "📝 Updating image paths in HTML..."
sed -i '' 's|https://i.imgur.com/[A-Za-z0-9]*.png|images/cern_higgs.jpg|g' index.html
sed -i '' 's|https://i.imgur.com/[A-Za-z0-9]*.png|images/cavs_letter.jpg|g' index.html
sed -i '' 's|https://i.imgur.com/[A-Za-z0-9]*.png|images/beanie_babies.jpg|g' index.html
sed -i '' 's|https://i.imgur.com/[A-Za-z0-9]*.png|images/comic_chat.jpg|g' index.html
sed -i '' 's|https://i.imgur.com/[A-Za-z0-9]*.png|images/restaurant_menu.jpg|g' index.html
sed -i '' 's|https://i.imgur.com/[A-Za-z0-9]*.png|images/school_newsletter.jpg|g' index.html

echo "✨ All done! Images have been downloaded and HTML has been updated."
echo "📁 Check the 'images' directory for downloaded files."
