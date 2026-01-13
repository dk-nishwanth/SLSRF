# Setting Up Gemini AI Integration

## Get Your API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## Configure Locally

1. Open `.env.local` file in your project root
2. Replace `PLACEHOLDER_API_KEY` with your actual API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
3. Save the file and restart your development server

## Configure for Vercel Deployment

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add a new variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your actual API key
   - **Environment**: Production (and Preview if needed)
4. Redeploy your application

## Demo Mode

If no API key is configured, the application will run in demo mode with pre-generated sample insights. This allows you to test the UI functionality without requiring an API key.