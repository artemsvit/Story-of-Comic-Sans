import requests
import os
import json
from urllib.parse import quote_plus

def get_pinterest_images(query, num_images=1):
    # Pinterest API endpoint
    base_url = "https://www.pinterest.com/resource/BaseSearchResource/get/"
    
    # Search parameters
    search_query = quote_plus(query)
    
    # Headers to mimic browser request
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
    
    # Parameters for the API request
    params = {
        'source_url': f'/search/pins/?q={search_query}',
        'data': json.dumps({
            "options": {
                "query": query,
                "scope": "pins",
                "filters": None
            },
            "context": {}
        })
    }
    
    try:
        response = requests.get(base_url, headers=headers, params=params)
        data = response.json()
        
        # Extract image URLs from response
        pins = data['resource_response']['data']['results']
        image_urls = []
        
        for pin in pins[:num_images]:
            if 'images' in pin:
                image_urls.append(pin['images']['orig']['url'])
        
        return image_urls
    
    except Exception as e:
        print(f"Error fetching images: {e}")
        return []

def download_image(url, filename):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error downloading image: {e}")
    return False

def main():
    # Create images directory if it doesn't exist
    os.makedirs('images', exist_ok=True)
    
    # Search queries for different examples
    searches = {
        'cern_higgs.jpg': 'CERN Higgs boson comic sans presentation',
        'cavs_letter.jpg': 'Cleveland Cavaliers Dan Gilbert comic sans letter',
        'beanie_babies.jpg': 'Beanie Babies tag comic sans',
        'comic_chat.jpg': 'Microsoft Comic Chat 1996',
        'restaurant_menu.jpg': 'restaurant menu comic sans',
        'school_newsletter.jpg': 'school newsletter comic sans',
        # Adding new examples
        'warning_sign.jpg': 'funny warning sign comic sans',
        'birthday_card.jpg': 'birthday card comic sans design',
        'church_sign.jpg': 'church sign comic sans funny',
        'store_sign.jpg': 'store front sign comic sans',
        'meme.jpg': 'comic sans meme hate love',
        'wedding_invite.jpg': 'wedding invitation comic sans funny',
        'office_note.jpg': 'office memo comic sans',
        'cafe_menu.jpg': 'cafe menu board comic sans',
        'kids_book.jpg': 'children book cover comic sans',
        'protest_sign.jpg': 'protest sign comic sans funny'
    }
    
    for filename, query in searches.items():
        print(f"\nSearching for: {query}")
        image_urls = get_pinterest_images(query)
        
        if image_urls:
            filepath = os.path.join('images', filename)
            if download_image(image_urls[0], filepath):
                print(f"✅ Successfully downloaded {filename}")
            else:
                print(f"❌ Failed to download {filename}")
        else:
            print(f"❌ No images found for {query}")

if __name__ == "__main__":
    main()
