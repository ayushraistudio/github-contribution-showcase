🤝 Contributing to GitHub-Contribution-Showcase

Thank you for your interest in contributing! 🎉

This project is a dynamic API that generates contribution trophies using SVG themes. We welcome creative, clean, and beginner-friendly themes that make the showcase more interesting.

You do not need a local development setup to contribute. You can make your changes directly through the GitHub website or GitHub mobile app. A local setup is optional if you prefer working locally.

🎨 Adding a New SVG Theme

The theme definitions are maintained in:

src/generateTrophy.js


To add a theme, edit this file and add your theme to the existing themes structure.

Step 1: Choose a Theme Name

Choose a short, descriptive, and unique name.

Examples:

neon
cyberpunk
minimal
retro


Avoid names that are confusing, offensive, or already used by another theme.

Step 2: Add Your Theme

Open: src/generateTrophy.js

Add your new SVG theme to the existing theme definitions.

A basic theme can look like this:
```
your_theme_name: 
  <svg
    xmlns="http://www.w3.org/2000/svg"  width="800" height="250"  viewBox="0 0 800 250">
    <rect width="800" height="250" fill="#111827" />

    <text  x="400"  y="120" text-anchor="middle" fill="#ffffff" font-size="28" >
      Contributions: ${data.total_contributions}
    </text>
  </svg>
  ```


Important: Adapt this example to the existing structure in src/generateTrophy.js. Do not replace or remove existing themes.

📏 SVG Theme Rules

Every submitted theme must follow these rules.

Required

✅ SVG only.

✅ The root element must be <svg>.

✅ Include the correct namespace:

xmlns="http://www.w3.org/2000/svg"


✅ The SVG must be exactly 800×250.

✅ Use:

width="800"
height="250"
viewBox="0 0 800 250"


✅ Use only the data provided by the existing data object.

✅ Keep the theme self-contained.

✅ Make sure the SVG renders correctly without external resources.

Not Allowed

❌ No PNG, JPG, GIF, WebP, or other image files.

❌ No <image> elements referencing external or local images.

❌ No external fonts.

❌ No external CSS files.

❌ No external assets or URLs required to render the theme.

❌ No hardcoded GitHub usernames.

❌ Do not add fake contribution statistics.

❌ Do not modify unrelated API logic.

❌ Do not remove or break existing themes.

Do Not Hardcode Usernames

Themes are generated for different GitHub users, so usernames must come from the provided data.

Do not do this:

<text>Username: octocat</text>


Instead, use the appropriate value from the existing data object.

Before using a property, check src/generateTrophy.js to see which data fields are actually available.

🧩 Use Only the Provided Data

A theme should display information from the existing data object.

Do not create your own hardcoded user information or statistics.

For example:

${data.total_contributions}


is acceptable if total_contributions is provided by the existing data object.

Do not invent new data fields unless the project already supports them.

📐 Keep the SVG at 800×250

Every theme must fit inside the fixed canvas:

Width:  800px
Height: 250px


Use:

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="250"
  viewBox="0 0 800 250"
>


Your design should remain readable and visually correct across the entire 800×250 area.

🧪 Testing Your Theme

You can test your theme using the Vercel preview deployment.

After pushing your changes to your fork/branch, open the Vercel preview URL for that deployment and call the API with your theme name.

The URL follows this pattern:

https://your-preview-url.vercel.app/api?username=your_username&theme=your_theme_name


Replace:

your-preview-url with your Vercel preview deployment.

your_username with the GitHub username you want to test.

your_theme_name with the exact name of your new theme.

For example:

https://your-preview-url.vercel.app/api?username=octocat&theme=your_theme_name


Check that:

The SVG loads successfully.

The dimensions are 800×250.

The theme looks correct.

User-specific information is displayed dynamically.

No external images or fonts are required.

Existing themes still work.

If the preview does not render correctly, fix the theme before opening your PR.

📱 You Can Contribute Without Local Setup

A local development environment is optional.

You can contribute using:

GitHub web editor

GitHub mobile app

A local clone of the repository

If you are new to GitHub, the simplest workflow is:

Fork the repository.

Open src/generateTrophy.js.

Edit the file using GitHub's web or mobile editor.

Commit your changes to your fork.

Test the Vercel preview deployment.

Open a Pull Request.

🚀 Pull Request Rules

Please follow these rules when submitting a theme.

One Theme Per PR

Submit only one new theme per Pull Request.

Do not combine multiple unrelated themes into one PR.

If you have created three themes, submit three separate PRs.

This makes review easier and allows individual themes to be accepted or rejected independently.

Keep Your Changes Focused

A theme PR should normally contain only the changes necessary to add that theme.

Avoid:

Unrelated refactoring

Formatting unrelated files

Changing existing themes

Modifying API behavior

Removing existing code

Updating dependencies without a reason

❌ Common Reasons for PR Rejection

Your PR may need changes if it contains any of the following:

❌ SVG is not exactly 800×250.

❌ Missing xmlns="http://www.w3.org/2000/svg".

❌ External images or assets are used.

❌ External fonts are used.

❌ A GitHub username is hardcoded.

❌ Contribution statistics are hardcoded or invented.

❌ Data outside the provided data object is used.

❌ The SVG does not render correctly.

❌ The theme breaks existing API functionality.

❌ Existing themes were unnecessarily modified or removed.

❌ Multiple themes are included in one PR.

❌ Unrelated changes are included in the PR.

❌ The theme is incomplete or visually broken.

❌ The PR does not explain what was changed.

✅ Final Checklist

Before opening your PR, make sure:

 I added my theme in src/generateTrophy.js.

 My theme is SVG only.

 The SVG is exactly 800×250.

 The SVG has xmlns="http://www.w3.org/2000/svg".

 I did not use external images.

 I did not use external fonts.

 I did not hardcode a username.

 I used only the provided data object.

 I tested the theme using the Vercel preview API.

 Existing themes still work.

 This PR contains only one theme.

 I did not include unrelated changes.

🙌 Thank You!

Thank you for helping improve GitHub-Contribution-Showcase!

Small, focused, and well-tested contributions make the project easier for everyone to maintain. 💙
