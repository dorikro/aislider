# AI Slider – ChatGPT Depth-Controlled Prompt Interface

AI Slider is a web app interface built with Next.js that connects to OpenAI's ChatGPT API. It lets users input prompts and adjust the **depth of response** using a slider (from beginner-level 100 to expert-level 400+). A diagram toggle offers structured, visual-style outputs when enabled.

---

## Project Structure

```
aislider/
├── Components/
│   ├── DepthLevelIndicator.js     # Visual indicator for depth level
│   ├── GradientButton.js          # Styled button component
│   ├── ResponseDisplay.js         # Response formatting with code highlighting
├── Pages/
│   ├── Home                       # Main application page
├── integrations/
│   ├── Core.js                    # OpenAI API integration
├── Layout.js                      # Main layout wrapper
├── next.config.js                 # Next.js configuration
└── package.json                   # Project dependencies and scripts
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Create `.env.local` File

At the project root, add:

```
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Azure Static Web Apps

### Step 1: Prepare the App

```bash
npm run build
```

Push your repository to GitHub.

---

### Step 2: Create a Static Web App on Azure

1. Log into the [Azure Portal](https://portal.azure.com)
2. Go to "Create a resource" → Search "Static Web App"
3. Fill in:

   - **Resource Group**: (New or existing)
   - **Name**: (Your app’s name)
   - **Plan Type**: Free or Standard
   - **Region**: Closest to your audience

4. Under **Deployment Details**:

   - Source: GitHub
   - Sign in and authorize Azure
   - Select your repository and branch
   - Build Preset: Next.js
   - App location: `/`
   - Output location: `out`

5. Click **Review + Create** → **Create**

---

### Step 3: Configure Environment Variables

In your Azure Static Web App:

- Go to **Configuration**
- Add:

  ```
  Name: NEXT_PUBLIC_OPENAI_API_KEY
  Value: your_openai_api_key
  ```

- Click **Save**

---

### Step 4: Verify Deployment

- Push changes to your main branch
- Check **GitHub Actions** in your repo for deployment status
- Once complete, access your live app via the Azure Portal

---

## Customization Tips

- **Adjust depth logic** in `Components/DepthLevelIndicator.js`
- **Change prompt engineering** in `integrations/Core.js`
- **Edit the UI** in `Pages/Home.js`

---

## License

## Creative Commons Attribution-NonCommercial 4.0 International Public License (CC BY-NC 4.0)

By using this software, you agree to the following terms:

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may **not** use the material for commercial purposes.

No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

### Full License Text:
https://creativecommons.org/licenses/by-nc/4.0/legalcode

---

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.
To view a copy of this license, visit https://creativecommons.org/licenses/by-nc/4.0/

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Deployed via [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)
````

Let me know if you also want a pre-filled `.env.local.example`, `.gitignore`, or GitHub Actions workflow YAML.
